import { Github } from "lucide-react";
import type { Locale } from "../i18n";
import { footerContent, siteLinks } from "../content";

type FooterProps = {
  locale: Locale;
};

export function Footer({ locale }: FooterProps) {
  const copy = footerContent[locale];

  return (
    <footer className="border-t border-white/[0.08] py-9 px-6 bg-[#0b1424]">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-7 mb-8">
          <div className="col-span-2 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-7 h-7 rounded-[7px] overflow-hidden border border-white/[0.14] bg-[#081022] flex items-center justify-center">
                <img
                  src="/branding/starfire-logo.png"
                  alt="Starfire logo"
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </span>
              <span className="text-[14px] font-semibold text-white tracking-[-0.01em]">Starfire</span>
            </div>
            <p className="text-[12px] text-gray-500 leading-[1.6] max-w-[260px]">{copy.brandDescription}</p>
          </div>

          {copy.sections.map((section) => (
            <div key={section.title}>
              <h4 className="text-[12px] font-medium text-gray-300 mb-4">{section.title}</h4>
              <ul className="space-y-2.5">
                {section.items.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13px] text-gray-400 hover:text-gray-200 transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/[0.04] flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-[12px] text-gray-500">{copy.copyright}</span>
          <a
            href={siteLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[12px] text-gray-400 hover:text-gray-200 transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            {copy.github}
          </a>
        </div>
      </div>
    </footer>
  );
}
