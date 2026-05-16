"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/hooks/useLanguage";

export default function LanguageToggle() {
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
    <div className="relative h-full" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-black/50 hover:bg-black/80 backdrop-blur-md border border-neutral-800 rounded-full text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-all duration-300 h-full"
      >
        {currentLocale}
        <svg className={`w-3 h-3 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute bottom-full right-0 mb-3 w-full min-w-[80px] bg-[#121212]/95 backdrop-blur-md border border-neutral-800 rounded-xl overflow-hidden flex flex-col shadow-2xl animate-in fade-in slide-in-from-bottom-2 duration-200">
          {locales.filter(l => l !== currentLocale).map((locale) => (
            <button
              key={locale}
              onClick={() => {
                switchTo(locale);
                setIsOpen(false);
              }}
              className="px-4 py-3 text-xs uppercase tracking-widest text-neutral-400 hover:text-white hover:bg-neutral-800/50 text-center transition-colors"
            >
              {locale}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}