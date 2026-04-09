import { Github, Menu, X } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { landingContent, siteLinks } from "../content";
import type { Locale } from "../i18n";

type HeaderProps = {
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
};

function LocaleSwitch({
  locale,
  onLocaleChange,
  compact = false,
}: {
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
  compact?: boolean;
}) {
  const labels = landingContent[locale].header.language;

  return (
    <div
      className={`inline-flex items-center rounded-md border border-[var(--line-soft)] bg-[var(--panel-soft)] p-0.5 ${
        compact ? "w-full justify-center" : ""
      }`}
    >
      <button
        type="button"
        onClick={() => onLocaleChange("en")}
        className={`rounded px-2.5 py-1 text-[12px] ${
          locale === "en" ? "bg-[var(--text-strong)] text-[var(--bg-base)]" : "text-[var(--text-muted)] hover:text-[var(--text-strong)]"
        } transition-colors`}
      >
        {labels.en}
      </button>
      <button
        type="button"
        onClick={() => onLocaleChange("zh")}
        className={`rounded px-2.5 py-1 text-[12px] ${
          locale === "zh" ? "bg-[var(--text-strong)] text-[var(--bg-base)]" : "text-[var(--text-muted)] hover:text-[var(--text-strong)]"
        } transition-colors`}
      >
        {labels.zh}
      </button>
    </div>
  );
}

export function Header({ locale, onLocaleChange }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const copy = landingContent[locale].header;

  return (
    <motion.header
      initial={reduceMotion ? false : { opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="fixed left-0 right-0 top-0 z-50"
    >
      <div
        className="border-b border-[var(--line-soft)]"
        style={{ backdropFilter: "blur(18px) saturate(160%)", background: "rgba(4, 8, 16, 0.76)" }}
      >
        <div className="mx-auto flex h-[60px] max-w-[1260px] items-center justify-between px-6">
          <a href="/" className="flex shrink-0 items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-[8px] border border-[var(--line-strong)] bg-[#091021]">
              <img src="/branding/starfire-logo.png" alt="Starfire icon" className="h-full w-full object-contain" loading="eager" />
            </span>
            <img src="/branding/starfire-text-logo-white.png" alt="Starfire" className="h-[22px] w-auto object-contain md:h-6" loading="eager" />
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {copy.nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-md px-3 py-1.5 text-[13px] text-[var(--text-soft)] transition-colors hover:bg-[var(--panel-soft)] hover:text-[var(--text-strong)]"
              >
                {item.label}
              </a>
            ))}
            <a
              href={siteLinks.githubRepo}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 rounded-md px-3 py-1.5 text-[13px] text-[var(--text-soft)] transition-colors hover:bg-[var(--panel-soft)] hover:text-[var(--text-strong)]"
            >
              <Github className="h-3.5 w-3.5" />
              {copy.github}
            </a>
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <LocaleSwitch locale={locale} onLocaleChange={onLocaleChange} />
            <a
              href={siteLinks.architecture}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-[var(--line-soft)] px-3.5 py-1.5 text-[13px] text-[var(--text-soft)] transition-colors hover:border-[var(--line-strong)] hover:text-[var(--text-strong)]"
            >
              {copy.architecture}
            </a>
          </div>

          <button
            className="p-1.5 text-[var(--text-muted)] transition-colors hover:text-[var(--text-strong)] md:hidden"
            onClick={() => setMobileOpen((value) => !value)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="border-b border-[var(--line-soft)] md:hidden"
          style={{ backdropFilter: "blur(16px) saturate(140%)", background: "rgba(4, 8, 16, 0.94)" }}
        >
          <div className="space-y-2 px-6 py-4">
            <LocaleSwitch locale={locale} onLocaleChange={onLocaleChange} compact />
            {copy.nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block rounded-md px-3 py-2.5 text-[14px] text-[var(--text-soft)] transition-colors hover:bg-[var(--panel-soft)] hover:text-[var(--text-strong)]"
              >
                {item.label}
              </a>
            ))}
            <a
              href={siteLinks.githubRepo}
              target="_blank"
              rel="noreferrer"
              className="block rounded-md px-3 py-2.5 text-[14px] text-[var(--text-soft)] transition-colors hover:bg-[var(--panel-soft)] hover:text-[var(--text-strong)]"
              onClick={() => setMobileOpen(false)}
            >
              {copy.github}
            </a>
            <div className="border-t border-[var(--line-soft)] pt-3">
              <a
                href={siteLinks.architecture}
                target="_blank"
                rel="noreferrer"
                className="block w-full rounded-md border border-[var(--line-strong)] px-3.5 py-2.5 text-center text-[14px] font-medium text-[var(--text-strong)]"
                onClick={() => setMobileOpen(false)}
              >
                {copy.architecture}
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
