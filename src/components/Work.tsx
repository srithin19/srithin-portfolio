import React from 'react';
import { ArrowUpRight } from '@phosphor-icons/react';
import { aiProjects, productProjects, Project } from '../data/content';
import { Asteroid, PALETTES, Planet } from './Space';

function Links({ links }: { links: Project['links'] }) {
  if (!links.length) return null;
  return (
    <div className="proj__links">
      {links.map((l) => (
        <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="text-link">
          {l.label} <ArrowUpRight size={14} weight="bold" />
        </a>
      ))}
    </div>
  );
}

function Stack({ items }: { items: string[] }) {
  return (
    <ul className="tags" aria-label="Built with">
      {items.map((s) => <li key={s}>{s}</li>)}
    </ul>
  );
}

function ProjectRow({ p }: { p: Project }) {
  return (
    <article className="row" data-reveal>
      <div className="row__head">
        <h4>{p.title}</h4>
        <p className="row__context">{p.context}</p>
      </div>
      <div className="row__body">
        <p>{p.summary}</p>
        <Stack items={p.stack} />
        <Links links={p.links} />
      </div>
    </article>
  );
}

// Each product card gets its own small planet from the palette, cycling in order.
const CARD_PLANETS = [PALETTES.sand, PALETTES.lavender, PALETTES.periwinkle, PALETTES.moon];

function ProductCard({ p, index }: { p: Project; index: number }) {
  return (
    <article className={`pcard${index % 4 === 0 || index % 4 === 3 ? ' pcard--wide' : ''}`} data-reveal>
      <div className="pcard__top">
        <p className="row__context">{p.context}</p>
        <Planet className="pcard__planet" size={30} palette={CARD_PLANETS[index % CARD_PLANETS.length]} craters />
      </div>
      <h4>{p.title}</h4>
      <p className="pcard__summary">{p.summary}</p>
      <Stack items={p.stack} />
      <Links links={p.links} />
    </article>
  );
}

function Work() {
  return (
    <section className="section" id="work" aria-labelledby="work-title">
      <div className="section__body section__body--work" data-speed="0.35" aria-hidden="true">
        <Planet size={44} palette={PALETTES.moon} craters />
      </div>
      <div className="section__body section__body--work-rock" data-speed="0.7" aria-hidden="true">
        <Asteroid size={30} variant={1} />
      </div>
      <div className="section__head" data-reveal>
        <h2 id="work-title">Selected work</h2>
        <p>Agent systems I've built at work, and products I've shipped for clients and myself.</p>
      </div>

      <div className="group">
        <h3 className="group__title" data-reveal>AI and agent systems</h3>
        <div className="rows">
          {aiProjects.map((p) => <ProjectRow key={p.id} p={p} />)}
        </div>
      </div>

      <div className="group">
        <h3 className="group__title" data-reveal>Products and client sites</h3>
        <div className="pcards">
          {productProjects.map((p, i) => <ProductCard key={p.id} p={p} index={i} />)}
        </div>
      </div>
    </section>
  );
}

export default Work;
