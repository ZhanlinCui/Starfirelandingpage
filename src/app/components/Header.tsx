import { motion } from "motion/react";
import { Github, Menu, X } from "lucide-react";
import { useEffect, useRef, useState, type MouseEvent } from "react";
import type { Locale } from "../i18n";
import { headerContent, siteLinks, fonts } from "../content";

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
  const labels = headerContent[locale].language;

  return (
    <div
      className={`inline-flex items-center rounded-md border border-white/[0.12] bg-white/[0.03] p-0.5 ${
        compact ? "w-full" : ""
      }`}
    >
      <button
        type="button"
        onClick={() => onLocaleChange("en")}
        className={`px-2.5 py-1 text-[12px] rounded ${
          locale === "en" ? "bg-white text-[#07080C]" : "text-gray-300 hover:text-white"
        } transition-colors`}
      >
        {labels.en}
      </button>
      <button
        type="button"
        onClick={() => onLocaleChange("zh")}
        className={`px-2.5 py-1 text-[12px] rounded ${
          locale === "zh" ? "bg-white text-[#07080C]" : "text-gray-300 hover:text-white"
        } transition-colors`}
      >
        {labels.zh}
      </button>
    </div>
  );
}

export function Header({ locale, onLocaleChange }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const barRef = useRef<HTMLDivElement | null>(null);
  const copy = headerContent[locale];
  const scrollGap = 14;

  const getAnchorOffset = () => {
    const barHeight = barRef.current?.getBoundingClientRect().height ?? 60;
    return barHeight + scrollGap;
  };

  const scrollToAnchor = (href: string, smooth = true) => {
    if (!href.startsWith("#")) {
      return;
    }

    const id = decodeURIComponent(href.slice(1));
    if (!id || id === "top") {
      window.scrollTo({ top: 0, behavior: smooth ? "smooth" : "auto" });
      return;
    }

    const target = document.getElementById(id);
    if (!target) {
      return;
    }

    const targetTop = target.getBoundingClientRect().top + window.scrollY - getAnchorOffset();
    window.scrollTo({
      top: Math.max(targetTop, 0),
      behavior: smooth ? "smooth" : "auto",
    });
  };

  const handleAnchorClick = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
    closeMobile = false,
  ) => {
    if (!href.startsWith("#")) {
      if (closeMobile) {
        setMobileOpen(false);
      }
      return;
    }

    event.preventDefault();
    window.history.pushState(null, "", href);

    if (closeMobile) {
      setMobileOpen(false);
      // Wait one frame so mobile menu collapse does not affect measurements.
      requestAnimationFrame(() => {
        scrollToAnchor(href, true);
      });
      return;
    }

    scrollToAnchor(href, true);
  };

  useEffect(() => {
    const alignCurrentHash = () => {
      if (!window.location.hash) {
        return;
      }
      scrollToAnchor(window.location.hash, false);
    };

    const timeoutId = window.setTimeout(alignCurrentHash, 0);
    window.addEventListener("hashchange", alignCurrentHash);

    return () => {
      window.clearTimeout(timeoutId);
      window.removeEventListener("hashchange", alignCurrentHash);
    };
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div
        className="border-b border-white/[0.08]"
        style={{ backdropFilter: "blur(16px) saturate(180%)", background: "rgba(6,10,18,0.82)" }}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <div ref={barRef} className="flex items-center justify-between h-[60px]">
            <a
              href="#top"
              className="flex items-center shrink-0 gap-2.5"
              onClick={(event) => handleAnchorClick(event, "#top")}
            >
              <span className="w-8 h-8 rounded-[8px] overflow-hidden border border-white/[0.14] bg-[#081022] flex items-center justify-center">
                <img
                  src="/branding/starfire-logo.png"
                  alt="Starfire icon"
                  className="w-full h-full object-contain"
                  loading="eager"
                />
              </span>
              <img
                src="/branding/starfire-text-logo-white.png"
                alt="Starfire"
                className="h-6 w-auto object-contain"
                loading="eager"
              />
            </a>

            <nav className="hidden md:flex items-center gap-1" style={{ fontFamily: fonts.body }}>
              {copy.nav.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-3 py-1.5 text-[13px] text-gray-300 hover:text-white transition-colors rounded-md hover:bg-white/[0.04]"
                  onClick={(event) => handleAnchorClick(event, item.href)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href={siteLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 text-[13px] text-gray-300 hover:text-white transition-colors rounded-md hover:bg-white/[0.04] flex items-center gap-1.5"
              >
                <Github className="w-3.5 h-3.5" />
                {copy.github}
              </a>
            </nav>

            <div className="hidden md:flex items-center gap-2">
              <LocaleSwitch locale={locale} onLocaleChange={onLocaleChange} />
              <a
                href={siteLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 text-[13px] font-medium text-[#07080C] bg-white hover:bg-gray-200 rounded-md transition-colors"
                style={{ fontFamily: fonts.display }}
              >
                {copy.cta}
              </a>
            </div>

            <button
              className="md:hidden p-1.5 text-gray-300 hover:text-white"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden border-b border-white/[0.04]"
          style={{ backdropFilter: "blur(16px) saturate(180%)", background: "rgba(7,8,12,0.96)" }}
        >
          <div className="px-6 py-4 space-y-2">
            <LocaleSwitch locale={locale} onLocaleChange={onLocaleChange} compact />
            {copy.nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-3 py-2.5 text-[14px] text-gray-200 hover:text-white rounded-md hover:bg-white/[0.04] transition-colors"
                onClick={(event) => handleAnchorClick(event, item.href, true)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={siteLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="block px-3 py-2.5 text-[14px] text-gray-200 hover:text-white rounded-md hover:bg-white/[0.04] transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {copy.github}
            </a>
            <div className="pt-3 border-t border-white/[0.06]">
              <a
                href={siteLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-3.5 py-2.5 text-[14px] font-medium text-[#07080C] bg-white rounded-md"
              >
                {copy.cta}
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
