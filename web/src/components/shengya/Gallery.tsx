import Image from 'next/image';
import { environments } from './data';
export function Gallery() { return <div className="sy-gallery">{environments.map((src, i) => <div className={i === 0 ? 'sy-gallery-main' : ''} key={src}><Image src={src} alt="圣娅医院环境" fill sizes="(max-width: 700px) 100vw, 50vw" /></div>)}</div>; }
