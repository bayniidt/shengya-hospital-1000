'use client';
import { useSiteContent } from './useSiteContent';
export function VideoSection() { const content = useSiteContent(); return <section className="sy-video"><video controls preload="metadata" poster={content.heroImage}><source src={content.heroVideo} type="video/mp4" /></video><div><p className="sy-kicker">SAINTIA STORIES</p><h2>看见圣娅，感受每一份认真</h2><p>了解医院环境与服务流程，提前熟悉到院体验。</p></div></section>; }
