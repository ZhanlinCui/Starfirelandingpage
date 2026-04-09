import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { landingContent } from "../content";
import type { Locale } from "../i18n";

type FinalCTAProps = {
  locale: Locale;
};

export function FinalCTA({ locale }: FinalCTAProps) {
  const copy = landingContent[locale].finalCta;
  const reduceMotion = useReducedMotion();

  return (
    <section id="docs" className="px-6 py-20 md:py-24">
      <div className="mx-auto max-w-[980px]">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.35 }}
          className="relative overflow-hidden rounded-[28px] border border-[var(--line-strong)] bg-[var(--panel-muted)] p-8 text-center md:p-12"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_30%_0%,rgba(101,211,255,0.16),transparent_70%)]" />
          <div className="relative">
            <p className="inline-flex rounded-full border border-[var(--line-strong)] bg-[var(--panel-soft)] px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
              {copy.eyebrow}
            </p>
            <h2 className="mt-5 font-display text-[clamp(1.9rem,4.2vw,3.2rem)] leading-[1.08] tracking-[-0.03em] text-[var(--text-strong)]">
              {copy.title}
            </h2>
            <p className="mx-auto mt-4 max-w-[700px] text-[15px] leading-[1.72] text-[var(--text-soft)]">{copy.description}</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
              {copy.actions.map((action) => (
                <a
                  key={action.label}
                  href={action.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 rounded-lg border border-[var(--line-strong)] bg-[var(--panel-soft)] px-4 py-2.5 text-[13px] font-semibold text-[var(--text-strong)] transition-colors hover:bg-[var(--text-strong)] hover:text-[var(--bg-base)]"
                >
                  {action.label}
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

