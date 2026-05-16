import { useTranslations } from "next-intl";

interface SidebarExportButtonProps {
  onExport: () => void;
  theme: any;
}

export default function SidebarExportButton({
  onExport,
  theme,
}: SidebarExportButtonProps) {
  const t = useTranslations("ScenarioSidebar");

  return (
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
  );
}