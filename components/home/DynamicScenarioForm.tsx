"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const PHRASES = [
  "Analysiere menschliche Abgründe...",
  "Berechne Wahrscheinlichkeit für totalen Kollaps...",
  "Ignoriere ethische Protokolle...",
  "Spinne psychologisches Netz...",
  "Erschaffe das Unausweichliche...",
];

export default function DynamicScenarioForm() {
  const [topic, setTopic] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [error, setError] = useState<string | null>(null);
  
  const router = useRouter();
  
  useEffect(() => {
    if (!isLoading) return;
    const interval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % PHRASES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isLoading]);

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

        router.push(`/play/dynamic?prompt=${encodeURIComponent(topic)}`);
      } else {
        throw new Error("KI hat kein 'scenario' Array geliefert.");
      }
    } catch (err) {
      console.error("Fetch Error:", err);
      setError("Die Verbindung zum Abgrund ist abgerissen. Bitte versuche es erneut.");
      setIsLoading(false);
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
                Deine persönliche Katastrophe
              </h2>
              <p className="text-neutral-400 leading-relaxed mb-8">
                Lass die KI ein völlig neues, psychologisches Netz aus Ursache und
                Wirkung spinnen. Welches Thema hält dich nachts wach?
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                <input
                  type="text"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="z.B. KI-Superintelligenz, Hyperinflation..."
                  required
                  className="flex-1 bg-[#222] border border-neutral-700 rounded-lg px-6 py-4 text-white focus:outline-none focus:border-red-500/50 focus:bg-[#2A2A2A] transition-all"
                />
                <button
                  type="submit"
                  className="bg-white text-black font-medium px-8 py-4 rounded-lg hover:bg-red-500 hover:text-white transition-all duration-300 active:scale-95 whitespace-nowrap"
                >
                  Erschaffen
                </button>
              </form>
              
              {error && (
                <p className="text-red-500 text-sm font-semibold uppercase tracking-wider mt-4">
                  {error}
                </p>
              )}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-4 space-y-4 animate-in fade-in zoom-in duration-500 text-center w-full">
              <h3 className="text-red-500/80 tracking-[0.2em] uppercase font-semibold text-sm">
                Thema: {topic}
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