import { Github } from "lucide-react";
import { siteLinks, landingContent } from "../content";
import type { Locale } from "../i18n";

type FooterProps = {
  locale: Locale;
};

export function Footer({ locale }: FooterProps) {
  const copy = landingContent[locale].footer;

  return (
    <footer className="border-t border-[var(--line-soft)] bg-[var(--bg-elevated)] px-6 py-10">
      <div className="mx-auto max-w-[1260px]">
        <div className="grid gap-8 md:grid-cols-[1.2fr_2fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center overflow-hidden rounded-[7px] border border-[var(--line-strong)] bg-[#081022]">
                <img src="/branding/starfire-logo.png" alt="Starfire icon" className="h-full w-full object-contain" loading="lazy" />
              </span>
              <span className="font-display text-[15px] text-[var(--text-strong)]">Starfire</span>
            </div>
            <p className="mt-3 max-w-[420px] text-[13px] leading-[1.72] text-[var(--text-muted)]">{copy.description}</p>
            <a
              href={siteLinks.githubRepo}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-[13px] text-[var(--text-soft)] transition-colors hover:text-[var(--text-strong)]"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {copy.groups.map((group) => (
              <div key={group.title}>
                <h4 className="font-display text-[13px] text-[var(--text-strong)]">{group.title}</h4>
                <ul className="mt-3 space-y-2.5">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="text-[12px] text-[var(--text-muted)] transition-colors hover:text-[var(--text-strong)]">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-8 border-t border-[var(--line-soft)] pt-6 text-[12px] text-[var(--text-muted)]">{copy.copyright}</p>
      </div>
    </footer>
  );
}

