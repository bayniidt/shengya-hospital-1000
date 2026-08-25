'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function MotionProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.registerPlugin(ScrollTrigger);
    const frame = window.requestAnimationFrame(() => {
      const context = gsap.context(() => {
        const heroElements = gsap.utils.toArray<HTMLElement>('[data-hero-motion]');
        if (heroElements.length > 0) {
          gsap.fromTo(heroElements, { autoAlpha: 0, y: 28 }, {
            autoAlpha: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.11,
            ease: 'power3.out',
          });
        }

        gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((element) => {
          gsap.fromTo(element, { autoAlpha: 0, y: 34 }, {
            autoAlpha: 1,
            y: 0,
            duration: 0.78,
            ease: 'power3.out',
            scrollTrigger: { trigger: element, start: 'top 88%', once: true },
          });
        });

        gsap.utils.toArray<HTMLElement>('[data-stagger]').forEach((group) => {
          const children = Array.from(group.children);
          if (children.length === 0) return;
          gsap.fromTo(children, { autoAlpha: 0, y: 24 }, {
            autoAlpha: 1,
            y: 0,
            duration: 0.62,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: { trigger: group, start: 'top 86%', once: true },
          });
        });

        gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((element) => {
          gsap.to(element, {
            yPercent: 7,
            ease: 'none',
            scrollTrigger: { trigger: element, start: 'top bottom', end: 'bottom top', scrub: 0.7 },
          });
        });
      });

      return () => context.revert();
    });

    return () => {
      window.cancelAnimationFrame(frame);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [pathname]);

  return children;
}
