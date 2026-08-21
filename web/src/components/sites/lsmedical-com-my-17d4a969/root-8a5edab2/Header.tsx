"use client";

import { useState } from "react";
import Link from "next/link";
import { NAV_LINKS, ASSET } from "./data";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="site-header__logo" aria-label="LS Medical">
          <img src={ASSET("ls-main-logo.png")} alt="LS Medical" />
        </Link>

        <nav className="site-header__nav">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href}>
                  {link.label}
                  {link.children.length > 0 && (
                    <svg
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M1 1l4 4 4-4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </svg>
                  )}
                </a>
                {link.children.length > 0 && (
                  <ul className="site-header__dropdown">
                    {link.children.map((child) => (
                      <li key={child.label}>
                        <a href={child.href}>{child.label}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li>
              <a href="#appointment">
                <span className="ls-menu-ap">APPOINTMENT</span>
              </a>
            </li>
          </ul>
        </nav>

        <button
          className="site-header__burger"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {mobileOpen && (
        <div className="site-header__mobile">
          <ul>
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href} onClick={() => setMobileOpen(false)}>
                  {link.label}
                </a>
                {link.children.length > 0 && (
                  <ul>
                    {link.children.map((child) => (
                      <li key={child.label}>
                        <a
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li>
              <a href="#appointment" onClick={() => setMobileOpen(false)}>
                APPOINTMENT
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
