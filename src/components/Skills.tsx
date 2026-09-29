import React from 'react';
import { Browsers, CloudArrowUp, Database, Sparkle } from '@phosphor-icons/react';
import { skills, SkillGroup } from '../data/content';
import { Asteroid, PALETTES, Planet } from './Space';

const ICONS: Record<SkillGroup['id'], React.ReactNode> = {
  ai: <Sparkle size={22} weight="fill" />,
  backend: <Database size={22} weight="fill" />,
  frontend: <Browsers size={22} weight="fill" />,
  cloud: <CloudArrowUp size={22} weight="fill" />,
};

function Skills() {
  return (
    <section className="section" id="skills" aria-labelledby="skills-title">
      <div className="section__body section__body--skills-rock" data-speed="0.8" aria-hidden="true">
        <Asteroid size={22} variant={2} />
      </div>
      <div className="section__head" data-reveal>
        <h2 id="skills-title">Tech stack</h2>
        <p>Java and Python on the backend, React on the front, and generative AI wired through the middle.</p>
      </div>

      <div className="bento">
        {skills.map((s) => (
          <div className={`bento__card bento__card--${s.id}`} key={s.id} data-reveal>
            {s.id === 'ai' && (
              <div className="bento__planet" aria-hidden="true">
                <Planet size={150} palette={PALETTES.lavender} bands />
              </div>
            )}
            <div className="bento__head">
              <span className="bento__icon" aria-hidden="true">{ICONS[s.id]}</span>
              <div>
                <h3>{s.group}</h3>
                <p className="bento__note">{s.note}</p>
              </div>
            </div>
            <ul className="bento__primary" aria-label={`${s.group}, main skills`}>
              {s.primary.map((i) => <li key={i}>{i}</li>)}
            </ul>
            <ul className="bento__items" aria-label={`${s.group}, also`}>
              {s.items.map((i) => <li key={i}>{i}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
