'use client';

import { useTypingEffect } from '@/hooks/useTypingEffect';
import styles from './TypingAnimation.module.css';

interface TypingAnimationProps {
  words: string[];
}

export function TypingAnimation({ words }: TypingAnimationProps) {
  const text = useTypingEffect(words);

  return (
    <div id="typing-container" className={styles.typingContainer}>
      <span
        id="typing-text"
        className={styles.typingText}
        data-text={text}
      >
        {text}
      </span>
      <span className={styles.cursor}></span>
    </div>
  );
}

