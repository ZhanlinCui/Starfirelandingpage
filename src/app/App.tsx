import { useEffect, useState } from "react";
import { DEFAULT_LOCALE, LOCALE_STORAGE_KEY, type Locale } from "./i18n";
import { CapabilityProof } from "./components/CapabilityProof";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Moats } from "./components/Moats";
import { UseCases } from "./components/UseCases";
import { WhyNow } from "./components/WhyNow";
import { LandingBackground } from "./components/background/LandingBackground";

export default function App() {
  const [locale, setLocale] = useState<Locale>(DEFAULT_LOCALE);

  useEffect(() => {
    const saved = window.localStorage.getItem(LOCALE_STORAGE_KEY);
    if (saved === "en" || saved === "zh") {
      setLocale(saved);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
  }, [locale]);

  return (
    <div className="relative min-h-screen bg-[var(--bg-base)] text-[var(--text-strong)]">
      <LandingBackground />
      <div className="relative z-10">
        <Header locale={locale} onLocaleChange={setLocale} />
        <main>
          <Hero locale={locale} />
          <WhyNow locale={locale} />
          <Moats locale={locale} />
          <CapabilityProof locale={locale} />
          <UseCases locale={locale} />
          <FinalCTA locale={locale} />
        </main>
        <Footer locale={locale} />
      </div>
    </div>
  );
}

