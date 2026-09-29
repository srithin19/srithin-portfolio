# Srithin Chillamcharla, portfolio

Personal site for an AI Agent Engineer: LLM agents, RAG systems and full-stack SaaS.

Built with React, TypeScript, SCSS and GSAP (ScrollTrigger).

- **Theme**: a dark space scene in the character render's own palette (periwinkle, lavender, sand). A canvas starfield twinkles behind the whole page with the occasional shooting star, and small moons and asteroids drift in the hero. Each section has its own nebula tint.
- **Character**: the 3D render as a still image, toned down by a tint layer masked to the cutout, flush with the hero's right and bottom edges.
- With `prefers-reduced-motion`, the starfield is drawn once and nothing animates.

## Run it

```bash
npm install
npm start        # http://localhost:3000
npm run build    # production build in build/
```

## Editing content

Everything you'd change lives in [`src/data/content.ts`](src/data/content.ts): profile links, projects, experience, skills and certifications.

- Project screenshots: `src/assets/projects/`. A project with an `image` is shown as a large showcase, one without is a compact row.
- Resume: `public/Srithin-Chillamcharla-Resume.pdf` (the hero's Resume button).
- Character: `public/character/cutout.webp` (the cut-out render, 896x1200) and `portrait.jpg` (social preview image). If you swap the render for one with a different size, update the `aspect-ratio` values for `.portrait` and `.hero__figure` in `src/index.scss`.

## Deploy

It's a static build, so Vercel, Netlify or Cloudflare Pages work with the defaults (build command `npm run build`, output `build`). `public/_redirects` is included for Netlify. After deploying, put your domain into the `og:image` tag in `public/index.html` so link previews show the image.
