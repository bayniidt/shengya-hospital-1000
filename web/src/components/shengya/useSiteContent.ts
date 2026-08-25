'use client';
import { useEffect, useState } from 'react';
import { deploymentPath } from '@/lib/deploymentPath';
import { useLanguage } from './LanguageProvider';

const fallback = { siteName: '圣娅', siteNameEn: 'Saintia', tagline: '专业与温度相遇于圣娅', taglineEn: 'Where expertise meets compassionate care', phone: '021-0000-0000', email: 'service@saintia-medical.com', address: '上海市青浦区蟠中路373号', addressEn: '373 Panzhong Road, Qingpu District, Shanghai', hours: '周一至周日 09:00—22:00', hoursEn: 'Monday–Sunday, 09:00–22:00', heroImage: '/ribenpeizhen/1715069992418710.jpg', heroVideo: '/圣娅医院素材/视频/Weixin Videos2026-08-21_095537_672.mp4', mapUrl: '' };

export function useSiteContent() {
  const { language } = useLanguage();
  const [content, setContent] = useState(fallback);
  useEffect(() => { fetch(deploymentPath('/api/content')).then((res) => res.ok ? res.json() : Promise.reject()).then((remote) => setContent({ ...fallback, ...remote })).catch(() => undefined); }, []);
  const localized = (key: 'siteName' | 'tagline' | 'address' | 'hours') => language === 'en' ? content[`${key}En`] || content[key] : content[key];
  return { ...content, siteName: localized('siteName'), tagline: localized('tagline'), address: localized('address'), hours: localized('hours'), heroImage: deploymentPath(content.heroImage), heroVideo: deploymentPath(content.heroVideo) };
}
