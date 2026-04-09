import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { landingContent } from "../content";
import type { Locale } from "../i18n";
import { SectionIntro } from "./SectionIntro";

type UseCasesProps = {
  locale: Locale;
};

export function UseCases({ locale }: UseCasesProps) {
  const copy = landingContent[locale].useCases;
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="use-cases"
      className="relative border-y border-[var(--line-soft)] bg-[var(--bg-elevated)] px-6 py-[4.5rem] md:py-[5.75rem]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_80%_at_80%_0%,rgba(101,211,255,0.08),transparent_62%)]" />
      <div className="relative mx-auto max-w-[1260px]">
        <SectionIntro eyebrow={copy.eyebrow} title={copy.title} intro={copy.intro} />
        <div className="mt-8 grid gap-3.5 md:grid-cols-2">
          {copy.items.map((item, index) => (
            <motion.article
              key={item.title}
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.3, delay: index * 0.06 }}
              className="rounded-2xl border border-[var(--line-soft)] bg-[var(--panel-muted)] p-5"
            >
              <h3 className="font-display text-[1.05rem] text-[var(--text-strong)]">{item.title}</h3>
              <p className="mt-2 text-[13px] leading-[1.68] text-[var(--text-soft)]">{item.summary}</p>

              <div className="mt-4 rounded-xl border border-[var(--line-soft)] bg-[var(--panel-soft)] p-3">
                <p className="font-mono text-[10px] uppercase tracking-[0.11em] text-[var(--text-muted)]">execution flow</p>
                <div className="mt-2 space-y-2">
                  {item.flow.map((step, stepIndex) => (
                    <div key={step} className="flex items-center gap-2 text-[12px] text-[var(--text-soft)]">
                      <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded border border-[var(--line-strong)] bg-[var(--panel-muted)] text-[10px] text-cyan-200">
                        {stepIndex + 1}
                      </span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 space-y-2">
                {item.outcomes.map((outcome) => (
                  <div key={outcome} className="flex items-center gap-2 rounded-lg border border-[var(--line-soft)] bg-[var(--panel-soft)] px-3 py-2 text-[12px] text-[var(--text-muted)]">
                    <ArrowRight className="h-3.5 w-3.5 text-cyan-300" />
                    <span>{outcome}</span>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
