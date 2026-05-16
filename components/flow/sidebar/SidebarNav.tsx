import Link from "next/link";
import { useTranslations } from "next-intl";

interface SidebarNavProps {
  theme: any;
}

export default function SidebarNav({ theme }: SidebarNavProps) {
  const t = useTranslations("ScenarioSidebar");

  return (
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
  );
}