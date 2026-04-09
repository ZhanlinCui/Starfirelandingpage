import { motion, useReducedMotion } from "motion/react";
import { landingContent } from "../content";
import type { Locale } from "../i18n";
import { SectionIntro } from "./SectionIntro";

type WhyNowProps = {
  locale: Locale;
};

export function WhyNow({ locale }: WhyNowProps) {
  const copy = landingContent[locale].whyNow;
  const reduceMotion = useReducedMotion();

  return (
    <section id="why-now" className="px-6 py-[4.5rem] md:py-[5.75rem]">
      <div className="mx-auto max-w-[1260px]">
        <SectionIntro eyebrow={copy.eyebrow} title={copy.title} intro={copy.intro} />
        <div className="mt-8 grid gap-3.5 md:grid-cols-2">
          {copy.signals.map((signal, index) => (
            <motion.article
              key={signal.title}
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.3, delay: index * 0.06 }}
              className="rounded-2xl border border-[var(--line-soft)] bg-[var(--panel-muted)] p-5"
            >
              <h3 className="font-display text-[1.1rem] text-[var(--text-strong)]">{signal.title}</h3>
              <p className="mt-2 text-[14px] leading-[1.7] text-[var(--text-soft)]">{signal.detail}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
