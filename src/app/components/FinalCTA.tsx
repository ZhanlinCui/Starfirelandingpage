import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import type { Locale } from "../i18n";
import { finalCtaContent, fonts } from "../content";

type FinalCTAProps = {
  locale: Locale;
};

export function FinalCTA({ locale }: FinalCTAProps) {
  const copy = finalCtaContent[locale];

  return (
    <section className="py-24 lg:py-32 px-6 bg-[#0f192b] border-t border-white/[0.08]">
      <div className="max-w-[980px] mx-auto space-y-8">
        {/* ── Vision Band ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-violet-500/[0.15] bg-[#12172a] p-5 md:p-6"
        >
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-violet-400/70" />
            <span
              className="text-[11px] tracking-[0.06em] uppercase text-violet-300/80"
              style={{ fontFamily: fonts.mono }}
            >
              {copy.vision.label}
            </span>
          </div>
          <p className="text-[15px] leading-[1.72] text-slate-300/90 italic">{copy.vision.statement}</p>
        </motion.div>

        {/* ── Main CTA Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative rounded-[28px] overflow-hidden border border-white/[0.14] bg-[#101b31] shadow-[0_24px_80px_rgba(0,0,0,0.38)]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_62%_70%_at_18%_10%,rgba(56,189,248,0.15),transparent_60%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(56,139,253,0.14),rgba(9,13,22,0.98)_58%)]" />

          <div className="relative px-8 py-14 lg:px-14 lg:py-16">
            <div className="max-w-[760px] mx-auto text-center">
              <span className="inline-flex px-3 py-1 rounded-full text-[11px] tracking-[0.06em] uppercase border border-sky-300/35 text-sky-100 bg-sky-300/[0.12]">
                {copy.eyebrow}
              </span>

              <h2
                className="mt-5 text-[clamp(1.9rem,4.6vw,3.35rem)] font-semibold leading-[1.06] tracking-[-0.03em] text-white"
                style={{ fontFamily: fonts.display }}
              >
                {copy.titleTop}
                <br />
                <span className="bg-gradient-to-r from-white via-sky-200 to-cyan-100 bg-clip-text text-transparent">
                  {copy.titleBottom}
                </span>
              </h2>

              <p className="mt-6 text-[18px] leading-[1.74] text-slate-200/95">{copy.subtitle}</p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-3.5">
                {copy.actions.map((action) =>
                  action.primary ? (
                    <a
                      key={action.label}
                      href={action.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2.5 px-6 py-3 text-[14px] font-semibold text-[#07080C] bg-white hover:bg-slate-200 rounded-lg transition-colors group"
                      style={{ fontFamily: fonts.display }}
                    >
                      {action.label}
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  ) : (
                    <a
                      key={action.label}
                      href={action.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 text-[14px] font-medium text-slate-100 bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.14] rounded-lg transition-colors"
                      style={{ fontFamily: fonts.display }}
                    >
                      {action.label}
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
