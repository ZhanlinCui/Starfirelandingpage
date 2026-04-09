type SectionIntroProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
};

export function SectionIntro({ eyebrow, title, intro, align = "left" }: SectionIntroProps) {
  const alignment = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <header className={`max-w-[860px] ${alignment}`}>
      <p className="inline-flex rounded-full border border-[var(--line-strong)] bg-[var(--panel-soft)] px-3 py-1 text-[11px] uppercase tracking-[0.14em] text-[var(--text-muted)]">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-display text-[clamp(1.8rem,4vw,3rem)] leading-[1.08] tracking-[-0.03em] text-[var(--text-strong)]">
        {title}
      </h2>
      {intro && <p className="mt-4 text-[15px] leading-[1.7] text-[var(--text-soft)]">{intro}</p>}
    </header>
  );
}

