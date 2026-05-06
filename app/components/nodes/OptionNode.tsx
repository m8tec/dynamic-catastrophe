import BaseNode from './BaseNode';
import { COLORS } from '@/app/constants/theme';

interface OptionNodeProps {
  id: string;
  data: { 
    label: string;
    isActive?: boolean;
    isSelectable?: boolean;
  };
}

export default function OptionNode({ id, data }: OptionNodeProps) {
  const isActive = data.isActive;
  const isSelectable = data.isSelectable;

  let buttonClasses = "px-4 py-1.5 text-sm font-medium transition-all duration-300 font-vesper rounded-md ";

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
        backgroundColor: isActive ? COLORS.nodeBackgroundActive : COLORS.optionBackgroundInactive,
        borderColor: isSelectable ? COLORS.nodeBackgroundActive : 'transparent',
        borderWidth: '1px',
        color: isActive ? COLORS.optionTextActive : (isSelectable ? COLORS.optionTextNext : COLORS.optionTextDefault),
        fontFamily: 'Vesper Libre',
      }}>
        {data.label}
      </div>
    </BaseNode>
  );
}