import React from 'react';
import { ArrowUpRight } from '@phosphor-icons/react';
import { certifications, education } from '../data/content';
import { PALETTES, Planet } from './Space';

function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="section__body section__body--about" data-speed="0.45" aria-hidden="true">
        <Planet size={56} palette={PALETTES.moon} craters />
      </div>
      <div className="about">
        <div className="about__intro" data-reveal>
          <h2 id="about-title">About</h2>
          <p>
            I started with neural network research in college, then spent two years at EPAM building
            enterprise web apps end to end. Now I build AI agents at Emergent and work directly with clients,
            turning their support problems into workflows that run in production.
          </p>
          <p>
            I care most about the part after the demo: evaluation, grounding, and the product around the
            model. Outside work I build SaaS products and client sites.
          </p>
        </div>

        <dl className="facts" data-reveal>
          <div>
            <dt>Education</dt>
            <dd>
              {education.degree}
              <span>{education.school}, {education.period}. {education.grade}.</span>
            </dd>
          </div>
          <div>
            <dt>Publications</dt>
            <dd className="facts__pubs">
              <div>
                <a
                  className="text-link"
                  href="https://doi.org/10.1109/OTCON60325.2024.10687749"
                  target="_blank"
                  rel="noreferrer"
                >
                  An Image Hiding Strategy Based on Neural Networks <ArrowUpRight size={14} weight="bold" />
                </a>
                <span>IEEE OTCON, June 2024</span>
              </div>
              <div>
                <a
                  className="text-link"
                  href="https://doi.org/10.1007/978-981-96-0139-4_18"
                  target="_blank"
                  rel="noreferrer"
                >
                  Neural Style Transfer Using PyTorch <ArrowUpRight size={14} weight="bold" />
                </a>
                <span>Springer, Intelligent Data Engineering and Analytics, 2025</span>
              </div>
            </dd>
          </div>
          <div>
            <dt>Certifications</dt>
            <dd>
              <ul>
                {certifications.map((c) => <li key={c}>{c}</li>)}
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
}

export default About;
