'use client';

import { useState, useEffect, useRef } from 'react';

export function useTypingEffect(words: string[], typingSpeed = 80, deletingSpeed = 50) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const type = () => {
      if (isDeleting) {
        setText(prev => currentWord.substring(0, prev.length - 1));

        if (text.length === 1) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      } else {
        setText(prev => currentWord.substring(0, prev.length + 1));

        if (text === currentWord) {
          timeoutRef.current = setTimeout(() => setIsDeleting(true), 1500);
          return;
        }
      }
    };

    const speed = isDeleting ? deletingSpeed : typingSpeed;
    timeoutRef.current = setTimeout(type, speed);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [text, wordIndex, isDeleting, words, typingSpeed, deletingSpeed]);

  return text;
}

