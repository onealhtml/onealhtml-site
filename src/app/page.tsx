import { MatrixRain } from '@/components/MatrixRain';
import { GlitchText } from '@/components/GlitchText';
import { TypingAnimation } from '@/components/TypingAnimation';
import { SocialLinks } from '@/components/SocialLinks';
import { SoundCloudEmbed } from '@/components/SoundCloudEmbed';
import styles from './page.module.css';

export default function Home() {
  const words = [
    "Software Engineer",
    "AI Expecialist",
    "Music Producer",
  ];

  return (
    <>
      <MatrixRain />
      <div id="glass-overlay" />
      <div className={styles.container}>
        <header className={styles.header}>
          <GlitchText text="onealhtml" />
        </header>
        <main className={styles.main}>
          <TypingAnimation words={words} />
          <SocialLinks />
          <SoundCloudEmbed />
        </main>
      </div>
    </>
  );
}
