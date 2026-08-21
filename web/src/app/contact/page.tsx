'use client';
import { Header } from '@/components/shengya/Header';
import { Footer } from '@/components/shengya/Footer';
import { ContactForm } from '@/components/shengya/ContactForm';
import { useSiteContent } from '@/components/shengya/useSiteContent';

export default function ContactPage() {
  const content = useSiteContent();
  return <><Header /><main className="sy-inner-page"><section className="sy-section sy-contact-section sy-contact-section-first"><div className="sy-container sy-contact-grid"><div className="sy-contact-copy"><p className="sy-kicker">SAINTIA MEDICAL CENTER</p><h2>期待与您见面</h2><p className="sy-contact-lead">我们会认真阅读每一条咨询，并由工作人员尽快与您确认。</p><div className="sy-contact-list"><div><span>地址</span><p>{content.address}</p></div><div><span>营业时间</span><p>{content.hours}</p></div><div><span>咨询电话</span><p><a href={`tel:${content.phone}`}>{content.phone}</a></p></div><div><span>邮箱</span><p>{content.email}</p></div></div><a className="sy-btn sy-btn-outline" href={`https://maps.google.com/?q=${encodeURIComponent(content.address)}`} target="_blank" rel="noreferrer">打开地图导航 <span>↗</span></a></div><div className="sy-form-wrap"><div className="sy-form-heading"><span>APPOINTMENT</span><h3>预约咨询</h3><p>请留下基本信息，我们将在营业时间内与您联系。</p></div><ContactForm /></div></div></section></main><Footer /></>;
}
