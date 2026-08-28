'use client';

import { Header } from '@/components/shengya/Header';
import { Footer } from '@/components/shengya/Footer';
import { useLanguage } from '@/components/shengya/LanguageProvider';

export default function PrivacyPage() {
  const { text } = useLanguage();
  return <><Header /><main className="sy-inner-page"><section className="sy-section sy-legal-page"><div className="sy-container sy-legal-copy"><p className="sy-kicker">PRIVACY NOTICE</p><h1>{text('隐私说明', 'Privacy notice')}</h1><p>{text('我们仅使用您主动提交的姓名、联系电话和咨询内容，用于回复医疗咨询与预约沟通。未经您的同意，不会将信息用于无关用途。', 'We use the name, phone number and enquiry details you submit only to respond to consultation and booking requests. We do not use this information for unrelated purposes without your consent.')}</p><h2>{text('信息保存', 'Data retention')}</h2><p>{text('咨询记录仅由圣娅医疗相关工作人员访问，并按照内部流程进行保存和处理。您可以通过联系我们页面申请咨询相关信息的说明。', 'Consultation records are accessed by authorised Saintia Medical staff and handled according to internal procedures. You may contact us for information about a consultation record.')}</p><h2>{text('联系我们', 'Contact')}</h2><p>{text('如对隐私处理有疑问，请通过联系我们页面与我们沟通。', 'If you have questions about privacy handling, please contact us through the contact page.')}</p></div></section></main><Footer /></>;
}
