"use client";

import { useState } from "react";

import { useTheme } from "@/contexts/ThemeContext";
import { isColorDark } from "@/utils/color";

import SidebarNav from "@/components/flow/sidebar/SidebarNav";
import SidebarInfo from "@/components/flow/sidebar/SidebarInfo";
import SidebarDebugTools from "@/components/flow/sidebar/SidebarDebugTools";
import SidebarExportButton from "@/components/flow/sidebar/SidebarExportButton";
import SidebarToggleButton from "@/components/flow/sidebar/SidebarToggleButton";
import SidebarLanguageToggle from "@/components/flow/sidebar/SidebarLanguageToggle";

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
  title,
}: ScenarioSidebarProps) {
  const theme = useTheme();

  const [isOpen, setIsOpen] = useState(true);

  const sidebarBg = theme.background;
  const titleColor = isColorDark(sidebarBg) ? "#FFFFFF" : "#111111";

  return (
    <div
      className={`absolute top-0 left-0 h-full w-80 z-50 flex flex-col shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
      style={{
        backgroundColor: sidebarBg,
        borderRight: `1px solid ${theme.nodeBorderInactive}`,
      }}
    >
      <SidebarToggleButton
        isOpen={isOpen}
        onToggle={() => setIsOpen(!isOpen)}
        theme={theme}
        sidebarBg={sidebarBg}
      />

      <div className="flex-1 overflow-y-auto overflow-x-hidden flex flex-col relative custom-scrollbar pb-28">
        <SidebarNav theme={theme} />

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
          className={`px-6 pb-6 flex flex-col gap-6 relative z-10 ${teaserImage ? "-mt-12" : "mt-16"}`}
        >
          <SidebarInfo
            title={title}
            titleColor={titleColor}
            description={description}
            isDynamic={isDynamic}
            prompt={prompt}
            theme={theme}
          />

          <div className="flex-1 min-h-[1rem]" />

          <SidebarDebugTools
            onRevealAll={onRevealAll}
            onCenterStart={onCenterStart}
            onReset={onReset}
            theme={theme}
          />

          <SidebarExportButton onExport={onExport} theme={theme} />
        </div>
      </div>
      <div
        className="absolute bottom-0 left-0 w-full px-6 pb-6 pt-16 pointer-events-none z-20 flex flex-col justify-end"
        style={{
          background: `linear-gradient(to bottom, transparent 0%, ${sidebarBg} 75%, ${sidebarBg} 100%)`,
        }}
      >
        <div className="pointer-events-auto backdrop-blur-sm rounded-md">
          <SidebarLanguageToggle theme={theme} />
        </div>
      </div>
    </div>
  );
}
