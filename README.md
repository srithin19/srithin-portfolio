<<<<<<< HEAD
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
=======
# Srithin Chillamcharla — Portfolio

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Sass](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)

## About

Hi, I'm **Srithin Chillamcharla** — a Full Stack Developer with a passion for building intelligent, scalable applications. I specialise in AI-powered solutions, full-stack web development, and modern cloud architectures.

This portfolio showcases my projects, career timeline, technical expertise, and ways to get in touch.

- GitHub: [github.com/srithin19](https://github.com/srithin19)
- LinkedIn: [linkedin.com/in/srithin-chillamcharla](https://www.linkedin.com/in/srithin-chillamcharla/)

## Skills & Technologies

**AI / Machine Learning**

- Large Language Models (LLMs), Prompt Engineering, RAG pipelines
- OpenAI API, LangChain, AI-assisted application development

**Full Stack Development**

- Frontend: React, TypeScript, JavaScript, HTML5, SCSS
- Backend: Node.js, Express, Java, Spring Boot, REST APIs
- Databases: SQL, MongoDB, PostgreSQL

**DevOps & Cloud**

- Git, GitHub, CI/CD pipelines
- AWS, Docker

## Features

- Responsive design with dark / light mode support
- Multi-section layout: About, Expertise, Timeline, Projects, Contact
- Built with React, TypeScript, and SCSS

## Local Setup

1. Install [Node.js](https://nodejs.org/) then run:

   ```bash
   npm install
   npm start
   ```

2. Open [http://localhost:3000](http://localhost:3000).

## Deployment (GitHub Pages)

```bash
npm run deploy
```

Live at: [srithin19.github.io/portfolio](https://srithin19.github.io/portfolio)
>>>>>>> 2443b55b3b3776d34103cf377545eb94cba06bde
