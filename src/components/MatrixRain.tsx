'use client';

import { useMatrixRain } from '@/hooks/useMatrixRain';
import styles from './MatrixRain.module.css';

export function MatrixRain() {
  const canvasRef = useMatrixRain();

  return (
    <canvas
      ref={canvasRef}
      id="matrix"
      className={styles.matrix}
      aria-hidden="true"
    />
  );
}

