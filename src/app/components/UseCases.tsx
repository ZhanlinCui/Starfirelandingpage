import { motion } from "motion/react";
import { useState } from "react";
import RotatingText from "./RotatingText";
import type { Locale } from "../i18n";
import { useCasesContent, scenarioCodePanels, sectionIds, fonts } from "../content";

type UseCasesProps = {
  locale: Locale;
};

function CodePanel({ code }: { code: string }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-white/[0.12] bg-[#0a0f1d]">
      <div className="h-9 border-b border-white/[0.12] bg-white/[0.04] flex items-center px-4 gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-red-400/85" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber-300/85" />
        <span className="w-2.5 h-2.5 rounded-full bg-green-400/85" />
        <span className="ml-3 text-[10px] text-gray-600" style={{ fontFamily: fonts.mono }}>
          config.yaml
        </span>
      </div>
      <div className="p-4 md:p-5 overflow-x-auto">
        <pre
          className="text-[11px] md:text-[12px] leading-[1.7] text-slate-300/90 whitespace-pre"
          style={{ fontFamily: fonts.mono }}
        >
          {code}
        </pre>
      </div>
    </div>
  );
}

export function UseCases({ locale }: UseCasesProps) {
  const copy = useCasesContent[locale];
  const [activeKey, setActiveKey] = useState(copy.scenarios[0].key);
  const active = copy.scenarios.find((s) => s.key === activeKey) ?? copy.scenarios[0];
  const codePanel = scenarioCodePanels[active.key] ?? "";

  return (
    <section id={sectionIds.useCases} className="relative py-22 md:py-28 px-6 bg-[#0b1322] border-y border-white/[0.08]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(34,197,255,0.09),transparent_62%)]" />
      <div className="max-w-[1260px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="relative text-center max-w-[920px] mx-auto mb-10 md:mb-12"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] tracking-[0.06em] uppercase border border-cyan-300/30 text-cyan-200/90 bg-cyan-300/[0.08]">
            {copy.eyebrow}
          </span>
          <h2
            className="mt-5 text-[clamp(1.6rem,3vw,2.1rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-slate-200"
            style={{ fontFamily: fonts.display }}
          >
            {copy.title}
          </h2>
          <div className="mt-4 flex justify-center">
            <RotatingText
              texts={copy.rotatingTexts}
              mainClassName="px-6 sm:px-7 md:px-9 bg-gradient-to-r from-sky-300 via-blue-300 to-cyan-200 text-black border border-sky-200 overflow-hidden py-2 sm:py-2.5 md:py-3 justify-center rounded-xl shadow-[0_0_36px_rgba(56,139,253,0.38)] text-[24px] sm:text-[30px] md:text-[40px] font-extrabold leading-[1.05] tracking-[-0.02em] min-h-[52px] sm:min-h-[64px] md:min-h-[78px]"
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.02}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </div>
          <p className="mt-5 text-[16px] leading-[1.7] text-slate-300/85">{copy.description}</p>
        </motion.div>

        <div className="relative flex flex-wrap justify-center gap-2.5 mb-8 md:mb-10">
          {copy.scenarios.map((scenario) => {
            const activeChip = scenario.key === activeKey;
            return (
              <button
                key={scenario.key}
                type="button"
                onClick={() => setActiveKey(scenario.key)}
                className={`px-4 py-2 rounded-full text-[13px] border transition-all ${
                  activeChip
                    ? "bg-sky-300 text-[#041323] border-sky-200 shadow-[0_0_28px_rgba(56,139,253,0.35)]"
                    : "bg-[#111a2c] text-slate-300 border-white/[0.14] hover:bg-[#16233a]"
                }`}
              >
                {scenario.tag}
              </button>
            );
          })}
        </div>

        <motion.article
          key={`${locale}-${active.key}`}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="relative rounded-[28px] border border-white/[0.14] bg-[#0f1a2d] overflow-hidden p-4 md:p-6 shadow-[0_20px_70px_rgba(0,0,0,0.35)]"
        >
          <div className="grid lg:grid-cols-[1fr_1.45fr] gap-6 md:gap-8 items-center">
            <div className="px-2 md:px-4">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="inline-flex px-3 py-1 rounded-full text-[12px] text-sky-100 bg-sky-400/[0.16] border border-sky-300/40">
                  {active.tag}
                </span>
                {active.capabilities.map((cap) => (
                  <span
                    key={cap}
                    className="px-2 py-0.5 rounded text-[10px] text-cyan-300/80 bg-cyan-500/[0.08] border border-cyan-500/[0.12]"
                    style={{ fontFamily: fonts.mono }}
                  >
                    {cap}
                  </span>
                ))}
              </div>
              <h3
                className="text-[clamp(1.6rem,3.5vw,2.2rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-white"
                style={{ fontFamily: fonts.display }}
              >
                {active.title}
              </h3>
              <p className="mt-4 text-[15px] leading-[1.72] text-slate-300/85">{active.description}</p>
              <ul className="mt-5 space-y-2.5">
                {active.bullets.map((bullet) => (
                  <li key={bullet} className="text-[14px] text-slate-200/90 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-300" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>

            <CodePanel code={codePanel} />
          </div>
        </motion.article>
      </div>
    </section>
  );
}
