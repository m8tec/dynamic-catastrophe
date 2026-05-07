import BaseNode from "./BaseNode";
import { TYPOGRAPHY } from "@/constants/theme";
import { useTheme } from "@/contexts/ThemeContext";

interface RectangleNodeProps {
  id: string;
  data: {
    label: string;
    isActive?: boolean;
    isDiscovered?: boolean;
    isSelectable?: boolean;
    isTeased?: boolean;
  };
}

export default function RectangleNode({ id, data }: RectangleNodeProps) {
  const isActive = data.isActive;
  const isDiscovered = data.isDiscovered;
  const isSelectable = data.isSelectable;
  const isTeased = data.isTeased;

  const COLORS = useTheme();

  const backgroundColor = isActive
    ? COLORS.nodeBackgroundActive
    : isDiscovered
      ? COLORS.nodeBackgroundInactive
      : COLORS.nodeBackgroundUndiscovered;
  const borderColor =
    isActive || isSelectable
      ? COLORS.nodeBackgroundActive
      : isDiscovered
        ? COLORS.nodeBorderInactive
        : COLORS.nodeBorderUndiscovered;
  const color = isActive
    ? COLORS.nodeTextActive
    : isSelectable
      ? COLORS.nodeBackgroundActive
      : isDiscovered
        ? COLORS.nodeTextInactive
        : COLORS.nodeTextUndiscovered;

  return (
    <BaseNode
      id={id}
      isActive={isActive}
      isDiscovered={isDiscovered}
      isSelectable={isSelectable}
      isTeased={isTeased}
      className="w-56 min-h-[4rem] flex items-center justify-center"
    >
      <div
        className="absolute inset-0 border-4 transition-all duration-300"
        style={{
          backgroundColor,
          borderColor,
        }}
      ></div>

      <div
        className="relative z-10 text-center text-sm font-medium px-4 py-3 pointer-events-none transition-colors duration-300"
        style={{
          color,
          fontFamily: TYPOGRAPHY.nodeFontFamily,
          fontSize: TYPOGRAPHY.nodeFontSize,
        }}
      >
        {data.label}
      </div>
    </BaseNode>
  );
}