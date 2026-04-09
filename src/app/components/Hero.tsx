import { ArrowUpRight, ScanSearch } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { landingContent } from "../content";
import type { Locale } from "../i18n";
import { HeroVisual } from "./HeroVisual";

type HeroProps = {
  locale: Locale;
};

export function Hero({ locale }: HeroProps) {
  const reduceMotion = useReducedMotion();
  const copy = landingContent[locale].hero;

  return (
    <section className="relative overflow-hidden px-6 pb-16 pt-[116px] md:pb-20 md:pt-[132px]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_65%_at_50%_0%,rgba(101,211,255,0.17),transparent_70%)]" />

      <div className="relative mx-auto max-w-[1260px]">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mx-auto max-w-[980px] text-center"
        >
          <p className="inline-flex rounded-full border border-[var(--line-strong)] bg-[var(--panel-soft)] px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
            {copy.badge}
          </p>
          <h1 className="mt-5 font-display text-[clamp(2rem,5vw,4.6rem)] leading-[1.03] tracking-[-0.04em] text-[var(--text-strong)]">
            {copy.title}
          </h1>
          <p className="mx-auto mt-4 max-w-[850px] text-[18px] leading-[1.52] text-[var(--text-soft)]">{copy.subtitle}</p>
          <p className="mx-auto mt-4 max-w-[860px] text-[15px] leading-[1.75] text-[var(--text-muted)]">{copy.description}</p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <a
              href={copy.primaryCta.href}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-lg border border-cyan-200/80 bg-cyan-100 px-5 py-2.5 text-[13px] font-semibold text-slate-950 transition-colors hover:bg-white"
            >
              {copy.primaryCta.label}
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href={copy.secondaryCta.href}
              className="inline-flex items-center gap-2 rounded-lg border border-[var(--line-strong)] bg-[var(--panel-soft)] px-5 py-2.5 text-[13px] font-semibold text-[var(--text-strong)] transition-colors hover:bg-[var(--panel-muted)]"
            >
              <ScanSearch className="h-3.5 w-3.5 text-cyan-300" />
              {copy.secondaryCta.label}
            </a>
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-2.5">
            {copy.chips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-[var(--line-soft)] bg-[var(--panel-soft)] px-3 py-1 text-[11px] tracking-[0.04em] text-[var(--text-muted)]"
              >
                {chip}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20, scale: 0.99 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mx-auto mt-12 max-w-[1120px]"
        >
          <HeroVisual locale={locale} />
        </motion.div>
      </div>
    </section>
  );
}

