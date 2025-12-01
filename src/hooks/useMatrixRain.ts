'use client';

import { useEffect, useRef } from 'react';
import { useWindowSize } from './useWindowSize';

export function useMatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { width, height } = useWindowSize();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = width;
    canvas.height = height;

    const fontSize = width <= 480 ? 14 : 18;
    const columns = Math.floor(canvas.width / fontSize);
    const drops: number[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * -100);
    }

    const letters = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン'.split('');

    function draw() {
      if (!ctx || !canvas) return;

      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `bold ${fontSize}px monospace`;
      ctx.textBaseline = 'top';

      for (let i = 0; i < columns; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];

        const intensity = Math.random();
        if (intensity > 0.97) {
          ctx.fillStyle = '#ffffff';
          ctx.shadowColor = '#ffffff';
          ctx.shadowBlur = 3;
        } else if (intensity > 0.85) {
          ctx.fillStyle = '#00ff41';
          ctx.shadowColor = '#00ff41';
          ctx.shadowBlur = 2;
        } else if (intensity > 0.6) {
          ctx.fillStyle = '#00ee00';
          ctx.shadowColor = '#00ee00';
          ctx.shadowBlur = 1;
        } else {
          ctx.fillStyle = '#00bb00';
          ctx.shadowBlur = 0;
        }

        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        ctx.shadowBlur = 0;

        drops[i]++;

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = Math.floor(Math.random() * -100);
        }
      }
    }

    const interval = setInterval(draw, 33);

    return () => clearInterval(interval);
  }, [width, height]);

  return canvasRef;
}

