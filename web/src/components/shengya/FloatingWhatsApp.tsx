'use client';
import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const phone = '15821127772';

export function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);
  return <div className="sy-whatsapp">
    {open && <div className="sy-whatsapp-popover" role="dialog" aria-label="WhatsApp 联系方式">
      <button type="button" className="sy-whatsapp-close" onClick={() => setOpen(false)} aria-label="关闭"><X size={15} /></button>
      <p>WhatsApp 咨询</p>
      <a href={`https://wa.me/86${phone}`} target="_blank" rel="noreferrer">+86 {phone}</a>
    </div>}
    <button type="button" className="sy-whatsapp-trigger" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label="打开 WhatsApp 联系方式"><MessageCircle size={27} strokeWidth={1.8} /></button>
  </div>;
}
