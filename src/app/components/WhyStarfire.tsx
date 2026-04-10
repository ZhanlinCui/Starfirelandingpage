import { motion } from "motion/react";
import { fonts, whyStarfireContent } from "../content";

export function WhyStarfire() {
  const copy = whyStarfireContent;

  return (
    <section id="why-starfire" className="relative py-9 md:py-12 px-6 bg-[#0d1628] border-t border-white/[0.08]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_55%_at_50%_0%,rgba(56,139,253,0.08),transparent_68%)]" />

      <div className="max-w-[1260px] mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-[900px] mx-auto mb-5 md:mb-6"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] tracking-[0.06em] uppercase border border-cyan-300/30 text-cyan-200/90 bg-cyan-300/[0.08]">
            {copy.eyebrow}
          </span>
          <h2
            className="mt-3 text-[clamp(1.65rem,3.6vw,2.5rem)] font-semibold leading-[1.12] tracking-[-0.03em] text-white"
            style={{ fontFamily: fonts.display }}
          >
            {copy.title}
          </h2>
          <p className="mt-3 text-[15px] leading-[1.65] text-slate-300/88">{copy.subtitle}</p>
        </motion.div>

        <div className="grid gap-3 md:gap-4 lg:grid-cols-3 md:grid-cols-2">
          {copy.items.map((item, index) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="rounded-2xl border border-white/[0.12] bg-[#111c31] p-4 md:p-4.5 shadow-[0_14px_40px_rgba(0,0,0,0.26)]"
            >
              <div className="flex items-center justify-between gap-3 mb-2.5">
                <h3 className="text-[17px] font-semibold text-white" style={{ fontFamily: fonts.display }}>
                  {item.name}
                </h3>
                <span className="px-2 py-0.5 rounded text-[10px] text-cyan-300/80 bg-cyan-500/[0.08] border border-cyan-500/[0.12]" style={{ fontFamily: fonts.mono }}>
                  COMPARE
                </span>
              </div>

              <div className="space-y-2 text-[12.5px] leading-[1.55] text-slate-300/88">
                <div>
                  <p className="text-slate-500 uppercase tracking-[0.08em] text-[10px] mb-1" style={{ fontFamily: fonts.mono }}>
                    Best at
                  </p>
                  <p>{item.bestAt}</p>
                </div>
                <div>
                  <p className="text-slate-500 uppercase tracking-[0.08em] text-[10px] mb-1" style={{ fontFamily: fonts.mono }}>
                    Not enough
                  </p>
                  <p>{item.notEnough}</p>
                </div>
                <div>
                  <p className="text-slate-500 uppercase tracking-[0.08em] text-[10px] mb-1" style={{ fontFamily: fonts.mono }}>
                    Starfire edge
                  </p>
                  <p className="text-cyan-100/95">{item.starfireEdge}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <p className="mt-4 text-center text-[13px] md:text-[14px] leading-[1.65] text-white/92 max-w-[760px] mx-auto">
          {copy.closing}
        </p>

        <p className="mt-2 text-center text-[11px] leading-[1.6] text-slate-400/80 max-w-[760px] mx-auto">
          Competitor names are used for identification and comparison only.
        </p>
      </div>
    </section>
  );
}
