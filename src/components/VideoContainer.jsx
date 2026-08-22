import React, { useRef, useEffect, useState } from 'react';

export const VideoContainer = ({
  src,
  poster,
  aspectRatio = "aspect-video",
  className = "",
  showBorder = false
}) => {
  const videoRef = useRef(null);

  // These sit below the fold and are the heaviest thing on the page, so the
  // src is withheld until the section is near the viewport. The poster shows
  // in its place until then, including in the prerendered HTML.
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    if (typeof IntersectionObserver === 'undefined') {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      // Start the download a little before it scrolls into view.
      { rootMargin: '300px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (shouldLoad && videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay handling
      });
    }
  }, [shouldLoad, src]);

  return (
    <div className={`relative overflow-hidden bg-[#14161b] w-full h-full group ${aspectRatio} ${showBorder ? 'rounded-2xl border border-white/15 shadow-2xl' : ''} ${className}`}>
      {/* HTML5 Video Tag with exact src path binding */}
      <video
        ref={videoRef}
        src={shouldLoad ? src : undefined}
        poster={poster}
        autoPlay
        muted
        playsInline
        className="w-full h-full object-cover relative z-10 pointer-events-none"
        onCanPlay={(e) => e.target.play()}
      />

      {showBorder && (
        <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none group-hover:border-emerald-500/40 transition duration-500 z-20"></div>
      )}
    </div>
  );
};

export default VideoContainer;
