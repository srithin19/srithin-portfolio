import React from 'react';

const IMAGE = `${process.env.PUBLIC_URL}/character/cutout.webp`;

type Props = { className?: string; alt: string };

/** The cut-out character as a still image, with a tint layer that tones it down for the night scene. */
function Portrait({ className, alt }: Props) {
  return (
    <div
      className={`portrait${className ? ` ${className}` : ''}`}
      // The tint layer is masked by the cutout itself, so it only darkens the character.
      style={{ '--portrait-mask': `url(${IMAGE})` } as React.CSSProperties}
    >
      <img className="portrait__img" src={IMAGE} alt={alt} width={896} height={1200} decoding="async" />
      <span className="portrait__tint" aria-hidden="true" />
    </div>
  );
}

export default Portrait;
