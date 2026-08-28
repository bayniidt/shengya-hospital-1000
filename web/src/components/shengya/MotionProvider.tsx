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
    const cleanups: Array<() => void> = [];
    let revertContext: (() => void) | undefined;
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
            immediateRender: false,
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
            immediateRender: false,
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

        const hero = document.querySelector<HTMLElement>('.sy-hero');
        const heroImage = document.querySelector<HTMLElement>('.sy-hero-bg');
        if (hero && heroImage && window.matchMedia('(pointer: fine)').matches) {
          const moveX = gsap.quickTo(heroImage, 'x', { duration: 0.8, ease: 'power3.out' });
          const moveY = gsap.quickTo(heroImage, 'y', { duration: 0.8, ease: 'power3.out' });
          const onMove = (event: PointerEvent) => {
            const bounds = hero.getBoundingClientRect();
            moveX((event.clientX - bounds.left - bounds.width / 2) * 0.012);
            moveY((event.clientY - bounds.top - bounds.height / 2) * 0.008);
          };
          const onLeave = () => { moveX(0); moveY(0); };
          hero.addEventListener('pointermove', onMove);
          hero.addEventListener('pointerleave', onLeave);
          cleanups.push(() => {
            hero.removeEventListener('pointermove', onMove);
            hero.removeEventListener('pointerleave', onLeave);
          });
        }

        gsap.utils.toArray<HTMLElement>('.sy-btn, .sy-nav-cta').forEach((button) => {
          const lift = gsap.quickTo(button, 'y', { duration: 0.28, ease: 'power2.out' });
          const onEnter = () => lift(-3);
          const onLeave = () => lift(0);
          button.addEventListener('mouseenter', onEnter);
          button.addEventListener('mouseleave', onLeave);
          cleanups.push(() => {
            button.removeEventListener('mouseenter', onEnter);
            button.removeEventListener('mouseleave', onLeave);
          });
        });
      });
      revertContext = () => context.revert();
    });

    return () => {
      window.cancelAnimationFrame(frame);
      cleanups.forEach((cleanup) => cleanup());
      revertContext?.();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [pathname]);

  return children;
}
