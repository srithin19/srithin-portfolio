import React, { useEffect, useRef } from 'react';

type Star = { x: number; y: number; r: number; depth: number; phase: number; speed: number; tint: string };

const TINTS = ['#ffffff', '#ffffff', '#ffffff', '#e6ddff', '#d9fbe9', '#fff1c7'];

/**
 * A fixed starfield behind the whole page. Three depth layers drift against the cursor,
 * stars twinkle, and every few seconds a shooting star crosses. Draws a single static
 * frame under prefers-reduced-motion, and pauses while the tab is hidden.
 */
function Starfield() {
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const el = canvas.current;
    const ctx = el?.getContext('2d');
    if (!el || !ctx) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let stars: Star[] = [];
    let w = 0;
    let h = 0;
    let frame = 0;
    const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
    let shoot: { x: number; y: number; vx: number; vy: number; life: number } | null = null;
    let nextShoot = performance.now() + 3000;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      el.width = Math.round(w * dpr);
      el.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.round((w * h) / 5200);
      stars = Array.from({ length: count }, () => {
        const depth = Math.random() < 0.55 ? 0.3 : Math.random() < 0.7 ? 0.6 : 1;
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          r: depth === 1 ? 1.1 + Math.random() * 0.8 : depth === 0.6 ? 0.8 + Math.random() * 0.5 : 0.5 + Math.random() * 0.4,
          depth,
          phase: Math.random() * Math.PI * 2,
          speed: 0.6 + Math.random() * 1.6,
          tint: TINTS[Math.floor(Math.random() * TINTS.length)],
        };
      });
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      mouse.x += (mouse.tx - mouse.x) * 0.06;
      mouse.y += (mouse.ty - mouse.y) * 0.06;
      for (const s of stars) {
        const px = s.x - mouse.x * 14 * s.depth;
        const py = s.y - mouse.y * 10 * s.depth;
        const x = ((px % w) + w) % w;
        const y = ((py % h) + h) % h;
        const tw = reduce ? 1 : 0.55 + 0.45 * Math.sin(t / 1000 * s.speed + s.phase);
        ctx.globalAlpha = (0.35 + 0.65 * s.depth) * tw;
        ctx.fillStyle = s.tint;
        ctx.beginPath();
        ctx.arc(x, y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      if (!reduce) {
        if (!shoot && t > nextShoot) {
          const fromLeft = Math.random() < 0.5;
          shoot = {
            x: fromLeft ? Math.random() * w * 0.4 : w * (0.6 + Math.random() * 0.4),
            y: Math.random() * h * 0.35,
            vx: (fromLeft ? 1 : -1) * (9 + Math.random() * 4),
            vy: 3.5 + Math.random() * 2,
            life: 1,
          };
        }
        if (shoot) {
          const len = 11;
          const g = ctx.createLinearGradient(shoot.x, shoot.y, shoot.x - shoot.vx * len, shoot.y - shoot.vy * len);
          g.addColorStop(0, `rgba(255,255,255,${shoot.life})`);
          g.addColorStop(1, 'rgba(255,255,255,0)');
          ctx.strokeStyle = g;
          ctx.lineWidth = 1.6;
          ctx.lineCap = 'round';
          ctx.beginPath();
          ctx.moveTo(shoot.x, shoot.y);
          ctx.lineTo(shoot.x - shoot.vx * len, shoot.y - shoot.vy * len);
          ctx.stroke();
          shoot.x += shoot.vx;
          shoot.y += shoot.vy;
          shoot.life -= 0.022;
          if (shoot.life <= 0 || shoot.x < -200 || shoot.x > w + 200 || shoot.y > h) {
            shoot = null;
            nextShoot = t + 5000 + Math.random() * 6000;
          }
        }
      }
    };

    const loop = (t: number) => {
      draw(t);
      frame = requestAnimationFrame(loop);
    };

    const onMove = (e: PointerEvent) => {
      mouse.tx = e.clientX / w - 0.5;
      mouse.ty = e.clientY / h - 0.5;
    };
    const onVisibility = () => {
      cancelAnimationFrame(frame);
      if (!document.hidden && !reduce) frame = requestAnimationFrame(loop);
    };
    const onResize = () => {
      resize();
      if (reduce) draw(0);
    };

    resize();
    if (reduce) draw(0);
    else {
      frame = requestAnimationFrame(loop);
      window.addEventListener('pointermove', onMove, { passive: true });
      document.addEventListener('visibilitychange', onVisibility);
    }
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return <canvas className="starfield" ref={canvas} aria-hidden="true" />;
}

export default Starfield;
