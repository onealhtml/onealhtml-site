'use client';

import { memo, useState } from 'react';

export const SoundCloudEmbed = memo(function SoundCloudEmbed() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <section className="soundcloud-wrapper" aria-label="Featured music track">
      {/* Skeleton loader */}
      {!isLoaded && (
        <div className="w-full h-[166px] rounded-xl bg-primary/5 animate-pulse flex items-center justify-center">
          <div className="flex items-center gap-3 text-primary/30">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="animate-bounce">
              <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
            </svg>
            <span className="text-sm">Loading...</span>
          </div>
        </div>
      )}
      <iframe
        width="100%"
        height="166"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2246286959&color=%230f0&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=false"
        title="SoundCloud player - Water (Instrumental) track by onealhtml"
        style={{ border: 'none', display: isLoaded ? 'block' : 'none' }}
        onLoad={() => setIsLoaded(true)}
      />
      <div className="soundcloud-info">
        <a
          href="https://soundcloud.com/onealhtml"
          title="onealhtml"
          target="_blank"
          rel="noopener noreferrer"
        >
          onealhtml
        </a>
      </div>
    </section>
  );
});

