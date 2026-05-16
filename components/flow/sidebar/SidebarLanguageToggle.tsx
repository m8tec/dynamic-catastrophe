import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import { ThemeColors } from "@/constants/theme";

export default function SidebarLanguageToggle({ theme }: { theme: ThemeColors }) {
  const { currentLocale, switchTo, locales } = useLanguage();
  
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-2 px-4 rounded-md text-[10px] font-semibold uppercase tracking-wider transition-all duration-300 flex items-center justify-between group"
        style={{
          backgroundColor: theme.nodeBackgroundUndiscovered,
          border: `1px solid ${theme.nodeBorderInactive}`,
          color: theme.nodeTextInactive,
        }}
      >
        <div className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5 opacity-70">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
          </svg>
          Language: {currentLocale}
        </div>
        <svg className={`w-3 h-3 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div 
          className="absolute bottom-full left-0 mb-2 w-full rounded-md overflow-hidden flex flex-col shadow-2xl animate-in fade-in slide-in-from-bottom-2 duration-200 z-50"
          style={{ backgroundColor: theme.background, border: `1px solid ${theme.nodeBorderInactive}` }}
        >
          {locales.filter(l => l !== currentLocale).map((locale) => (
            <button
              key={locale}
              onClick={() => {
                switchTo(locale);
                setIsOpen(false);
              }}
              className="px-4 py-2.5 text-[10px] uppercase tracking-widest text-left transition-colors hover:brightness-125"
              style={{ color: theme.nodeTextInactive, borderBottom: `1px solid ${theme.nodeBorderInactive}40` }}
            >
              {locale}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}