import BaseNode from './BaseNode';
import { COLORS } from '@/app/constants/theme';

interface OptionNodeProps {
  id: string;
  data: { 
    label: string;
    isActive?: boolean;
    isDiscovered?: boolean;
    isSelectable?: boolean;
  };
}

export default function OptionNode({ id, data }: OptionNodeProps) {
  const isActive = data.isActive;
  const isDiscovered = data.isDiscovered;
  const isSelectable = data.isSelectable;

  let buttonClasses = "px-4 py-1.5 text-sm font-medium transition-all duration-300 font-vesper ";

  const backgroundColor = isActive ? COLORS.nodeBackgroundActive : isDiscovered ? COLORS.nodeBackgroundInactive : COLORS.nodeBackgroundUndiscovered;
  const borderColor = isSelectable ? COLORS.nodeBackgroundActive : isDiscovered ? COLORS.nodeBorderInactiveOption : COLORS.nodeBorderUndiscovered;
  const color = isActive ? COLORS.nodeTextActive : (isSelectable ? COLORS.optionTextNext : isDiscovered ? COLORS.optionTextDefault : COLORS.nodeTextUndiscovered);

  if (isActive) {
      buttonClasses += "shadow-lg";
  } else if (isSelectable) {
      buttonClasses += "cursor-pointer shadow-lg";
  } else {
      buttonClasses += "cursor-default";
  }

  return (
    <BaseNode id={id} isActive={isActive} isSelectable={isSelectable} className="!min-w-0 !min-h-0 !w-max !h-max">
      <div className={buttonClasses} style={{
        backgroundColor,
        borderColor,
        borderWidth: '1px',
        color,
        fontFamily: 'Vesper Libre'
      }}>
        {data.label}
      </div>
    </BaseNode>
  );
}