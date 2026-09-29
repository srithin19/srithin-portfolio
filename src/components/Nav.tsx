import React, { useEffect, useState } from 'react';

const links = [
  ['Work', 'work'],
  ['Experience', 'experience'],
  ['About', 'about'],
  ['Contact', 'contact'],
] as const;

/** Floating pill nav. Clear over the hero, solid once you scroll into the light sections. */
function Nav() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('top');
    if (!hero) return;
    const io = new IntersectionObserver(([e]) => setSolid(!e.isIntersecting), { rootMargin: '-64px 0px 0px 0px' });
    io.observe(hero);
    return () => io.disconnect();
  }, []);

  return (
    <header className={`nav${solid ? ' is-solid' : ''}`}>
      <nav className="nav__pill" aria-label="Sections">
        {links.map(([label, id]) => (
          <a key={id} href={`#${id}`}>{label}</a>
        ))}
      </nav>
    </header>
  );
}

export default Nav;
