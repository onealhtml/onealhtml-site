'use client';

import { useTypingEffect } from '@/hooks/useTypingEffect';

interface TypingAnimationProps {
  words: string[];
}

export function TypingAnimation({ words }: TypingAnimationProps) {
  const text = useTypingEffect(words);

  return (
    <div id="typing-container" className="typing-container">
      <span
        id="typing-text"
        className="typing-text"
        data-text={text}
      >
        {text}
      </span>
      <span className="cursor"></span>
    </div>
  );
}

