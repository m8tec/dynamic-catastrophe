"use client";

import { useState } from "react";
import Link from "next/link";
import { useTheme } from "@/contexts/ThemeContext";
import { TYPOGRAPHY } from "@/constants/theme";
import { useTranslations } from "next-intl";

interface ScenarioSidebarProps {
  description: string;
  isDynamic: boolean;
  onCenterStart: () => void;
  onExport: () => void;
  onRevealAll: () => void;
  onReset: () => void;
  prompt?: string;
  teaserImage?: string;
  title: string;
}

export default function ScenarioSidebar({
  description,
  isDynamic,
  onCenterStart,
  onExport,
  onRevealAll,
  onReset,
  prompt,
  teaserImage,
  title
}: ScenarioSidebarProps) {
  const t = useTranslations("ScenarioSidebar");
  const theme = useTheme();

  const [isOpen, setIsOpen] = useState(true);

  const sidebarBg = theme.background;
  const titleColor = isColorDark(sidebarBg) ? "#FFFFFF" : "#111111";

  function isColorDark(color: string): boolean {
    if (color.startsWith("#")) {
      const rgb = parseInt(color.slice(1), 16);
      var r = (rgb >> 16) & 0xff;
      var g = (rgb >> 8) & 0xff;
      var b = (rgb >> 0) & 0xff;

      var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
      return luma < 128;
    }

    console.warn("Unknown color format, defaulting to dark:", color);
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
            {t("backToHome")}
          </Link>

          {teaserImage ? (
            <div className="relative w-full h-48 shrink-0">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${teaserImage}')` }}
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
              teaserImage ? "-mt-12" : "mt-16"
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
                {title}
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
              {description}
            </p>

            {isDynamic && prompt && (
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
                  {t("originalPrompt")}
                </div>
                <div
                  className="text-sm italic"
                  style={{
                    color: theme.nodeTextActive,
                    fontFamily: TYPOGRAPHY.nodeFontFamily,
                  }}
                >
                  "{prompt}"
                </div>
              </div>
            )}

            <div className="flex-1 min-h-[1rem]" />

            <div 
              className="flex flex-col gap-3 pt-5 border-t"
              style={{ borderColor: theme.nodeBorderInactive }}
            >
              <span 
                className="text-[10px] font-bold uppercase tracking-widest opacity-50"
                style={{ color: theme.nodeTextActive }}
              >
                {t("debugTools")}
              </span>
              <div className="flex gap-2">
                <button
                  onClick={onRevealAll}
                  className="flex-1 py-2 rounded text-[10px] font-semibold uppercase tracking-wider transition-all duration-300 hover:brightness-125 flex flex-col items-center justify-center gap-1"
                  style={{
                    backgroundColor: theme.nodeBackgroundUndiscovered,
                    border: `1px solid ${theme.nodeBorderInactive}`,
                    color: theme.nodeTextInactive,
                  }}
                  title={t("revealAllDescription")}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {t("revealAllTitle")}
                </button>

                <button
                  onClick={onCenterStart}
                  className="flex-1 py-2 rounded text-[10px] font-semibold uppercase tracking-wider transition-all duration-300 hover:brightness-125 flex flex-col items-center justify-center gap-1"
                  style={{
                    backgroundColor: theme.nodeBackgroundUndiscovered,
                    border: `1px solid ${theme.nodeBorderInactive}`,
                    color: theme.nodeTextInactive,
                  }}
                  title={t("centerStartDescription")}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25" />
                  </svg>
                  {t("centerStartTitle")}
                </button>
                
                <button
                  onClick={onReset}
                  className="flex-1 py-2 rounded text-[10px] font-semibold uppercase tracking-wider transition-all duration-300 hover:brightness-125 flex flex-col items-center justify-center gap-1"
                  style={{
                    backgroundColor: theme.nodeBackgroundUndiscovered,
                    border: `1px solid ${theme.nodeBorderInactive}`,
                    color: theme.nodeTextInactive,
                  }}
                  title={t("resetDescription")}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                  </svg>
                  {t("resetTitle")}
                </button>
              </div>
            </div>

            <button
              className="w-full py-3 px-4 rounded-md text-sm font-semibold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 group"
              onClick={onExport}
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
              {t("exportButton")}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}