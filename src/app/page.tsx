import { MatrixRain } from '@/components/MatrixRain';
import { GlitchText } from '@/components/GlitchText';
import { TypingAnimation } from '@/components/TypingAnimation';
import { SocialLinks } from '@/components/SocialLinks';
import { SoundCloudEmbed } from '@/components/SoundCloudEmbed';
import { ErrorBoundary } from '@/components/ErrorBoundary';

export default function Home() {
  const words = [
    "Software Engineer",
    "AI Specialist",
    "Music Producer",
  ];

  return (
    <>
      <ErrorBoundary fallback={<div className="fixed inset-0 bg-black z-0" />}>
        <MatrixRain />
      </ErrorBoundary>
      {/* Glass overlay with enhanced blur */}
      <div 
        id="glass-overlay" 
        className="fixed inset-0 z-[1] pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0.1) 100%)',
          backdropFilter: 'blur(2px) saturate(200%)',
          WebkitBackdropFilter: 'blur(2px) saturate(200%)',
        }}
      />
      <div className="flex flex-col items-center justify-center min-h-screen relative z-10 px-4 py-8 animate-slide-up">
        <header className="w-full flex justify-center items-center">
          <GlitchText text="onealhtml" />
        </header>
        <main className="w-full flex flex-col items-center">
          <TypingAnimation words={words} />
          <SocialLinks />
          <SoundCloudEmbed />
        </main>
      </div>
    </>
  );
}
