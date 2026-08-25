'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useLanguage } from './LanguageProvider';

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const { language, setLanguage, text } = useLanguage();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const active = (path: string) => pathname === path;
  const closeMenu = () => setOpen(false);

  return <header className={`sy-header ${scrolled ? 'scrolled' : ''} ${pathname !== '/' ? 'sy-header-solid' : ''}`}>
    <div className="sy-container sy-header-inner">
      <Link href="/" className="sy-logo" aria-label={text('圣娅医疗中心首页', 'Saintia Medical Center home')}>
        <span>{text('圣娅', 'SAINTIA')}</span><small>SAINTIA MEDICAL CENTER</small>
      </Link>
      <nav className={open ? 'is-open' : ''} aria-label={text('主导航', 'Main navigation')}>
        <Link className={active('/') ? 'active' : ''} aria-current={active('/') ? 'page' : undefined} href="/" onClick={closeMenu}>{text('首页', 'Home')}</Link>
        <div className="sy-nav-group"><button type="button" onClick={() => { if (window.matchMedia('(max-width: 760px)').matches) { closeMenu(); router.push('/#services'); } }}>{text('医疗服务', 'Services')} <b>⌄</b></button><div className="sy-nav-dropdown">
          <Link href="/#services" onClick={closeMenu}>{text('服务总览', 'Overview')}</Link>
          <Link href="/#services" onClick={closeMenu}>{text('医美整形', 'Aesthetic Surgery')}</Link>
          <Link href="/#services" onClick={closeMenu}>{text('精密体检', 'Health Screening')}</Link>
          <Link href="/#services" onClick={closeMenu}>{text('再生医疗', 'Regenerative Medicine')}</Link>
        </div></div>
        <Link className={active('/doctors') ? 'active' : ''} aria-current={active('/doctors') ? 'page' : undefined} href="/doctors" onClick={closeMenu}>{text('医生介绍', 'Doctors')}</Link>
        <Link className={active('/contact') ? 'active' : ''} aria-current={active('/contact') ? 'page' : undefined} href="/contact" onClick={closeMenu}>{text('联系我们', 'Contact')}</Link>
        <div className="sy-language-switch" aria-label={text('语言切换', 'Language selector')}>
          <button type="button" className={language === 'zh' ? 'active' : ''} aria-pressed={language === 'zh'} onClick={() => setLanguage('zh')}>中</button><span>/</span><button type="button" className={language === 'en' ? 'active' : ''} aria-pressed={language === 'en'} onClick={() => setLanguage('en')}>EN</button>
        </div>
        <Link className="sy-nav-cta" href="/contact" onClick={closeMenu}>{text('预约咨询', 'Book a Consultation')}</Link>
      </nav>
      <button className={`sy-menu ${open ? 'is-active' : ''}`} onClick={() => setOpen(!open)} aria-label={open ? text('关闭菜单', 'Close menu') : text('打开菜单', 'Open menu')} aria-expanded={open}><i /><i /><i /></button>
    </div>
  </header>;
}
