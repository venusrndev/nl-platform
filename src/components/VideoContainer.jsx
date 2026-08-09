import React, { useRef, useEffect } from 'react';

export const VideoContainer = ({
  src,
  aspectRatio = "aspect-video",
  className = "",
  showBorder = false
}) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay handling
      });
    }
  }, [src]);

  return (
    <div className={`relative overflow-hidden bg-[#14161b] w-full h-full group ${aspectRatio} ${showBorder ? 'rounded-2xl border border-white/15 shadow-2xl' : ''} ${className}`}>
      {/* HTML5 Video Tag with exact src path binding */}
      <video
        ref={videoRef}
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover relative z-10"
        onCanPlay={(e) => e.target.play()}
      />

      {showBorder && (
        <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none group-hover:border-emerald-500/40 transition duration-500 z-20"></div>
      )}
    </div>
  );
};

export default VideoContainer;
