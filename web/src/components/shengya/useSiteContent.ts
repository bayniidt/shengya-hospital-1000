'use client';
import { useEffect, useState } from 'react';
const fallback = { siteName: '圣娅', tagline: '专业与温度相遇于圣娅', phone: '021-0000-0000', email: 'service@saintia-medical.com', address: '上海市青浦区蟠中路373号', hours: '周一至周日 09:00—22:00', heroImage: '/ribenpeizhen/1715069992418710.jpg', heroVideo: '/圣娅医院素材/视频/Weixin Videos2026-08-21_095537_672.mp4' };
export function useSiteContent() { const [content, setContent] = useState(fallback); useEffect(() => { fetch('/api/content').then((res) => res.ok ? res.json() : Promise.reject()).then(setContent).catch(() => undefined); }, []); return content; }
