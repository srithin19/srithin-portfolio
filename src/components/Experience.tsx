import React, { useRef } from 'react';
import { gsap, useGSAP, MOTION_OK } from '../lib/gsap';
import { experience } from '../data/content';
import { Asteroid } from './Space';

function Experience() {
  const root = useRef<HTMLElement>(null);

  // The rail fills as you read down the roles.
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(MOTION_OK, () => {
        gsap.fromTo(
          '.timeline__fill',
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: { trigger: '.timeline', start: 'top 70%', end: 'bottom 60%', scrub: 0.4 },
          },
        );
      });
    },
    { scope: root },
  );

  return (
    <section className="section" id="experience" aria-labelledby="exp-title" ref={root}>
      <div className="section__body section__body--exp" data-speed="0.3" aria-hidden="true">
        <Asteroid size={34} variant={2} />
      </div>
      <div className="section__head" data-reveal>
        <h2 id="exp-title">Experience</h2>
        <p>From research on neural networks, to enterprise full-stack, to agents in production.</p>
      </div>

      <ol className="timeline">
        <span className="timeline__rail" aria-hidden="true">
          <span className="timeline__fill" />
        </span>
        {experience.map((r) => (
          <li className="role" key={r.company} data-reveal>
            <div className="role__meta">
              <p className="role__period">{r.period}</p>
              <p>{r.place}</p>
            </div>
            <div className="role__body">
              <h3>
                {r.title} <span>at {r.company}</span>
              </h3>
              <ul className="role__points">
                {r.points.map((pt) => <li key={pt}>{pt}</li>)}
              </ul>
              <ul className="tags" aria-label="Focus">
                {r.tags.map((t) => <li key={t}>{t}</li>)}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default Experience;
