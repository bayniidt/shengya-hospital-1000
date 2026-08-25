'use client';

import { FormEvent, useState } from 'react';
import { deploymentPath } from '@/lib/deploymentPath';
import { useLanguage } from './LanguageProvider';

type SubmitState = 'idle' | 'loading' | 'success' | 'error';

export function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>('idle');
  const { text } = useLanguage();

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState('loading');
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    try {
      const response = await fetch(deploymentPath('/api/contact'), { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
      if (!response.ok) throw new Error();
      form.reset();
      setSubmitState('success');
    } catch {
      setSubmitState('error');
    }
  }

  const statusMessage = submitState === 'success'
    ? text('已收到您的信息，我们会尽快与您联系。', 'Thank you. We will contact you shortly.')
    : text('提交失败，请直接拨打咨询电话。', 'Submission failed. Please call us directly.');

  return <>
    <form className="weui-form sy-form" onSubmit={submit}>
      <div className="weui-form__control-area"><div className="weui-cells__group weui-cells__group_form"><div className="weui-cells">
        <label className="weui-cell weui-cell_active"><span className="weui-cell__hd"><span className="weui-label">{text('您的称呼', 'Your name')}</span></span><span className="weui-cell__bd"><input className="weui-input" required name="name" placeholder={text('请输入姓名', 'Enter your name')} /></span></label>
        <label className="weui-cell weui-cell_active"><span className="weui-cell__hd"><span className="weui-label">{text('联系电话', 'Phone number')}</span></span><span className="weui-cell__bd"><input className="weui-input" required name="phone" type="tel" inputMode="tel" placeholder={text('请输入手机号', 'Enter your phone number')} /></span></label>
        <label className="weui-cell weui-cell_active weui-cell_vertical"><span className="weui-cell__hd"><span className="weui-label">{text('咨询内容', 'How can we help?')}</span></span><span className="weui-cell__bd"><textarea className="weui-textarea" required name="message" rows={4} placeholder={text('请简单描述您的需求', 'Tell us briefly about your needs')} /></span></label>
      </div></div></div>
      <label className="weui-agree sy-check"><input required type="checkbox" className="weui-agree__checkbox" /><span className="weui-agree__text">{text('我已阅读并同意隐私说明', 'I have read and agree to the privacy notice')}</span></label>
      <button className="weui-btn weui-btn_primary sy-btn sy-btn-dark" type="submit" disabled={submitState === 'loading'}>{submitState === 'loading' && <span className="weui-primary-loading weui-primary-loading_transparent"><i className="weui-primary-loading__dot" /></span>}{submitState === 'loading' ? text('提交中…', 'Submitting…') : text('提交咨询', 'Submit Enquiry')}</button>
      {(submitState === 'success' || submitState === 'error') && <p className="sy-form-status" role="status">{statusMessage}</p>}
    </form>
    {(submitState === 'success' || submitState === 'error') && <div className="weui-toast sy-toast" role="status" onClick={() => setSubmitState('idle')}><i className={submitState === 'success' ? 'weui-icon-success-no-circle weui-icon_toast' : 'weui-icon-warn weui-icon_toast'} /><p className="weui-toast__content">{submitState === 'success' ? text('提交成功', 'Submitted') : text('提交失败', 'Unable to submit')}</p></div>}
  </>;
}
