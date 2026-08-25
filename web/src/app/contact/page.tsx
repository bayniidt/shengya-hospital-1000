'use client';
import { Header } from '@/components/shengya/Header';
import { Footer } from '@/components/shengya/Footer';
import { ContactForm } from '@/components/shengya/ContactForm';
import { useSiteContent } from '@/components/shengya/useSiteContent';
import { useLanguage } from '@/components/shengya/LanguageProvider';

export default function ContactPage() {
  const content = useSiteContent();
  const { text } = useLanguage();
  return <><Header /><main className="sy-inner-page"><section className="sy-section sy-contact-section sy-contact-section-first"><div className="sy-container sy-contact-grid"><div className="sy-contact-copy"><p className="sy-kicker">SAINTIA MEDICAL CENTER</p><h2>{text('期待与您见面', 'We look forward to meeting you')}</h2><p className="sy-contact-lead">{text('我们会认真阅读每一条咨询，并由工作人员尽快与您确认。', 'Our team reads every enquiry carefully and will contact you as soon as possible.')}</p><div className="sy-contact-list"><div><span>{text('地址', 'Address')}</span><p>{content.address}</p></div><div><span>{text('营业时间', 'Opening Hours')}</span><p>{content.hours}</p></div><div><span>{text('咨询电话', 'Telephone')}</span><p><a href={`tel:${content.phone}`}>{content.phone}</a></p></div><div><span>{text('邮箱', 'Email')}</span><p>{content.email}</p></div></div><a className="sy-btn sy-btn-outline" href={content.mapUrl || `https://maps.google.com/?q=${encodeURIComponent(content.address)}`} target="_blank" rel="noreferrer">{text('打开地图导航', 'Open in Maps')} <span>↗</span></a></div><div className="sy-form-wrap"><div className="sy-form-heading"><span>APPOINTMENT</span><h3>{text('预约咨询', 'Book a Consultation')}</h3><p>{text('请留下基本信息，我们将在营业时间内与您联系。', 'Leave your details and we will contact you during opening hours.')}</p></div><ContactForm /></div></div></section></main><Footer /></>;
}
