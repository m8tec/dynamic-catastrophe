"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { localizedPath } from "@/utils/localizedPath";

export default function DynamicScenarioForm() {
  const t = useTranslations("DynamicForm");
  const locale = useLocale();

  const PHRASES = [
    t("phrases.0"),
    t("phrases.1"),
    t("phrases.2"),
    t("phrases.3"),
    t("phrases.4"),
  ];

  const [topic, setTopic] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [error, setError] = useState<string | null>(null);
  
  const [isOllamaOnline, setIsOllamaOnline] = useState<boolean>(true);
  
  const router = useRouter();

  useEffect(() => {
    const checkOllamaStatus = async () => {
      try {
        const res = await fetch("/api/health");
        setIsOllamaOnline(res.ok);
      } catch (err) {
        setIsOllamaOnline(false);
      }
    };

    checkOllamaStatus();

    const interval = setInterval(checkOllamaStatus, 10000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!isLoading) return;
    const interval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % PHRASES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isLoading, PHRASES.length]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic.trim()) return;

    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic }),
      });

      if (!res.ok) throw new Error(`API Fehler: ${res.status}`);

      const data = await res.json();

      if (data.scenario) {
        const scenarioData = { ...data, prompt: topic };
        sessionStorage.setItem("dynamicScenario", JSON.stringify(scenarioData));
        router.push(
          localizedPath(locale, `/play/dynamic?prompt=${encodeURIComponent(topic)}`)
        );
      } else {
        throw new Error("KI hat kein 'scenario' Array geliefert.");
      }
    } catch (err) {
      console.error("Fetch Error:", err);
      setError(t("fetchError"));
      setIsLoading(false);
      setIsOllamaOnline(false); 
    }
  };

  return (
    <section className="max-w-5xl mx-auto px-6 pt-24">
      <div className="bg-gradient-to-b from-[#1A1A1A] to-[#121212] p-10 md:p-14 rounded-2xl border border-neutral-800/50 shadow-2xl relative overflow-hidden transition-all duration-500 min-h-[250px] flex items-center justify-center">
        
        {isLoading && (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/10 via-transparent to-transparent animate-pulse" />
        )}

        <div className="max-w-2xl w-full relative z-10 transition-all duration-500">
          {!isLoading ? (
            <div className="animate-in fade-in zoom-in-95 duration-500">
              <h2 className="text-3xl md:text-4xl text-white mb-4 font-vesper">
                {t("title")}
              </h2>
              <p className="text-neutral-400 leading-relaxed mb-8">
                {t("description")}
              </p>

              {isOllamaOnline === false ? (
                <div className="bg-red-950/20 border border-red-900/50 rounded-lg p-6 flex flex-col items-center justify-center text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-red-500 mb-3 opacity-80">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <h3 className="text-red-500 font-vesper text-xl mb-2 tracking-wide uppercase">
                    {t("errorOfflineTitle")}
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed max-w-md">
                    {t("errorOfflineDesc")}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="text"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    placeholder={isOllamaOnline === null ? t("placeholderConnecting") : t("placeholderActive")}
                    required
                    disabled={isOllamaOnline === null}
                    className="flex-1 bg-[#222] border border-neutral-700 rounded-lg px-6 py-4 text-white focus:outline-none focus:border-red-500/50 focus:bg-[#2A2A2A] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                  <button
                    type="submit"
                    disabled={isOllamaOnline === null}
                    className="bg-white text-black font-medium px-8 py-4 rounded-lg hover:bg-red-500 hover:text-white transition-all duration-300 active:scale-95 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {t("button")}
                  </button>
                </form>
              )}
              
              {error && (
                <p className="text-red-500 text-sm font-semibold uppercase tracking-wider mt-4">
                  {error}
                </p>
              )}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-4 space-y-4 animate-in fade-in zoom-in duration-500 text-center w-full">
              <h3 className="text-red-500/80 tracking-[0.2em] uppercase font-semibold text-sm">
                {t("topicLabel")}{topic} {/* <-- Übersetzt */}
              </h3>

              <div className="h-28 md:h-32 flex items-center justify-center w-full px-4">
                <p 
                  key={phraseIndex}
                  className="text-2xl md:text-3xl text-white font-vesper opacity-90 drop-shadow-lg animate-in fade-in zoom-in-95 duration-700"
                >
                  {PHRASES[phraseIndex]}
                </p>
              </div>

              <div className="w-48 h-[2px] bg-neutral-800 relative overflow-hidden rounded-full mt-4">
                <div 
                  className="absolute top-0 left-0 h-full w-1/3 bg-red-600 rounded-full" 
                  style={{ animation: 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite, translateX 2s ease-in-out infinite alternate' }} 
                />
              </div>
            </div>
          )}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes translateX {
          0% { transform: translateX(0); }
          100% { transform: translateX(200%); }
        }
      `}} />
    </section>
  );
}