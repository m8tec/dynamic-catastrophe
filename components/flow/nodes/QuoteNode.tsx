import BaseNode from "./BaseNode";
import { TYPOGRAPHY } from "@/constants/theme";
import { useTheme } from "@/contexts/ThemeContext";

interface QuoteNodeProps {
  id: string;
  data: {
    label: string;
    isActive?: boolean;
    isDiscovered?: boolean;
    isSelectable?: boolean;
    isTeased?: boolean;
  };
}

export default function QuoteNode({ id, data }: QuoteNodeProps) {
  const isActive = data.isActive;
  const isDiscovered = data.isDiscovered;
  const isSelectable = data.isSelectable;
  const isTeased = data.isTeased;

  const COLORS = useTheme();

  const quotePath =
    "M1704 1516.65C1704 1513.89 1706.24 1511.65 1709 1511.65H1833L1860.5 1490L1863 1511.65H1939C1941.76 1511.65 1944 1513.89 1944 1516.65V1570.81C1944 1573.57 1941.76 1575.81 1939 1575.81H1709C1706.24 1575.81 1704 1573.57 1704 1570.81V1516.65Z";

  const color = isActive
    ? COLORS.nodeTextActive
    : isDiscovered
      ? COLORS.nodeTextInactive
      : COLORS.nodeTextUndiscovered;
  const fill = isActive
    ? COLORS.nodeBackgroundActive
    : isDiscovered
      ? COLORS.nodeBackgroundInactive
      : COLORS.nodeBackgroundUndiscovered;
  const stroke =
    isActive || isSelectable
      ? COLORS.nodeBackgroundActive
      : isDiscovered
        ? COLORS.nodeBorderInactive
        : COLORS.nodeBorderUndiscovered;

  return (
    <BaseNode
      id={id}
      isActive={isActive}
      isDiscovered={isDiscovered}
      isSelectable={isSelectable}
      isTeased={isTeased}
      className="w-48 h-40 flex items-center justify-center"
    >
      <svg
        viewBox="1702 1488 244 90"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full transition-all duration-300 drop-shadow-md"
      >
        <path
          d={quotePath}
          fill={fill}
          stroke={stroke}
          strokeWidth="2"
          strokeLinejoin="round"
          className="transition-all duration-300"
        />
      </svg>

      <div
        className="relative z-10 text-center text-xs sm:text-sm font-medium px-4 pb-4 pointer-events-none transition-colors duration-300 break-words w-full"
        style={{
          color,
          fontFamily: TYPOGRAPHY.nodeFontFamily,
          fontSize: TYPOGRAPHY.nodeFontSize,
          lineHeight: "1.2",
        }}
      >
        {data.label}
      </div>
    </BaseNode>
  );
}