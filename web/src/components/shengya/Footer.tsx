'use client';
import { useSiteContent } from './useSiteContent';
export function Footer() { const content = useSiteContent(); return <footer className="sy-footer"><div className="sy-container sy-footer-grid"><div className="sy-logo"><span>{content.siteName}</span><small>SAINTIA MEDICAL CENTER</small></div><div><p>{content.address}</p><p>{content.hours}</p></div><div><p>咨询热线</p><a href={`tel:${content.phone}`}>{content.phone}</a></div></div><div className="sy-container sy-copyright">© {content.siteName}医疗美容医院 · 健康美丽，始于专业</div></footer>; }
