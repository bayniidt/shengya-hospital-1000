'use client';
import { useMemo, useState } from 'react';
import { videos } from './data';
import { useSiteContent } from './useSiteContent';

export function VideoSection() {
  const content = useSiteContent();
  const list = useMemo(() => Array.from(new Set([content.heroVideo, ...videos].filter(Boolean))), [content.heroVideo]);
  const [active, setActive] = useState(0);
  const current = list[Math.min(active, list.length - 1)];
  return <section className="sy-video"><div className="sy-video-stage"><video key={current} controls preload="metadata" poster={content.heroImage}><source src={current} type="video/mp4" /></video><div className="sy-video-list" aria-label="圣娅影像列表">{list.map((src, index) => <button type="button" className={index === active ? 'active' : ''} onClick={() => setActive(index)} key={src}><video src={src} muted preload="metadata" playsInline /><span>{String(index + 1).padStart(2, '0')}</span></button>)}</div></div><div className="sy-video-copy"><p className="sy-kicker">SAINTIA STORIES</p><h2>看见圣娅，感受每一份认真</h2><p>通过六段院内影像，了解医院环境、团队日常与服务流程，提前熟悉到院体验。</p></div></section>;
}
