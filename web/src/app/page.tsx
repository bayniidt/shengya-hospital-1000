'use client';

import Image from 'next/image';
import Link from 'next/link';
import { deploymentPath } from '@/lib/deploymentPath';
import { Header } from '@/components/shengya/Header';
import { Hero } from '@/components/shengya/Hero';
import { Gallery } from '@/components/shengya/Gallery';
import { DepartmentCards } from '@/components/shengya/DepartmentCards';
import { DoctorsPreview } from '@/components/shengya/DoctorsPreview';
import { Footer } from '@/components/shengya/Footer';
import { VideoSection } from '@/components/shengya/VideoSection';
import { ServicesSection } from '@/components/shengya/ServicesSection';
import { CellTherapySection } from '@/components/shengya/CellTherapySection';
import { ContactForm } from '@/components/shengya/ContactForm';
import { useLanguage } from '@/components/shengya/LanguageProvider';
import { ArrowDown } from 'lucide-react';

const careItems = [
  ['手术安全保障', 'Surgical Safety'],
  ['麻醉安全保障', 'Anaesthesia Safety'],
  ['设备安全保障', 'Equipment Safety'],
  ['专业团队保障', 'Expert Team'],
  ['材料安全保障', 'Material Safety'],
  ['隐私服务保障', 'Privacy Protection'],
].map(([title, titleEn], i) => ({ title, titleEn, image: `/ribenpeizhen/${['1715131568213192.jpg', '1715131598958971.jpg', '1715131630105219.jpg', '1715131647599181.jpg', '1715131691832026.jpg', '1715131725691509.jpg'][i]}` }));

export default function Home() {
  const { language, text } = useLanguage();
  return <>
    <Header />
    <main id="main-content">
      <Hero />
      <section className="sy-quick-actions" aria-label={text('医疗服务保障', 'Care standards')}><div className="sy-container"><div className="sy-trust-strip"><div><strong>20<sup>+</sup></strong><span>{text('年临床经验', 'Years of clinical experience')}</span></div><div><strong>60<sup>+</sup></strong><span>{text('专业医疗设备', 'Professional medical devices')}</span></div><div><strong>24<sup>h</sup></strong><span>{text('咨询响应', 'Enquiry response')}</span></div><a href="#about" aria-label={text('向下滚动了解更多', 'Scroll to learn more')}><ArrowDown aria-hidden="true" size={24} strokeWidth={1.4} /><span>{text('向下滚动', 'Scroll down')}<br />{text('了解更多', 'Learn more')}</span></a></div></div></section>
      <section id="about" className="sy-intro" data-reveal><div className="sy-container sy-intro-layout">
        <div className="sy-intro-copy"><p className="sy-kicker">SAINTIA MEDICAL CENTER</p><h2><span>{text('专业守护健康', 'Expertise protects your health')}</span><em>{text('温度陪伴改变', 'Compassion supports change')}</em></h2><p>{text('从初次沟通到术后随访，圣娅以清晰的医学判断、克制的审美和细致的服务，认真回应每一份期待。', 'From your first conversation through follow-up care, Saintia combines sound medical judgment, considered aesthetics and attentive service.')}</p><Link className="sy-link" href="/contact">{text('了解医院', 'Discover Saintia')} <span>→</span></Link></div>
        <div className="sy-intro-visual"><Image src="/ribenpeizhen/1715069992418710.jpg" alt={text('圣娅医疗团队', 'Saintia medical team')} fill sizes="(max-width: 800px) 100vw, 32vw" /><span>{text('专业团队 · 一对一沟通', 'Expert team · Personal communication')}</span></div>
        <div className="weui-cells sy-stat-grid" data-stagger><div className="weui-cell"><strong>3000<sup>㎡</sup></strong><span>{text('舒适诊疗空间', 'Comfortable clinical space')}</span></div><div className="weui-cell"><strong>60<sup>+</sup></strong><span>{text('专业医疗设备', 'Advanced medical devices')}</span></div><div className="weui-cell"><strong>20<sup>{text('年', 'yrs')}</sup></strong><span>{text('团队临床经验', 'Clinical team experience')}</span></div><div className="weui-cell"><strong>24<sup>h</sup></strong><span>{text('咨询响应', 'Enquiry response')}</span></div></div>
      </div></section>
      <DepartmentCards />
      <section className="sy-section sy-sand" data-reveal><div className="sy-container"><p className="sy-kicker">OUR ENVIRONMENT</p><div className="sy-section-heading"><h2>{text('在舒适的环境里，', 'Begin every step')}<br />{text('安心开启每一步', 'with confidence')}</h2><p>{text('从抵达、咨询到离院，我们为您准备细致而从容的服务体验。', 'From arrival and consultation through departure, every detail is designed for a calm experience.')}</p></div><Gallery /></div></section>
      <ServicesSection />
      <CellTherapySection />
      <section className="sy-section sy-care" data-reveal><div className="sy-container"><div className="sy-section-heading"><div><p className="sy-kicker">OUR CARE</p><h2>{text('六重安全与服务保障', 'Six standards of safety and care')}</h2></div><p>{text('医疗的安心，来自每个环节都清楚、规范，也经得起询问。', 'Confidence in care comes from clear, consistent standards at every stage.')}</p></div><div className="weui-cells sy-care-grid" data-stagger>{careItems.map((item, i) => { const title = language === 'zh' ? item.title : item.titleEn; return <article className="weui-cell" key={item.title}><div className="sy-care-image"><img src={deploymentPath(item.image)} alt={title} /></div><span>0{i + 1}</span><h3>{title}</h3><p>{text('严格遵循规范流程，以专业标准守护每一次诊疗。', 'Clear clinical processes and professional standards guide every treatment.')}</p></article>; })}</div></div></section>
      <DoctorsPreview />
      <VideoSection />
      <section className="sy-home-contact" data-reveal><div className="sy-container sy-home-contact-shell"><div className="sy-home-contact-copy"><p className="sy-kicker">BOOK A CONSULTATION</p><h2>{text('预约咨询', 'Book a consultation')}</h2><p>{text('与我们的医疗团队预约沟通，从了解您的需求开始。', 'Start with a conversation with our medical team about your needs.')}</p></div><ContactForm /></div></section>
    </main>
    <Footer />
  </>;
}
