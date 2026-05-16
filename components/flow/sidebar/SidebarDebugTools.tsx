import { useTranslations } from "next-intl";

interface SidebarDebugToolsProps {
  onRevealAll: () => void;
  onCenterStart: () => void;
  onReset: () => void;
  theme: any;
}

export default function SidebarDebugTools({
  onRevealAll,
  onCenterStart,
  onReset,
  theme,
}: SidebarDebugToolsProps) {
  const t = useTranslations("ScenarioSidebar");

  return (
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
  );
}