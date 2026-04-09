import { CheckCircle2 } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { landingContent } from "../content";
import type { Locale } from "../i18n";
import { SectionIntro } from "./SectionIntro";

type CapabilityProofProps = {
  locale: Locale;
};

export function CapabilityProof({ locale }: CapabilityProofProps) {
  const copy = landingContent[locale].capabilityProof;
  const reduceMotion = useReducedMotion();

  return (
    <section id="proof" className="px-6 py-[4.5rem] md:py-[5.75rem]">
      <div className="mx-auto max-w-[1260px]">
        <SectionIntro eyebrow={copy.eyebrow} title={copy.title} intro={copy.intro} />
        <div className="mt-8 grid gap-3.5 lg:grid-cols-2">
          {copy.items.map((item, index) => (
            <motion.article
              key={item.title}
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="rounded-2xl border border-[var(--line-soft)] bg-[var(--panel-muted)] p-5"
            >
              <p className="font-display text-[1.05rem] text-[var(--text-strong)]">{item.title}</p>
              <p className="mt-2 text-[13px] leading-[1.68] text-[var(--text-soft)]">{item.detail}</p>
              <ul className="mt-3 space-y-1.5">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2 text-[12px] leading-[1.55] text-[var(--text-muted)]">
                    <CheckCircle2 className="mt-[2px] h-3.5 w-3.5 shrink-0 text-emerald-300" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
