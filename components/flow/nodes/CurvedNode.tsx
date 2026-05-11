import BaseNode from "./BaseNode";
import { TYPOGRAPHY } from "@/constants/theme";
import { useTheme } from "@/contexts/ThemeContext";

interface CurvedNodeProps {
  id: string;
  data: {
    label: string;
    isActive?: boolean;
    isDiscovered?: boolean;
    isSelectable?: boolean;
    isTeased?: boolean;
  };
}

export default function CurvedNode({ id, data }: CurvedNodeProps) {
  const isActive = data.isActive;
  const isDiscovered = data.isDiscovered;
  const isSelectable = data.isSelectable;
  const isTeased = data.isTeased;

  const COLORS = useTheme();

  const curvedPath =
    "M464 504H658.88V574.57C626.34 562.77 606.08 562.77 593.78 562.77C574.3 562.77 548.38 574.57 528.9 574.57C516.8 574.57 496.35 574.57 464 562.77V504Z";

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
      className="w-48 h-40"
    >
      <svg
        viewBox="202 688 172 134"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full transition-all duration-300 drop-shadow-md"
      >
        <path
          d={curvedPath}
          fill={fill}
          stroke={stroke}
          strokeWidth="2"
          strokeLinejoin="round"
          className="transition-all duration-300"
        />
      </svg>

      <div
        className="relative z-10 text-center text-xs sm:text-sm font-medium px-10 pointer-events-none transition-colors duration-300 break-words w-full"
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
