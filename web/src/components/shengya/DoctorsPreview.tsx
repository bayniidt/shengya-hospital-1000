'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useDoctors } from './useDoctors';
export function DoctorsPreview() { const doctors = useDoctors(); return <section className="sy-section sy-doctors"><div className="sy-container"><div className="sy-section-heading"><p className="sy-kicker">OUR DOCTORS</p><h2>专业团队，悉心相伴</h2><p>每一位医生都以严谨、审美与沟通，参与您的专属方案。</p></div><div className="sy-doctor-grid">{doctors.slice(0, 4).map((doctor) => <Link href="/doctors" className="sy-doctor-card" key={doctor.name}><div><Image src={doctor.image} alt={doctor.name} fill sizes="(max-width: 700px) 50vw, 25vw" /></div><h3>{doctor.name}</h3><p>{doctor.title}</p></Link>)}</div><Link className="sy-link" href="/doctors">查看完整团队 →</Link></div></section>; }
