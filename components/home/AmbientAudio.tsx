"use client";

import { useState, useRef, useEffect } from "react";

interface AmbientAudioProps {
  src?: string;
}

export default function AmbientAudio({ src }: AmbientAudioProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audioEl = audioRef.current;
    if (!audioEl) return;

    let cleanup = () => {};

    const playPromise = audioEl.play();
    
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          console.warn("Autoplay blocked, waiting for user interaction to start audio.");
          
          const handleFirstInteraction = () => {
            audioEl.play()
              .then(() => setIsPlaying(true))
              .catch((err) => console.error("Audio Playback Error:", err));
              
            document.removeEventListener("click", handleFirstInteraction);
          };

          document.addEventListener("click", handleFirstInteraction);
          cleanup = () => document.removeEventListener("click", handleFirstInteraction);
        });
    }

    return () => cleanup();
  }, []);

  const toggleMute = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <audio 
        ref={audioRef} 
        src={src}
        loop 
        preload="auto"
      />

      <button
        onClick={toggleMute}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-2 bg-black/50 hover:bg-black/80 backdrop-blur-md border border-neutral-800 rounded-full text-xs uppercase tracking-widest text-neutral-400 hover:text-red-500 transition-all duration-300"
      >
        <span className="relative flex h-2 w-2">
          {isPlaying && (
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          )}
          <span className={`relative inline-flex rounded-full h-2 w-2 ${isPlaying ? 'bg-red-500' : 'bg-neutral-600'}`}></span>
        </span>
        {isPlaying ? "Audio On" : "Audio Off"}
      </button>
    </>
  );
}