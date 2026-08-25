#!/usr/bin/env python3
"""Verify that the path-mounted demo does not leak root-relative media URLs."""

from __future__ import annotations

import re
import sys
from html.parser import HTMLParser
from urllib.parse import quote, urljoin, urlsplit, urlunsplit
from urllib.request import Request, urlopen


class AssetParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.assets: list[str] = []
        self.scripts: list[str] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        values = dict(attrs)
        if tag == "script" and values.get("src"):
            self.scripts.append(values["src"] or "")
        for name in ("src", "poster"):
            value = values.get(name)
            if value and tag in {"img", "video", "source"}:
                self.assets.append(value)
        if values.get("srcset"):
            self.assets.extend(
                candidate.strip().split(" ", 1)[0]
                for candidate in (values["srcset"] or "").split(",")
            )


def safe_url(url: str) -> str:
    parts = urlsplit(url)
    return urlunsplit((parts.scheme, parts.netloc, quote(parts.path), parts.query, parts.fragment))


def fetch(url: str, *, head: bool = False) -> tuple[bytes, str]:
    request = Request(
        safe_url(url),
        headers={"User-Agent": "shengya-demo-verifier/1.0"},
        method="HEAD" if head else "GET",
    )
    with urlopen(request, timeout=30) as response:
        return (b"" if head else response.read()), response.headers.get_content_type()


def main() -> int:
    base = (sys.argv[1] if len(sys.argv) > 1 else "http://47.105.113.38/shengya-demo/").rstrip("/") + "/"
    html_bytes, content_type = fetch(base)
    if content_type != "text/html":
        raise AssertionError(f"homepage returned {content_type}, expected text/html")

    html = html_bytes.decode("utf-8")
    parser = AssetParser()
    parser.feed(html)

    combined = html
    for script in parser.scripts:
        script_bytes, _ = fetch(urljoin(base, script))
        combined += script_bytes.decode("utf-8", errors="replace")

    forbidden = [
        r"(?<!/shengya-demo)/_next/image\?",
        r'(?<!/shengya-demo)/ribenpeizhen/',
        r'(?<!/shengya-demo)/圣娅医院素材/',
    ]
    for pattern in forbidden:
        if re.search(pattern, combined):
            raise AssertionError(f"unprefixed deployment asset found: {pattern}")

    checked = 0
    for asset in dict.fromkeys(parser.assets):
        if not any(token in asset for token in ("/_next/image?", ".jpg", ".jpeg", ".png", ".mp4")):
            continue
        try:
            _, asset_type = fetch(urljoin(base, asset), head=True)
        except Exception as error:
            raise AssertionError(f"asset request failed: {asset}: {error}") from error
        if not (asset_type.startswith("image/") or asset_type.startswith("video/")):
            raise AssertionError(f"asset returned {asset_type}: {asset}")
        checked += 1

    if checked == 0:
        raise AssertionError("no media assets were discovered")
    print(f"verified {checked} image/video URLs under /shengya-demo/")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
