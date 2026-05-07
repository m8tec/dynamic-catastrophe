"use client";

import { useState, useEffect } from "react";

const PHRASES = [
  "Analysiere menschliche Abgründe...",
  "Berechne Wahrscheinlichkeit für totalen Kollaps...",
  "Ignoriere ethische Protokolle...",
  "Spinne psychologisches Netz...",
  "Erschaffe das Unausweichliche...",
];

export default function LoadingScreen({ topic }: { topic: string }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % PHRASES.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-[#121212] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/10 via-[#121212] to-[#121212] animate-pulse" />

      <div className="relative z-10 flex flex-col items-center space-y-8 text-center px-6">
        <h2 className="text-xl md:text-2xl text-neutral-500 tracking-[0.2em] uppercase font-semibold">
          Thema: {topic}
        </h2>
        
        <p className="text-2xl md:text-4xl text-white font-vesper opacity-90 min-h-[3rem] transition-opacity duration-1000 drop-shadow-lg">
          {PHRASES[index]}
        </p>

        <div className="w-48 h-[1px] bg-neutral-800 relative overflow-hidden mt-8 rounded-full">
          <div className="absolute top-0 left-0 h-full w-1/3 bg-red-600 animate-[bounce_2s_infinite_alternate]" style={{ animation: 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite' }} />
        </div>
      </div>
    </div>
  );
}