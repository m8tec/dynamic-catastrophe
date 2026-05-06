import BaseNode from "./BaseNode";
import { COLORS } from "@/app/constants/theme";

interface CloudNodeProps {
  id: string;
  data: {
    label: string;
    isActive?: boolean;
    isDiscovered?: boolean;
    isSelectable?: boolean;
    isTeased?: boolean;
  };
}

export default function CloudNode({ id, data }: CloudNodeProps) {
  const isActive = data.isActive;
  const isDiscovered = data.isDiscovered;
  const isSelectable = data.isSelectable;
  const isTeased = data.isTeased;

  const cloudPath =
    "M228 780.001C214.75 780.001 204 769.251 204 756.001C204 745.401 210.5 736.451 220.58 733.171C220 702.001 260 696.001 276 708.001C284 690.001 324 696.001 324 714.001C348 708.001 372 732.001 356 762.001C372 786.001 356 816.001 324 804.001C316 819.601 284 819.601 276 804.001C260 816.001 228 810.001 228 780.001Z";

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
          d={cloudPath}
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
          fontFamily: "Vesper Libre",
          lineHeight: "1.2",
        }}
      >
        {data.label}
      </div>
    </BaseNode>
  );
}
