'use client';
import { Header } from '@/components/shengya/Header';
import { Footer } from '@/components/shengya/Footer';
import { ContactForm } from '@/components/shengya/ContactForm';
import { useSiteContent } from '@/components/shengya/useSiteContent';
export default function ContactPage() { const content = useSiteContent(); return <><Header /><main className="sy-inner-page"><div className="sy-page-hero sy-page-hero-contact"><div className="sy-container"><p className="sy-kicker">CONTACT US</p><h1>联系我们</h1><p>欢迎预约到院，与我们聊聊您的需求。</p></div></div><section className="sy-section"><div className="sy-container sy-contact-grid"><div><p className="sy-kicker">SAINTIA MEDICAL CENTER</p><h2>期待与您见面</h2><div className="sy-contact-list"><div><span>地址</span><p>{content.address}</p></div><div><span>营业时间</span><p>{content.hours}</p></div><div><span>咨询电话</span><p><a href={`tel:${content.phone}`}>{content.phone}</a></p></div><div><span>邮箱</span><p>{content.email}</p></div></div><a className="sy-btn sy-btn-dark" href={`https://maps.google.com/?q=${encodeURIComponent(content.address)}`} target="_blank" rel="noreferrer">打开地图导航</a></div><ContactForm /></div></section></main><Footer /></>; }
