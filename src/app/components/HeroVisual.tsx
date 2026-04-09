import { Activity, GitBranch, ShieldCheck, Workflow } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { landingContent } from "../content";
import type { Locale } from "../i18n";

type HeroVisualProps = {
  locale: Locale;
};

export function HeroVisual({ locale }: HeroVisualProps) {
  const copy = landingContent[locale].heroVisual;
  const reduceMotion = useReducedMotion();

  const statusClass: Record<(typeof copy.teams)[number]["status"], string> = {
    online: "bg-emerald-400",
    busy: "bg-cyan-300",
    watch: "bg-amber-300",
  };

  return (
    <div className="relative overflow-hidden rounded-[20px] border border-[var(--line-soft)] bg-[var(--panel-muted)] p-4 md:p-5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_80%_at_10%_0%,rgba(101,211,255,0.1),transparent_60%)]" />
      <div className="relative">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--text-muted)]">{copy.panelTitle}</p>
            <h3 className="mt-2 font-display text-[16px] text-[var(--text-strong)] md:text-[18px]">{copy.rootTitle}</h3>
            <p className="mt-1 text-[12px] text-[var(--text-muted)]">{copy.rootMeta}</p>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--line-strong)] bg-[var(--panel-soft)] px-3 py-1 text-[11px] text-[var(--text-soft)]">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-300" />
            {copy.liveLabel}
          </span>
        </div>

        <div className="grid gap-3 md:grid-cols-[1.2fr_1fr]">
          <div className="rounded-xl border border-[var(--line-soft)] bg-[var(--bg-elevated)] p-3">
            <div className="mb-2 flex items-center gap-2 text-[12px] text-[var(--text-soft)]">
              <GitBranch className="h-3.5 w-3.5 text-cyan-300" />
              {copy.laneTitle}
            </div>
            <div className="space-y-2">
              {copy.teams.map((team, index) => (
                <motion.div
                  key={team.name}
                  initial={reduceMotion ? false : { opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, delay: index * 0.08 }}
                  className="rounded-lg border border-[var(--line-soft)] bg-[var(--panel-soft)] px-3 py-2"
                >
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-[12px] text-[var(--text-strong)]">{team.name}</p>
                    <span className={`h-2.5 w-2.5 rounded-full ${statusClass[team.status]}`} />
                  </div>
                  <div className="mt-1.5 flex flex-wrap gap-2 text-[10px] text-[var(--text-muted)]">
                    <span className="rounded border border-[var(--line-soft)] px-2 py-0.5">{team.runtime}</span>
                    <span className="rounded border border-[var(--line-soft)] px-2 py-0.5">{team.memory}</span>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-3 flex items-start gap-2 rounded-lg border border-amber-300/30 bg-amber-300/10 px-3 py-2 text-[11px] text-amber-100">
              <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0" />
              <span>{copy.escalation}</span>
            </div>
          </div>

          <div className="rounded-xl border border-[var(--line-soft)] bg-[var(--bg-elevated)] p-3">
            <p className="mb-2 flex items-center gap-2 text-[12px] text-[var(--text-soft)]">
              <Activity className="h-3.5 w-3.5 text-emerald-300" />
              {copy.telemetryTitle}
            </p>
            <div className="space-y-2">
              {copy.telemetry.map((signal, index) => (
                <motion.div
                  key={signal.label}
                  initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, delay: 0.12 + index * 0.06 }}
                  className="rounded-lg border border-[var(--line-soft)] bg-[var(--panel-soft)] px-3 py-2"
                >
                  <p className="text-[11px] text-[var(--text-muted)]">{signal.label}</p>
                  <p className="mt-1 text-[12px] text-[var(--text-strong)]">{signal.value}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-3 flex items-center gap-2 rounded-lg border border-[var(--line-soft)] bg-[var(--panel-soft)] px-3 py-2 text-[11px] text-[var(--text-soft)]">
              <Workflow className="h-3.5 w-3.5 text-cyan-300" />
              {copy.loopLabel}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
