import BaseNode from "./BaseNode";
import { TYPOGRAPHY } from "@/constants/theme";
import { useTheme } from "@/contexts/ThemeContext";

interface BorderNodeProps {
  id: string;
  data: {
    label: string;
    isActive?: boolean;
    isDiscovered?: boolean;
    isSelectable?: boolean;
    isTeased?: boolean;
  };
}

export default function DefinitionNode({ id, data }: BorderNodeProps) {
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
      className="w-56 min-h-[4rem] flex items-center justify-start"
    >
      <div
        className="absolute inset-0 transition-all duration-300"
        style={{ backgroundColor }}
      ></div>

      <div 
        className="absolute left-0 top-0 bottom-0 w-1 transition-all duration-300"
        style={{ backgroundColor: borderColor }}
      />
      <div 
        className="absolute left-0 top-0 h-1 w-6 transition-all duration-300"
        style={{ backgroundColor: borderColor }}
      />
      <div 
        className="absolute left-0 bottom-0 h-1 w-6 transition-all duration-300"
        style={{ backgroundColor: borderColor }}
      />

      <div
        className="relative z-10 text-left text-sm font-medium pl-6 pr-4 py-3 pointer-events-none transition-colors duration-300"
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