import React, { useEffect, useRef } from 'react';
import { gsap, useGSAP, EASE, MOTION_OK } from './lib/gsap';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Work from './components/Work';
import Experience from './components/Experience';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';
import Starfield from './components/Starfield';

function App() {
  const root = useRef<HTMLDivElement>(null);

  // Every element marked data-reveal rises in once as it enters the viewport. Opacity only
  // (not visibility), so links further down stay reachable with the keyboard before they reveal.
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
          gsap.from(el, {
            opacity: 0,
            y: 28,
            duration: 0.9,
            ease: EASE,
            scrollTrigger: { trigger: el, start: 'top 88%', once: true },
          });
        });
      });
    },
    { scope: root },
  );

  // Section planets drift at their own speed as you scroll past, for depth.
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap.utils.toArray<HTMLElement>('[data-speed]').forEach((el) => {
          gsap.fromTo(
            el,
            { y: 0 },
            {
              y: -220 * Number(el.dataset.speed),
              ease: 'none',
              scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: true },
            },
          );
        });
      });
    },
    { scope: root },
  );

  // Tabbing into a section that hasn't revealed yet shows it at once.
  useEffect(() => {
    const el = root.current;
    if (!el) return;
    const onFocus = (e: FocusEvent) => {
      const section = (e.target as HTMLElement).closest<HTMLElement>('[data-reveal]');
      if (section) gsap.set(section, { opacity: 1, y: 0 });
    };
    el.addEventListener('focusin', onFocus);
    return () => el.removeEventListener('focusin', onFocus);
  }, []);

  return (
    <div ref={root}>
      <Starfield />
      <a className="skip-link" href="#main">Skip to content</a>
      <Nav />
      <main id="main">
        <Hero />
        <Work />
        <Experience />
        <Skills />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;
