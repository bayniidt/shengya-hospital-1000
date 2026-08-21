'use client';
import Image from 'next/image';
import { Header } from '@/components/shengya/Header';
import { Footer } from '@/components/shengya/Footer';
import { useDoctors } from '@/components/shengya/useDoctors';
export default function DoctorsPage() { const doctors = useDoctors(); return <><Header /><main className="sy-inner-page"><div className="sy-page-hero"><div className="sy-container"><p className="sy-kicker">OUR DOCTORS</p><h1>专业团队，悉心相伴</h1><p>每一次诊疗，都从充分沟通和专业判断开始。</p></div></div><section className="sy-section"><div className="sy-container"><div className="sy-doctor-grid sy-doctor-grid-all">{doctors.map((doctor) => <article className="sy-doctor-card" key={doctor.name}><div><Image src={doctor.image} alt={doctor.name} fill sizes="(max-width: 700px) 50vw, 25vw" /></div><h3>{doctor.name}</h3><p>{doctor.title}</p><small>{doctor.focus}</small></article>)}</div></div></section></main><Footer /></>; }
