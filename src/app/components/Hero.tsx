import { motion } from "motion/react";
import { ArrowRight, Github } from "lucide-react";
import { HeroVisual } from "./HeroVisual";
import type { Locale } from "../i18n";
import { heroContent, siteLinks, fonts } from "../content";

type HeroProps = {
  locale: Locale;
};

export function Hero({ locale }: HeroProps) {
  const copy = heroContent[locale];

  return (
    <section id="top" className="relative pt-[120px] pb-18 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_0%,rgba(0,86,214,0.2),transparent_65%)]" />

      <div className="relative max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-[900px] mx-auto"
        >
          <img
            src="/branding/starfire-text-logo-white.png"
            alt="Starfire"
            className="h-14 md:h-16 w-auto mx-auto mb-7 object-contain"
            loading="eager"
          />

          <div className="flex items-center justify-center mb-6">
            <span className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-[11px] font-medium tracking-[0.04em] text-sky-300 bg-sky-500/[0.08] border border-sky-500/[0.18]">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-300 animate-pulse" />
              {copy.badge}
            </span>
          </div>

          <h1
            className="text-[clamp(2.2rem,5.5vw,4.2rem)] font-semibold leading-[1.06] tracking-[-0.04em] text-white mb-6"
            style={{ fontFamily: fonts.display }}
          >
            {copy.titleLine1}
            <br />
            <span className="bg-gradient-to-r from-sky-300 via-blue-300 to-cyan-200 bg-clip-text text-transparent">
              {copy.titleHighlight}
            </span>
          </h1>

          <p className="mt-4 text-[16px] leading-[1.74] text-slate-100/95 max-w-[860px] mx-auto">
            {copy.description}
          </p>

          <div className="mt-8 flex flex-wrap justify-center items-center gap-3.5">
            <a
              href={siteLinks.architecture}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 px-6 py-3 text-[14px] font-medium text-[#07080C] rounded-lg transition-all duration-200 bg-white hover:bg-slate-200"
              style={{ fontFamily: fonts.display }}
            >
              {copy.primaryCta}
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href={siteLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 px-6 py-3 text-[14px] font-medium text-slate-200 bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] rounded-lg transition-all duration-200"
              style={{ fontFamily: fonts.display }}
            >
              <Github className="w-3.5 h-3.5 text-slate-400" />
              {copy.secondaryCta}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.99 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 md:mt-14"
        >
          <div className="relative rounded-[28px] border border-sky-500/30 p-3 md:p-4 bg-[#04060d]/80 shadow-[0_0_0_1px_rgba(0,86,214,0.25),0_30px_90px_rgba(0,0,0,0.55)]">
            <HeroVisual locale={locale} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
