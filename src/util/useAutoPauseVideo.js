import { useEffect, useRef } from 'react';

// Pause vdoes when out of view to stop safari crying.
export function useAutoPauseVideo(options = { threshold: 0.5 }) {
  const ref = useRef(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {}); // autoplay may fail if not muted
          } else {
            video.pause();
          }
        });
      },
      options
    );

    observer.observe(video);
    return () => {
      observer.disconnect();
    };
  }, [options]);

  return ref;
}
