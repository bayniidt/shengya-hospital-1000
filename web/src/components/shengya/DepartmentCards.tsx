import Image from 'next/image';
import Link from 'next/link';
const departments = [
  { title: '美容外科', english: 'AESTHETIC', description: '以审美与安全为前提，提供个性化的美容外科与皮肤管理服务。', image: '/ribenpeizhen/1715130456185169.jpg' },
  { title: '美容皮肤科', english: 'DERMATOLOGY', description: '关注皮肤状态与长期管理，让每一次咨询都有清晰的依据。', image: '/ribenpeizhen/1715131568213192.jpg' },
  { title: '医疗健康管理', english: 'WELLNESS', description: '从体检、咨询到持续管理，帮助您更好地了解自己的身体。', image: '/ribenpeizhen/1715131691832026.jpg' },
];
export function DepartmentCards() { return <section className="sy-departments"><div className="sy-container"><div className="sy-departments-heading"><div><p className="sy-kicker">OUR DEPARTMENTS</p><h2>一个团队，三种专业视角</h2></div><p>从外在美学到整体健康，我们把专业服务放在同一套安心标准里。</p></div><div className="sy-department-grid">{departments.map((item) => <article key={item.title}><div className="sy-department-image"><Image src={item.image} alt={item.title} fill sizes="(max-width: 700px) 100vw, 33vw" /></div><div className="sy-department-copy"><p>{item.english}</p><h3>{item.title}</h3><span>{item.description}</span><Link href="/contact">了解更多 <b>→</b></Link></div></article>)}</div></div></section>; }
