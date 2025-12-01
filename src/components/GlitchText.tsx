'use client';

import { memo } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'span' | 'div';
}

export const GlitchText = memo(function GlitchText({
  text,
  className = '',
  as: Component = 'h1'
}: GlitchTextProps) {
  return (
    <Component
      className={`glitch ${className}`}
      data-text={text}
    >
      {text}
    </Component>
  );
});

