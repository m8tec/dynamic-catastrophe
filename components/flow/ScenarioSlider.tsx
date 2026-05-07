"use client";

import { useState } from "react";
import Link from "next/link";
import { useTheme } from "@/contexts/ThemeContext";
import { TYPOGRAPHY } from "@/constants/theme";

export interface SidebarData {
  title: string;
  description: string;
  teaserImage?: string | null;
  prompt?: string | null;
}

interface ScenarioSidebarProps {
  data: SidebarData;
  isDynamic: boolean;
}

export default function ScenarioSidebar({
  data,
  isDynamic,
}: ScenarioSidebarProps) {
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(true);

  const sidebarBg = theme.background;
  const titleColor = (isColorDark(sidebarBg) ? "#FFFFFF" : "#111111");

  function isColorDark(color: string): boolean {
    if (color.startsWith("#")) {
      const rgb = parseInt(color.slice(1), 16);
      var r = (rgb >> 16) & 0xff;
      var g = (rgb >> 8) & 0xff;
      var b = (rgb >> 0) & 0xff;

      var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
      console.log(`Farbprüfung: ${color} -> Luma: ${luma.toFixed(2)}`);

      return luma < 128;
    }

    console.warn("Unbekanntes Farbformat, Standard auf dunkel gesetzt:", color);
    return true;
  }

  return (
    <>
      <div
        className={`absolute top-0 left-0 h-full w-80 z-50 flex flex-col shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{
          backgroundColor: sidebarBg,
          borderRight: `1px solid ${theme.nodeBorderInactive}`,
        }}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute top-1/2 -right-8 w-8 h-16 -translate-y-1/2 flex items-center justify-center rounded-r-md border-y border-r transition-all duration-300 hover:brightness-125"
          style={{
            backgroundColor: sidebarBg,
            borderColor: theme.nodeBorderInactive,
            color: theme.nodeTextActive,
          }}
          title={isOpen ? "Sidebar schließen" : "Sidebar öffnen"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`w-4 h-4 transition-transform duration-500 ${isOpen ? "rotate-180" : ""}`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>

        <div className="flex-1 overflow-y-auto overflow-x-hidden flex flex-col relative custom-scrollbar">
          <Link
            href="/"
            className="absolute top-5 left-5 z-20 flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest opacity-80 hover:opacity-100 transition-all duration-300 group bg-black/40 hover:bg-black/60 px-3 py-1.5 rounded-full backdrop-blur-md border"
            style={{
              color: theme.nodeTextInactive,
              borderColor: theme.nodeBorderInactive,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            Flucht
          </Link>

          {data.teaserImage ? (
            <div className="relative w-full h-48 shrink-0">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${data.teaserImage}')` }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(to bottom, transparent 0%, ${sidebarBg} 100%)`,
                }}
              />
            </div>
          ) : (
            <div className="h-12 shrink-0" />
          )}

          <div
            className={`px-6 pb-6 flex flex-col gap-6 relative z-10 ${
              data.teaserImage ? "-mt-12" : "mt-16"
            }`}
          >
            <div>
              <h2
                className="text-2xl font-bold leading-tight"
                style={{
                  color: titleColor,
                  fontFamily: TYPOGRAPHY.nodeFontFamily,
                }}
              >
                {data.title}
              </h2>
              <div
                className="w-12 h-1 mt-3 rounded-full"
                style={{ backgroundColor: theme.nodeBackgroundActive }}
              />
            </div>

            <p
              className="text-sm leading-relaxed opacity-90"
              style={{ color: theme.nodeTextInactive }}
            >
              {data.description}
            </p>

            {isDynamic && data.prompt && (
              <div
                className="mt-2 p-4 rounded-md border border-dashed"
                style={{
                  borderColor: theme.nodeBorderInactive,
                  backgroundColor: theme.nodeBackgroundUndiscovered,
                }}
              >
                <div
                  className="text-xs uppercase tracking-widest mb-2 opacity-70"
                  style={{ color: theme.nodeTextInactive }}
                >
                  Ursprünglicher Prompt
                </div>
                <div
                  className="text-sm italic"
                  style={{
                    color: theme.nodeTextActive,
                    fontFamily: TYPOGRAPHY.nodeFontFamily,
                  }}
                >
                  "{data.prompt}"
                </div>
              </div>
            )}

            <div className="flex-1 min-h-[2rem]" />

            <button
              className="w-full py-3 px-4 rounded-md text-sm font-semibold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 group"
              style={{
                backgroundColor: "transparent",
                border: `1px solid ${theme.nodeBorderInactive}`,
                color: theme.nodeTextInactive,
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                />
              </svg>
              Szenario Exportieren
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
