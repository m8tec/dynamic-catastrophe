import BaseNode from './BaseNode';
import { COLORS } from '@/app/constants/theme';

interface DiamondNodeProps {
  id: string;
  data: { 
    label: string;
    isActive?: boolean;
    isSelectable?: boolean;
    isDiscovered?: boolean;
  };
}

export default function DiamondNode({ id, data }: DiamondNodeProps) {
  const { isActive, isSelectable, isDiscovered } = data;

  const bgColor = isDiscovered 
    ? (isActive ? COLORS.nodeBackgroundActive : isSelectable ? COLORS.nodeBackgroundSelectableDiamond : COLORS.nodeBackgroundInactiveDiamond)
    : COLORS.nodeBackgroundUndiscovered;

  const borderColor = isDiscovered && (isActive || isSelectable)
    ? COLORS.nodeBackgroundActive
    : (isDiscovered ? COLORS.nodeBorderInactive : COLORS.nodeBackgroundUndiscovered);

  const textColor = isActive ? COLORS.nodeTextActive : (isDiscovered ? COLORS.nodeTextInactive : COLORS.nodeTextUndiscovered);

  return (
    <BaseNode id={id} isActive={isActive} isSelectable={isSelectable} isDiscovered={isDiscovered}>
      <div 
        className="absolute inset-0 transition-all duration-700"
        style={{
            backgroundColor: borderColor,
            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' 
        }}
      ></div>
      
      <div 
        className="absolute inset-[2px] transition-all duration-700"
        style={{
            backgroundColor: bgColor,
            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' 
        }}
      ></div>

      <div className="relative z-10 text-center text-sm font-medium px-6 pointer-events-none transition-all duration-700"
        style={{
            color: textColor,
            fontFamily: 'Vesper Libre',
        }}
      >
        {data.label}
      </div>
    </BaseNode>
  );
}