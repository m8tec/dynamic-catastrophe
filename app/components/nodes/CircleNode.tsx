import BaseNode from "./BaseNode";
import { COLORS } from "@/app/constants/theme";

interface CircleNodeProps {
  id: string;
  data: {
    label: string;
    isActive?: boolean;
    isDiscovered?: boolean;
    isSelectable?: boolean;
    isTeased?: boolean;
  };
}

export default function CircleNode({ id, data }: CircleNodeProps) {
  const isActive = data.isActive;
  const isDiscovered = data.isDiscovered;
  const isSelectable = data.isSelectable;
  const isTeased = data.isTeased;

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
      className="w-40 h-40"
    >
      <div
        className="absolute inset-0 rounded-full border-2 transition-all duration-300"
        style={{
          backgroundColor,
          borderColor,
        }}
      ></div>

      <div
        className="relative z-10 text-center text-sm font-medium px-6 pointer-events-none transition-colors duration-300"
        style={{
          color,
          fontFamily: "Vesper Libre",
        }}
      >
        {data.label}
      </div>
    </BaseNode>
  );
}
