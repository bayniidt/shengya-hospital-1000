 'use client';
import Image from 'next/image';
import { useSiteContent } from './useSiteContent';
import { useLanguage } from './LanguageProvider';
export function Footer() { const content = useSiteContent(); const { text } = useLanguage(); return <footer className="sy-footer"><div className="sy-container sy-footer-grid"><div className="sy-footer-brand"><div className="sy-logo"><Image src="/logo.png" alt="圣娅医疗" width={54} height={54} /><span>{content.siteName}</span></div><small>SAINTIA MEDICAL CENTER</small></div><div><p>{content.address}</p><p>{content.hours}</p></div><div><p>{text('咨询热线', 'Enquiries')}</p><a href={`tel:${content.phone}`}>{content.phone}</a><p>{content.email}</p></div></div><div className="sy-container sy-copyright">© {content.siteName} {text('医疗美容医院 · 健康美丽，始于专业', 'Medical Aesthetic Hospital · Better health and beauty begin with expertise')}</div></footer>; }
