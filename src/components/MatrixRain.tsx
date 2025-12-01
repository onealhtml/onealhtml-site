'use client';

import { useMatrixRain } from '@/hooks/useMatrixRain';

export function MatrixRain() {
  const canvasRef = useMatrixRain();

  return (
    <canvas
      ref={canvasRef}
      id="matrix"
      className="fixed top-0 left-0 w-screen h-screen z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
}

