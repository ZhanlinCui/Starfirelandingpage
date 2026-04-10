import { motion } from "motion/react";
import type { Locale } from "../i18n";
import { fonts, socialProofContent, type SocialProofLogoItem } from "../content";

type SocialProofMarqueesProps = {
  locale: Locale;
};

function MarqueeLogo({ item }: { item: SocialProofLogoItem }) {
  return (
    <div className="shrink-0 flex items-center justify-center h-11 md:h-12 lg:h-[3.25rem] px-3 md:px-4 min-w-[4rem]">
      <img
        src={item.logo}
        alt=""
        loading="eager"
        decoding="async"
        className="max-h-11 md:max-h-12 lg:max-h-[3.25rem] w-auto max-w-[9.5rem] md:max-w-[12rem] lg:max-w-[13rem] object-contain object-center opacity-[0.88]"
      />
    </div>
  );
}

function EcosystemMarquee({ items, direction }: { items: SocialProofLogoItem[]; direction: "left" | "right" }) {
  const animClass = direction === "left" ? "social-marquee-left" : "social-marquee-right";
  const gapClass = "gap-10 md:gap-14 lg:gap-[4.25rem]";
  const padEnd = "pr-10 md:pr-14 lg:pr-[4.25rem]";

  return (
    <div className="social-proof-marquee-viewport relative w-full overflow-hidden py-2 md:py-3 min-h-[3.75rem] md:min-h-[4rem]">
      <div className={`social-proof-marquee-static ${gapClass}`} aria-hidden="true">
        {items.map((item) => (
          <MarqueeLogo key={item.id} item={item} />
        ))}
      </div>

      <div className={`social-proof-marquee-track flex w-max items-center ${animClass}`} aria-hidden="true">
        <div className={`flex items-center ${gapClass} ${padEnd}`}>
          {items.map((item) => (
            <MarqueeLogo key={`a-${item.id}`} item={item} />
          ))}
        </div>
        <div className={`flex items-center ${gapClass} ${padEnd}`}>
          {items.map((item) => (
            <MarqueeLogo key={`b-${item.id}`} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

function RowIntro({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="text-center max-w-[680px] mx-auto mb-3 md:mb-4 px-4"
    >
      <span
        className="inline-flex items-center px-3 py-1 rounded-full text-[11px] tracking-[0.06em] uppercase border border-sky-300/35 text-sky-200/90 bg-sky-300/[0.08]"
        style={{ fontFamily: fonts.mono }}
      >
        {eyebrow}
      </span>
      <h3
        className="mt-3 text-[clamp(1.25rem,2.8vw,1.65rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-white"
        style={{ fontFamily: fonts.display }}
      >
        {title}
      </h3>
      <p className="mt-2 text-[13px] md:text-[14px] leading-[1.6] text-slate-300/88">{subtitle}</p>
    </motion.div>
  );
}

/** Cloud / silicon partner logo marquee only (placed before Final CTA in App). */
export function SocialProofMarquees({ locale }: SocialProofMarqueesProps) {
  const copy = socialProofContent[locale];

  return (
    <section
      className="relative border-t border-white/[0.08] bg-[#080d18]/95 py-6 md:py-8"
      aria-label={locale === "zh" ? "云算力与合作云" : "Cloud and silicon partners"}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_40%_at_50%_0%,rgba(56,189,248,0.06),transparent_60%)] pointer-events-none" />

      <p className="sr-only">{copy.summary}</p>

      <div className="relative z-10">
        <RowIntro
          eyebrow={copy.cloudEyebrow}
          title={copy.cloudTitle}
          subtitle={copy.cloudSubtitle}
        />

        <EcosystemMarquee items={copy.cloudPartners} direction="left" />
      </div>
    </section>
  );
}
