'use client';

import Link from 'next/link';
import { Header } from '@/components/shengya/Header';
import { Footer } from '@/components/shengya/Footer';
import { ServicesSection } from '@/components/shengya/ServicesSection';
import { useLanguage } from '@/components/shengya/LanguageProvider';

export default function ServicesPage() {
  const { text } = useLanguage();
  return <><Header /><main className="sy-inner-page sy-services-page">
    <section className="sy-page-hero"><div className="sy-container sy-page-hero-inner"><div><p className="sy-kicker">OUR SERVICES</p><h1>{text('从评估开始，', 'Care begins with')}<br />{text('找到适合您的方案', 'the right assessment')}</h1></div><p>{text('我们把医疗判断、充分沟通和长期陪伴放在同一条服务路径里。', 'Clinical judgement, open communication and long-term support belong to one clear care pathway.')}</p></div></section>
    <ServicesSection standalone />
    <section className="sy-service-note"><div className="sy-container"><div className="weui-cells"><div className="weui-cell"><strong>01</strong><span>{text('先评估，再决定', 'Assess before deciding')}</span><p>{text('每项服务都应建立在专业面诊和充分知情的基础上。', 'Every service begins with an in-person assessment and informed discussion.')}</p></div><div className="weui-cell"><strong>02</strong><span>{text('透明沟通每一步', 'Clear at every step')}</span><p>{text('我们会说明流程、预期与注意事项，不用模糊承诺替代医学判断。', 'We explain process, expectations and considerations without vague promises.')}</p></div><div className="weui-cell"><strong>03</strong><span>{text('需要时，联系我们', 'Talk it through')}</span><p><Link href="/contact">{text('预约一次面对面咨询 →', 'Book an in-person consultation →')}</Link></p></div></div></div></section>
  </main><Footer /></>;
}
