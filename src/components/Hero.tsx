import React, { useRef } from 'react';
import { ArrowRight, DownloadSimple } from '@phosphor-icons/react';
import { gsap, useGSAP, EASE, MOTION_OK, FINE_POINTER } from '../lib/gsap';
import { profile } from '../data/content';
import Portrait from './Portrait';
import { Asteroid, PALETTES, Planet } from './Space';

function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(MOTION_OK, () => {
        gsap
          .timeline({ defaults: { ease: EASE } })
          .from('.hero__portrait', { yPercent: 10, autoAlpha: 0, duration: 1.1 })
          .from('.hero__body', { scale: 0.6, autoAlpha: 0, duration: 0.9, stagger: 0.07 }, 0.15)
          .from('.hero__hi', { autoAlpha: 0, y: 12, duration: 0.7 }, 0.3)
          .from('.hero__name', { autoAlpha: 0, y: 26, duration: 0.9 }, 0.38)
          .from('.hero__fade', { autoAlpha: 0, y: 14, duration: 0.8, stagger: 0.07 }, 0.55);

        // Slow, continuous motion: asteroids tumble and drift.
        gsap.utils.toArray<HTMLElement>('.hero__rock').forEach((el, i) => {
          gsap.to(el, { rotation: i % 2 ? -360 : 360, duration: 40 + i * 12, ease: 'none', repeat: -1 });
          gsap.to(el, { y: i % 2 ? 14 : -14, duration: 5 + i, ease: 'sine.inOut', yoyo: true, repeat: -1 });
        });

        // Leaving the hero: bodies at different depths slide at different speeds.
        const st = { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true };
        gsap.to('.hero__copy', { yPercent: -24, ease: 'none', scrollTrigger: st });
        gsap.utils.toArray<HTMLElement>('.hero__body').forEach((el) => {
          const depth = Number(el.dataset.depth || 1);
          gsap.to(el, { y: -140 * depth, ease: 'none', scrollTrigger: st });
        });
      });

      // Planets lean away from the cursor by depth, crisp and quick.
      mm.add(FINE_POINTER, () => {
        const bodies = gsap.utils.toArray<HTMLElement>('.hero__body').map((el) => ({
          depth: Number(el.dataset.depth || 1),
          x: gsap.quickTo(el, 'x', { duration: 0.6, ease: 'power3.out' }),
          y: gsap.quickTo(el, 'yPercent', { duration: 0.6, ease: 'power3.out' }),
        }));
        const onMove = (e: PointerEvent) => {
          const nx = e.clientX / window.innerWidth - 0.5;
          const ny = e.clientY / window.innerHeight - 0.5;
          bodies.forEach((b) => {
            b.x(-nx * 40 * b.depth);
            b.y(-ny * 10 * b.depth);
          });
        };
        window.addEventListener('pointermove', onMove, { passive: true });
        return () => window.removeEventListener('pointermove', onMove);
      });
    },
    { scope: root },
  );

  return (
    <section className="hero" id="top" ref={root}>
      <div className="hero__nebula" aria-hidden="true" />

      <div className="hero__bodies" aria-hidden="true">
        <div className="hero__body hero__body--moon" data-depth="1.4">
          <Planet size={46} palette={PALETTES.periwinkle} craters />
        </div>
        <div className="hero__body hero__body--moon2" data-depth="0.8">
          <Planet size={22} palette={PALETTES.moon} craters />
        </div>
        <div className="hero__body hero__body--rock1" data-depth="1.6">
          <Asteroid className="hero__rock" size={38} variant={0} />
        </div>
        <div className="hero__body hero__body--rock2" data-depth="1.2">
          <Asteroid className="hero__rock" size={26} variant={1} />
        </div>
        <div className="hero__body hero__body--rock3" data-depth="0.9">
          <Asteroid className="hero__rock" size={18} variant={2} />
        </div>
      </div>

      <div className="hero__copy">
        <p className="hero__hi">Hi, I'm</p>
        <h1 className="hero__name">{profile.shortName}</h1>
        <p className="hero__tagline hero__fade">
          AI Agent Engineer at Emergent. I build LLM agents, RAG systems and the full-stack products around them.
        </p>
        <div className="hero__ctas hero__fade">
          <a className="pill pill--solid" href={`${process.env.PUBLIC_URL}/Srithin-Chillamcharla-Resume.pdf`} target="_blank" rel="noreferrer">
            Resume <DownloadSimple size={16} weight="bold" />
          </a>
          <a className="pill pill--outline" href="#contact">
            Let's talk <ArrowRight size={16} weight="bold" />
          </a>
        </div>
      </div>

      <div className="hero__figure">
        <div className="hero__parallax">
          <Portrait className="hero__portrait" alt={`3D character of ${profile.name}, smiling, arms crossed, in a light blue shirt`} />
        </div>
      </div>
    </section>
  );
}

export default Hero;
