import { ThemeColors } from "@/constants/theme";

interface SidebarToggleButtonProps {
  isOpen: boolean;
  onToggle: () => void;
  theme: ThemeColors;
  sidebarBg: string;
}

export default function SidebarToggleButton({
  isOpen,
  onToggle,
  theme,
  sidebarBg,
}: SidebarToggleButtonProps) {
  return (
    <button
      onClick={onToggle}
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
  );
}