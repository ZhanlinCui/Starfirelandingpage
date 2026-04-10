import { motion } from "motion/react";
import { Circle, Radio, Radar } from "lucide-react";
import type { Locale } from "../i18n";
import { physicalVisionContent, sectionIds, fonts } from "../content";
import type { VisionPhase } from "../content";

type PhysicalVisionProps = {
  locale: Locale;
};

const statusConfig: Record<
  VisionPhase["status"],
  { color: string; glow: string; border: string; bg: string; label: string; icon: typeof Circle }
> = {
  live: {
    color: "text-emerald-400",
    glow: "shadow-[0_0_20px_rgba(52,211,153,0.25)]",
    border: "border-emerald-500/30",
    bg: "from-emerald-500/[0.08] to-transparent",
    label: "LIVE",
    icon: Circle,
  },
  building: {
    color: "text-amber-400",
    glow: "shadow-[0_0_20px_rgba(251,191,36,0.2)]",
    border: "border-amber-500/25",
    bg: "from-amber-500/[0.06] to-transparent",
    label: "BUILDING",
    icon: Radio,
  },
  horizon: {
    color: "text-violet-400",
    glow: "shadow-[0_0_20px_rgba(139,92,246,0.2)]",
    border: "border-violet-500/25",
    bg: "from-violet-500/[0.06] to-transparent",
    label: "HORIZON",
    icon: Radar,
  },
};

function PhaseCard({ phase, index }: { phase: VisionPhase; index: number }) {
  const config = statusConfig[phase.status];
  const StatusIcon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`relative rounded-2xl border ${config.border} overflow-hidden ${config.glow}`}
      style={{ background: "#0b1322" }}
    >
      {/* Gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${config.bg} opacity-60`} />

      {/* Animated border pulse for live phase */}
      {phase.status === "live" && (
        <div className="absolute inset-0 rounded-2xl border border-emerald-400/20 animate-pulse" />
      )}

      <div className="relative p-5 md:p-6">
        {/* Era badge + status */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <span
              className="text-[clamp(1.8rem,3.5vw,2.4rem)] font-bold text-white/90 leading-none"
              style={{ fontFamily: fonts.display }}
            >
              {phase.era}
            </span>
          </div>
          <div className={`flex items-center gap-1.5 ${config.color}`}>
            <StatusIcon className={`w-3 h-3 ${phase.status === "live" ? "animate-pulse" : ""}`} />
            <span className="text-[10px] tracking-[0.1em] uppercase" style={{ fontFamily: fonts.mono }}>
              {config.label}
            </span>
          </div>
        </div>

        <h3
          className="text-[18px] md:text-[20px] font-semibold text-white mb-2.5 leading-[1.25]"
          style={{ fontFamily: fonts.display }}
        >
          {phase.title}
        </h3>

        <p className="text-[13px] leading-[1.65] text-slate-300/85 mb-4">{phase.description}</p>

        {/* Node grid */}
        <div className="grid grid-cols-2 gap-2">
          {phase.nodes.map((node) => (
            <div
              key={node}
              className="flex items-center gap-2 px-3 py-2 rounded-lg border border-white/[0.06] bg-white/[0.02]"
            >
              <span className={`w-1.5 h-1.5 rounded-full ${
                phase.status === "live"
                  ? "bg-emerald-400"
                  : phase.status === "building"
                    ? "bg-amber-400/70"
                    : "bg-violet-400/50"
              }`} />
              <span className="text-[12px] text-slate-300/80" style={{ fontFamily: fonts.mono }}>
                {node}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function PhysicalVision({ locale }: PhysicalVisionProps) {
  const copy = physicalVisionContent[locale];

  return (
    <section
      id={sectionIds.vision}
      className="relative py-10 md:py-14 px-6 overflow-hidden"
      style={{ background: "linear-gradient(180deg, #080d18 0%, #0a1020 30%, #0d0a1a 60%, #0a0e1c 100%)" }}
    >
      {/* Cinematic background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(139,92,246,0.12),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_80%_80%,rgba(56,139,253,0.06),transparent_50%)]" />

      {/* Animated grid */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.015]">
        <defs>
          <pattern id="visionGrid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#visionGrid)" />
      </svg>

      {/* Horizontal connector line */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/10 to-transparent hidden lg:block" />

      <div className="max-w-[1260px] mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-[900px] mx-auto mb-5 md:mb-7"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[11px] tracking-[0.06em] uppercase border border-violet-400/30 text-violet-200/90 bg-violet-500/[0.08]">
            <Radar className="w-3 h-3" />
            {copy.eyebrow}
          </span>

          <h2
            className="mt-4 text-[clamp(1.65rem,4vw,2.75rem)] font-bold leading-[1.06] tracking-[-0.035em] text-white"
            style={{ fontFamily: fonts.display }}
          >
            {copy.title}
          </h2>

          <p
            className="mt-3 text-[clamp(0.95rem,1.85vw,1.15rem)] leading-[1.55] text-slate-200/90 max-w-[760px] mx-auto"
          >
            {copy.subtitle}
          </p>

          <p className="mt-3 text-[14px] leading-[1.65] text-slate-400/85 max-w-[720px] mx-auto">
            {copy.description}
          </p>
        </motion.div>

        {/* Phase cards — NOW → NEXT → HORIZON */}
        <div className="grid lg:grid-cols-3 gap-3.5 md:gap-4 mb-5 md:mb-7">
          {copy.phases.map((phase, index) => (
            <PhaseCard key={phase.era} phase={phase} index={index} />
          ))}
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <p
            className="text-[clamp(1rem,2vw,1.2rem)] leading-[1.65] text-slate-200/80 max-w-[700px] mx-auto italic"
            style={{ fontFamily: fonts.display }}
          >
            {copy.closingLine}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
