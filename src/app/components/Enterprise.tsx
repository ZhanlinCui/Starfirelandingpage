import { motion } from "motion/react";
import type { Locale } from "../i18n";
import { enterpriseContent, sectionIds, fonts } from "../content";

type EnterpriseProps = {
  locale: Locale;
};

export function Enterprise({ locale }: EnterpriseProps) {
  const copy = enterpriseContent[locale];

  return (
    <section id={sectionIds.platform} className="relative py-9 md:py-12 px-6 bg-[#101a2c] border-t border-white/[0.08]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_55%_at_50%_0%,rgba(56,189,248,0.07),transparent_66%)]" />
      <div className="max-w-[1260px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.55 }}
          className="relative text-center max-w-[920px] mx-auto mb-5 md:mb-6"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] tracking-[0.06em] uppercase border border-sky-300/35 text-sky-200/90 bg-sky-300/[0.08]">
            {copy.eyebrow}
          </span>
          <h2
            className="mt-3 text-[clamp(1.65rem,3.6vw,2.5rem)] font-semibold leading-[1.12] tracking-[-0.03em] text-white"
            style={{ fontFamily: fonts.display }}
          >
            {copy.title}
          </h2>
          <p className="mt-3 text-[15px] leading-[1.65] text-slate-300/88">{copy.description}</p>
        </motion.div>

        {/* ── Core Moats ── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <h3
            className="text-[13px] tracking-[0.06em] uppercase text-sky-300/80 mb-4 text-center"
            style={{ fontFamily: fonts.mono }}
          >
            {copy.moatsTitle}
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {copy.moats.map((moat, index) => (
              <motion.article
                key={moat.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="rounded-2xl border border-white/[0.13] bg-[#131f34] p-4 md:p-5 shadow-[0_14px_40px_rgba(0,0,0,0.28)]"
              >
                <h4
                  className="text-[18px] font-semibold text-white leading-[1.3] mb-2.5"
                  style={{ fontFamily: fonts.display }}
                >
                  {moat.title}
                </h4>
                <p className="text-[14px] leading-[1.7] text-slate-300/88">{moat.description}</p>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* ── Product Proof ── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3
            className="text-[13px] tracking-[0.06em] uppercase text-cyan-300/80 mb-4 text-center"
            style={{ fontFamily: fonts.mono }}
          >
            {copy.proofTitle}
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {copy.proofs.map((proof, index) => (
              <motion.div
                key={proof.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="rounded-2xl border border-white/[0.12] bg-[#0f1a2d] p-4 md:p-5 shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
              >
                <div
                  className="text-[clamp(2rem,4vw,3rem)] font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-cyan-200 leading-none mb-2"
                  style={{ fontFamily: fonts.display }}
                >
                  {proof.metric}
                </div>
                <div className="text-[15px] font-semibold text-white mb-1.5" style={{ fontFamily: fonts.display }}>
                  {proof.label}
                </div>
                <p className="text-[13px] leading-[1.65] text-slate-300/85">{proof.detail}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
