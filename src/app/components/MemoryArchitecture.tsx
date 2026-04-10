import { motion } from "motion/react";
import type { Locale } from "../i18n";
import { memoryArchitectureContent, sectionIds, fonts } from "../content";

type MemoryArchitectureProps = {
  locale: Locale;
};

export function MemoryArchitecture({ locale }: MemoryArchitectureProps) {
  const copy = memoryArchitectureContent[locale];

  return (
    <section id={sectionIds.memory} className="relative px-6 py-8 md:py-11 bg-[#0d1729] border-y border-white/[0.08]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_58%_44%_at_50%_0%,rgba(56,139,253,0.12),transparent_66%)]" />
      <div className="max-w-[1260px] mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-[960px] mx-auto mb-5"
        >
          <span className="inline-flex px-3 py-1 rounded-full text-[11px] tracking-[0.06em] uppercase border border-sky-300/35 text-sky-100 bg-sky-300/[0.12]">
            {copy.eyebrow}
          </span>
          <h2
            className="mt-3 text-[clamp(1.65rem,3.8vw,2.65rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-white"
            style={{ fontFamily: fonts.display }}
          >
            {copy.title}
          </h2>
          <p className="mt-3 text-[15px] md:text-[16px] leading-[1.65] text-slate-300/88">{copy.description}</p>
        </motion.div>

        {/* Three Scope Cards */}
        <div className="grid md:grid-cols-3 gap-3 md:gap-3.5 mb-3.5">
          {copy.layers.map((layer, index) => (
            <motion.article
              key={layer.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-2xl border border-white/[0.14] bg-[#111f35] p-4 md:p-5 shadow-[0_14px_40px_rgba(0,0,0,0.3)]"
            >
              <div className={`w-full h-1.5 rounded-full bg-gradient-to-r ${layer.color} mb-4`} />
              <h3 className="text-[20px] font-semibold text-white" style={{ fontFamily: fonts.mono }}>
                {layer.name}
              </h3>
              <p className="mt-2 text-[13.5px] text-sky-100/95">{layer.summary}</p>
              <p className="mt-3 text-[13px] leading-[1.68] text-slate-300/86">{layer.detail}</p>
            </motion.article>
          ))}
        </div>

        {/* Beyond Three Scopes */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="rounded-2xl border border-white/[0.12] bg-[#13223a] p-4 md:p-5 mb-2.5"
        >
          <h3 className="text-[16px] font-semibold text-white mb-4" style={{ fontFamily: fonts.display }}>
            {copy.extrasTitle}
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {copy.extras.map((extra) => (
              <div key={extra.label}>
                <span
                  className="inline-block px-2 py-0.5 rounded text-[10px] text-cyan-300/80 bg-cyan-500/[0.08] border border-cyan-500/[0.12] mb-2"
                  style={{ fontFamily: fonts.mono }}
                >
                  {extra.label}
                </span>
                <p className="text-[13px] leading-[1.65] text-slate-300/85">{extra.detail}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Outcomes */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, delay: 0.15 }}
          className="rounded-2xl border border-white/[0.12] bg-[#13223a] p-4 md:p-5"
        >
          <h3 className="text-[16px] font-semibold text-white mb-3" style={{ fontFamily: fonts.display }}>
            {copy.outcomesTitle}
          </h3>
          <div className="grid md:grid-cols-2 gap-2.5">
            {copy.outcomes.map((item) => (
              <div key={item} className="flex items-center gap-2.5 text-[13px] text-slate-200/92">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-300" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
