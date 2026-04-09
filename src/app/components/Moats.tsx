import { Shield, Spline, Waypoints, Workflow } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { landingContent } from "../content";
import type { Locale } from "../i18n";
import { SectionIntro } from "./SectionIntro";

type MoatsProps = {
  locale: Locale;
};

const icons = [Waypoints, Workflow, Spline, Shield];

export function Moats({ locale }: MoatsProps) {
  const copy = landingContent[locale].moats;
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="moats"
      className="relative border-y border-[var(--line-soft)] bg-[var(--bg-elevated)] px-6 py-[4.5rem] md:py-[5.75rem]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_75%_at_20%_10%,rgba(73,181,255,0.11),transparent_62%)]" />
      <div className="relative mx-auto max-w-[1260px]">
        <SectionIntro eyebrow={copy.eyebrow} title={copy.title} />
        <div className="mt-8 grid gap-3.5 md:grid-cols-2">
          {copy.items.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.article
                key={item.title}
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.3, delay: index * 0.06 }}
                className="rounded-2xl border border-[var(--line-soft)] bg-[var(--panel-muted)] p-5"
              >
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[var(--line-strong)] bg-[var(--panel-soft)]">
                    <Icon className="h-4 w-4 text-cyan-300" />
                  </span>
                  <h3 className="font-display text-[1.1rem] text-[var(--text-strong)]">{item.title}</h3>
                </div>
                <p className="mt-3 text-[13px] leading-[1.7] text-[var(--text-soft)]">{item.thesis}</p>
                <p className="mt-2 rounded-lg border border-[var(--line-soft)] bg-[var(--panel-soft)] px-3 py-2 text-[12px] leading-[1.6] text-[var(--text-muted)]">
                  {item.impact}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
