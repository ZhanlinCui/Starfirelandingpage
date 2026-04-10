import { motion } from "motion/react";
import type { Locale } from "../i18n";
import { adapterEcosystemContent, sectionIds, fonts } from "../content";

type AdapterEcosystemProps = {
  locale: Locale;
};

export function AdapterEcosystem({ locale }: AdapterEcosystemProps) {
  const copy = adapterEcosystemContent[locale];

  return (
    <section id={sectionIds.adapters} className="relative px-6 py-8 md:py-11 bg-[#0c1627] border-y border-white/[0.08]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_62%_46%_at_50%_0%,rgba(56,189,248,0.1),transparent_64%)]" />
      <div className="max-w-[1260px] mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="text-center max-w-[960px] mx-auto mb-5"
        >
            <span className="inline-flex px-3 py-1 rounded-full text-[11px] tracking-[0.06em] uppercase border border-cyan-300/35 text-cyan-100 bg-cyan-300/[0.12]">
              {copy.eyebrow}
            </span>
          <h2
            className="mt-3 text-[clamp(1.65rem,3.8vw,2.65rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-white"
            style={{ fontFamily: fonts.display }}
          >
            {copy.title}
          </h2>
          <p className="mt-3 text-[15px] md:text-[16px] leading-[1.65] text-slate-300/88">{copy.subtitle}</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-3.5 md:gap-4">
          {copy.cards.map((card, index) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              className="rounded-2xl border border-white/[0.12] bg-[#111d31] p-4 md:p-5 shadow-[0_16px_46px_rgba(0,0,0,0.3)]"
            >
              <div className="mb-3 flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-[18px] font-semibold text-white" style={{ fontFamily: fonts.display }}>
                    {card.title}
                  </h3>
                  <p className="mt-1 text-[13px] leading-[1.55] text-cyan-100/90">{card.subtitle}</p>
                </div>
                <span
                  className="inline-flex px-2 py-0.5 rounded text-[10px] text-cyan-300/80 bg-cyan-500/[0.08] border border-cyan-500/[0.12]"
                  style={{ fontFamily: fonts.mono }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="space-y-3">
                {card.details.map((detail) => (
                  <p key={detail} className="text-[13px] leading-[1.7] text-slate-300/86">
                    {detail}
                  </p>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, delay: 0.12 }}
          className="mt-4 rounded-2xl border border-white/[0.12] bg-[#13233b] p-4 md:p-5"
        >
          <p className="text-[14px] leading-[1.7] text-slate-200/92">{copy.closing}</p>
        </motion.div>
      </div>
    </section>
  );
}
