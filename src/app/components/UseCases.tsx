import { motion } from "motion/react";
import { useState } from "react";
import { Code2, Images } from "lucide-react";
import RotatingText from "./RotatingText";
import { AlbumShowcase } from "./AlbumShowcase";
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
  const [viewMode, setViewMode] = useState<"screenshots" | "code">("screenshots");
  const active = copy.scenarios.find((s) => s.key === activeKey) ?? copy.scenarios[0];
  const codePanel = scenarioCodePanels[active.key] ?? "";

  return (
    <section id={sectionIds.useCases} className="relative py-8 md:py-10 px-6 bg-[#0b1322] border-y border-white/[0.08]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(34,197,255,0.09),transparent_62%)]" />
      <div className="max-w-[1260px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="relative text-center max-w-[920px] mx-auto mb-4 md:mb-5"
        >
          <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] tracking-[0.06em] uppercase border border-cyan-300/30 text-cyan-200/90 bg-cyan-300/[0.08]">
            {copy.eyebrow}
          </span>
          <h2
            className="mt-2.5 text-[clamp(1.45rem,2.6vw,1.9rem)] font-semibold leading-[1.1] tracking-[-0.02em] text-slate-200"
            style={{ fontFamily: fonts.display }}
          >
            {copy.title}
          </h2>
          <div className="mt-3 flex justify-center">
            <RotatingText
              texts={copy.rotatingTexts}
              mainClassName="px-5 sm:px-6 md:px-8 bg-gradient-to-r from-sky-300 via-blue-300 to-cyan-200 text-black border border-sky-200 overflow-hidden py-1.5 sm:py-2 md:py-2.5 justify-center rounded-xl shadow-[0_0_36px_rgba(56,139,253,0.38)] text-[20px] sm:text-[26px] md:text-[32px] font-extrabold leading-[1.05] tracking-[-0.02em] min-h-[42px] sm:min-h-[52px] md:min-h-[62px]"
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
        </motion.div>

        <div className="relative flex flex-wrap justify-center gap-2 mb-4 md:mb-5">
          {copy.scenarios.map((scenario) => {
            const activeChip = scenario.key === activeKey;
            return (
              <button
                key={scenario.key}
                type="button"
                onClick={() => setActiveKey(scenario.key)}
                className={`px-3.5 py-1.5 rounded-full text-[13px] border transition-all ${
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
          className="relative rounded-[24px] border border-white/[0.14] bg-[#0f1a2d] overflow-hidden p-4 md:p-5 shadow-[0_20px_70px_rgba(0,0,0,0.35)]"
        >
          <div className="grid md:grid-cols-[1fr_1.4fr] gap-4 md:gap-5 items-center">
            <div className="px-2 md:px-3">
              <div className="flex flex-wrap items-center gap-2 mb-3">
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
                className="text-[clamp(1.35rem,3vw,1.85rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-white"
                style={{ fontFamily: fonts.display }}
              >
                {active.title}
              </h3>
              <p className="mt-2.5 text-[14px] leading-[1.65] text-slate-300/85">{active.description}</p>
              <ul className="mt-3.5 space-y-2">
                {active.bullets.map((bullet) => (
                  <li key={bullet} className="text-[13px] text-slate-200/90 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-300 shrink-0" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center justify-end gap-1.5 mb-2.5">
                <button
                  type="button"
                  onClick={() => setViewMode("screenshots")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[11px] transition-colors ${
                    viewMode === "screenshots"
                      ? "bg-white/[0.08] text-white border border-white/[0.12]"
                      : "text-gray-500 hover:text-gray-300"
                  }`}
                >
                  <Images className="w-3 h-3" />
                  Preview
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode("code")}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[11px] transition-colors ${
                    viewMode === "code"
                      ? "bg-white/[0.08] text-white border border-white/[0.12]"
                      : "text-gray-500 hover:text-gray-300"
                  }`}
                >
                  <Code2 className="w-3 h-3" />
                  Config
                </button>
              </div>

              {viewMode === "screenshots" ? (
                <AlbumShowcase
                  slides={active.slides}
                  placeholderLabel={locale === "zh" ? "产品截图即将上线" : "Product Screenshot Coming"}
                />
              ) : (
                <CodePanel code={codePanel} />
              )}
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
