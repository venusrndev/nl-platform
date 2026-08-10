import React from 'react';

/**
 * Text-only placeholder mark. Swap the <span> for an <img> when the real
 * logo file lands — the surrounding lockup geometry stays the same.
 */
export const NLMark = ({ size = "normal" }) => (
  <img
    src="/logo.svg"
    alt="Next League Logo"
    className={`${size === "large" ? "w-10 h-10" : "w-8 h-8"} object-contain`}
  />
);

export const BrandLockup = ({ layout = "horizontal", size = "normal" }) => {
  const vertical = layout === "vertical";

  return (
    <div
      className={`flex ${
        vertical ? "flex-col items-center text-center gap-2" : "items-center gap-3"
      }`}
    >
      <NLMark size={size} />

      <span
        className={`bg-[#EAE4EA]/20 ${vertical ? "w-10 h-px" : "w-px h-8"}`}
        aria-hidden="true"
      ></span>

      <div className={`flex flex-col ${vertical ? "items-center" : ""}`}>
        <span
          className={`font-headline font-bold tracking-wide text-[#f3f4f6] uppercase leading-none ${
            size === "large" ? "text-lg md:text-xl" : "text-base md:text-lg"
          }`}
        >
          Next League
        </span>
        <span className="font-ui text-[10px] tracking-[0.28em] text-[#9ca3af] font-semibold uppercase mt-1">
          Marketing
        </span>
      </div>
    </div>
  );
};

export default BrandLockup;
