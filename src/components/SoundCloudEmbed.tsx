'use client';

import { memo } from 'react';
import styles from './SoundCloudEmbed.module.css';

export const SoundCloudEmbed = memo(function SoundCloudEmbed() {
  return (
    <section className={styles.soundcloudWrapper} aria-label="Featured music track">
      <iframe
        width="100%"
        height="166"
        allow="autoplay"
        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2112413862&color=%230f0&auto_play=false&hide_related=true&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
        title="SoundCloud player - agua track by onealhtml"
        style={{ border: 'none' }}
      />
      <div className={styles.soundcloudInfo}>
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

