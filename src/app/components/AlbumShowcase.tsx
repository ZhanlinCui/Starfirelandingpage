import { useState } from "react";
import { ChevronLeft, ChevronRight, ImageIcon } from "lucide-react";
import { fonts } from "../content";

export type ShowcaseSlide = {
  /** Local path (e.g. /screenshots/canvas-overview.png) or URL. When empty, renders a styled placeholder. */
  src: string;
  alt: string;
};

type AlbumShowcaseProps = {
  slides: ShowcaseSlide[];
  /** Label shown over placeholder images (e.g. "Coming Soon") */
  placeholderLabel?: string;
  aspect?: string;
};

function PlaceholderSlide({ alt, label }: { alt: string; label: string }) {
  return (
    <div className="relative w-full h-full shrink-0 flex items-center justify-center bg-gradient-to-br from-[#0d1729] via-[#111f35] to-[#0a1020]">
      <div className="flex flex-col items-center gap-3 opacity-60">
        <div className="w-14 h-14 rounded-2xl border border-white/[0.08] bg-white/[0.03] flex items-center justify-center">
          <ImageIcon className="w-6 h-6 text-sky-400/50" />
        </div>
        <span
          className="text-[11px] tracking-[0.08em] uppercase text-sky-300/60"
          style={{ fontFamily: fonts.mono }}
        >
          {label}
        </span>
        <span className="text-[10px] text-gray-600 max-w-[180px] text-center leading-[1.5]">
          {alt}
        </span>
      </div>
      {/* Subtle grid background */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
        <defs>
          <pattern id={`ph-${alt.replace(/\s/g, "")}`} width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="0.4" fill="white" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#ph-${alt.replace(/\s/g, "")})`} />
      </svg>
    </div>
  );
}

export function AlbumShowcase({
  slides,
  placeholderLabel = "Product Screenshot Coming",
  aspect = "aspect-[16/10]",
}: AlbumShowcaseProps) {
  const [active, setActive] = useState(0);
  const total = slides.length;

  if (total === 0) return null;

  return (
    <div className="rounded-2xl overflow-hidden border border-white/[0.12] bg-[#0a0f1d]">
      {/* Title bar */}
      <div className="h-9 border-b border-white/[0.12] bg-white/[0.04] flex items-center px-4 gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400/85" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber-300/85" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-400/85" />
      </div>

      {/* Carousel */}
      <div className={`relative ${aspect} overflow-hidden`}>
        <div
          className="flex h-full w-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div key={`slide-${i}`} className="relative h-full w-full shrink-0">
              {slide.src ? (
                <>
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(6,9,18,0.35),rgba(6,9,18,0.03))]" />
                </>
              ) : (
                <PlaceholderSlide alt={slide.alt} label={placeholderLabel} />
              )}
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        {total > 1 && (
          <>
            <button
              type="button"
              onClick={() => setActive((p) => (p - 1 + total) % total)}
              className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#081223]/85 border border-white/[0.2] flex items-center justify-center text-slate-200 hover:bg-[#10203a] transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => setActive((p) => (p + 1) % total)}
              className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#081223]/85 border border-white/[0.2] flex items-center justify-center text-slate-200 hover:bg-[#10203a] transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}

        {/* Dots */}
        {total > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={`dot-${i}`}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  active === i ? "w-6 bg-white" : "w-2.5 bg-white/45 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
