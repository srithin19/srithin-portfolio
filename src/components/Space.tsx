import React, { useId } from 'react';

// Light comes from the upper left everywhere, so every body gets the same crisp shadow side.
const SHADE = 'rgba(16, 19, 40, 0.36)';

type Palette = { base: string; band: string; band2: string; crater: string; ring?: string };

// Taken from the character render: the shirt's periwinkles, a lavender between them and the
// night sky, and a sand tone that echoes the warm skin without going red.
export const PALETTES: Record<'periwinkle' | 'lavender' | 'sand' | 'moon', Palette> = {
  periwinkle: { base: '#aebcda', band: '#90a1c5', band2: '#c6d2eb', crater: '#8394bb', ring: '#d6def1' },
  lavender: { base: '#bdb3ec', band: '#a89ddf', band2: '#d3cbf6', crater: '#9d91d6', ring: '#e0daf9' },
  sand: { base: '#ecd3a2', band: '#dfbf82', band2: '#f4e2bf', crater: '#d4b173', ring: '#f6e8cb' },
  moon: { base: '#a9b0c8', band: '#98a0bb', band2: '#c0c6d8', crater: '#8f97b2' },
};

type PlanetProps = {
  size: number;
  palette: Palette;
  bands?: boolean;
  craters?: boolean;
  ring?: boolean;
  /** Ring tilt in degrees. */
  tilt?: number;
  className?: string;
};

/** A flat vector planet: base, optional bands and craters, a crisp shadow side, optional ring. */
export function Planet({ size, palette, bands, craters, ring, tilt = -18, className }: PlanetProps) {
  const id = useId().replace(/:/g, '');
  const r = 50;
  const box = ring ? 220 : 100;
  const o = (box - 100) / 2;
  return (
    <svg
      className={className}
      width={ring ? size * 2.2 : size}
      height={ring ? size * 2.2 : size}
      viewBox={`0 0 ${box} ${box}`}
      aria-hidden="true"
    >
      <defs>
        <clipPath id={`c${id}`}>
          <circle cx={o + r} cy={o + r} r={r} />
        </clipPath>
        {/* Only the half of the ring that passes in front of the planet. */}
        <clipPath id={`f${id}`}>
          <rect x="0" y={o + r} width={box} height={box} transform={`rotate(${tilt} ${box / 2} ${box / 2})`} />
        </clipPath>
      </defs>
      {ring && (
        <ellipse cx={box / 2} cy={box / 2} rx="96" ry="22" fill="none" stroke={palette.ring} strokeWidth="7"
          transform={`rotate(${tilt} ${box / 2} ${box / 2})`} opacity="0.9" />
      )}
      <g clipPath={`url(#c${id})`}>
        <circle cx={o + r} cy={o + r} r={r} fill={palette.base} />
        {bands && (
          <g transform={`rotate(${ring ? tilt : -12} ${o + r} ${o + r})`}>
            <rect x={o - 10} y={o + 26} width="120" height="9" fill={palette.band} />
            <rect x={o - 10} y={o + 44} width="120" height="5" fill={palette.band2} />
            <rect x={o - 10} y={o + 58} width="120" height="12" fill={palette.band} />
            <rect x={o - 10} y={o + 78} width="120" height="4" fill={palette.band2} />
          </g>
        )}
        {craters && (
          <g fill={palette.crater}>
            <circle cx={o + 34} cy={o + 36} r="8" />
            <circle cx={o + 62} cy={o + 60} r="11" />
            <circle cx={o + 40} cy={o + 72} r="5" />
            <circle cx={o + 70} cy={o + 28} r="4" />
          </g>
        )}
        {/* Shadow side: an offset circle clipped to the planet gives a crisp terminator. */}
        <circle cx={o + r + 26} cy={o + r + 22} r={r + 8} fill={SHADE} />
      </g>
      {ring && (
        <ellipse cx={box / 2} cy={box / 2} rx="96" ry="22" fill="none" stroke={palette.ring} strokeWidth="7"
          transform={`rotate(${tilt} ${box / 2} ${box / 2})`} clipPath={`url(#f${id})`} />
      )}
    </svg>
  );
}

const ROCKS = [
  'M52 6c16 2 34 12 40 28 6 17-2 36-16 46-15 10-37 13-53 5C8 77 2 60 5 44 8 25 30 3 52 6z',
  'M40 4c20-3 44 6 52 24 7 16 2 38-14 50-17 12-44 14-60 2C3 68 0 48 6 32 12 16 24 6 40 4z',
  'M58 8c14 6 30 20 32 38 2 19-12 38-30 44-19 6-41-1-51-17C0 57 5 36 17 22 28 9 44 2 58 8z',
];

/** A smooth irregular rock with a couple of craters and the same crisp shadow side. */
export function Asteroid({ size, variant = 0, className }: { size: number; variant?: number; className?: string }) {
  const id = useId().replace(/:/g, '');
  const d = ROCKS[variant % ROCKS.length];
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 100 100" aria-hidden="true">
      <defs>
        <clipPath id={`a${id}`}>
          <path d={d} />
        </clipPath>
      </defs>
      <g clipPath={`url(#a${id})`}>
        <path d={d} fill="#9aa2bd" />
        <circle cx="36" cy="38" r="9" fill="#858da9" />
        <circle cx="62" cy="58" r="6" fill="#858da9" />
        <circle cx="46" cy="70" r="4" fill="#858da9" />
        <circle cx="78" cy="74" r="44" fill={SHADE} />
      </g>
    </svg>
  );
}

/**
 * The lunar horizon the character stands on. It is four times as wide as the character and
 * centred on it: flat plains run off both sides of the screen, and crater rims rise exactly
 * where the render is cropped (the middle quarter's edges), dipping in between so the arms
 * and hands stay visible.
 */
