import BaseNode from "./BaseNode";
import { COLORS, TYPOGRAPHY } from "@/constants/theme";

interface OptionNodeProps {
  id: string;
  data: {
    label: string;
    isActive?: boolean;
    isDiscovered?: boolean;
    isSelectable?: boolean;
    isTeased?: boolean;
  };
}

export default function OptionNode({ id, data }: OptionNodeProps) {
  const isActive = data.isActive;
  const isDiscovered = data.isDiscovered;
  const isSelectable = data.isSelectable;
  const isTeased = data.isTeased;

  let buttonClasses =
    "px-4 py-1.5 text-sm font-medium transition-all duration-300 font-vesper ";

  const backgroundColor = isActive
    ? COLORS.nodeBackgroundActive
    : isDiscovered
      ? COLORS.nodeBackgroundInactive
      : COLORS.nodeBackgroundUndiscovered;
  const borderColor = isSelectable
    ? COLORS.nodeBorderSelectableOption
    : isDiscovered
      ? COLORS.nodeBorderInactiveOption
      : COLORS.nodeBorderUndiscovered;
  const color = isActive
    ? COLORS.nodeTextActive
    : isSelectable
      ? COLORS.optionTextNext
      : isDiscovered
        ? COLORS.optionTextDefault
        : COLORS.nodeTextUndiscovered;

  if (isActive) {
    buttonClasses += "shadow-lg";
  } else if (isSelectable) {
    buttonClasses += "cursor-pointer";
  } else {
    buttonClasses += "cursor-default";
  }

  return (
    <BaseNode
      id={id}
      isActive={isActive}
      isDiscovered={isDiscovered}
      isSelectable={isSelectable}
      isTeased={isTeased}
      className="!min-w-0 !min-h-0 !w-max !h-max"
    >
      <div
        className={buttonClasses}
        style={{
          backgroundColor,
          borderColor,
          borderWidth: "1px",
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
