import BaseNode from './BaseNode';
import { COLORS, TYPOGRAPHY } from '@/app/constants/theme';

interface DiamondNodeProps {
  id: string;
  data: { 
    label: string;
    isActive?: boolean;
    isDiscovered?: boolean;
    isSelectable?: boolean;
    isTeased?: boolean;
  };
}

export default function DiamondNode({ id, data }: DiamondNodeProps) {
  const { isActive, isDiscovered, isSelectable, isTeased } = data;

  const bgColor = isDiscovered 
    ? (isActive ? COLORS.nodeBackgroundActive : isSelectable ? COLORS.nodeBackgroundSelectableDiamond : COLORS.nodeBackgroundInactiveDiamond)
    : COLORS.nodeBackgroundUndiscovered;

  const borderColor = isDiscovered && (isActive || isSelectable)
    ? COLORS.nodeBackgroundActive
    : (isDiscovered ? COLORS.nodeBorderInactive : COLORS.nodeBackgroundUndiscovered);

  const textColor = isActive ? COLORS.nodeTextActive : (isDiscovered ? COLORS.nodeTextInactive : COLORS.nodeTextUndiscovered);

  return (
    <BaseNode id={id} isActive={isActive} isSelectable={isSelectable} isDiscovered={isDiscovered} isTeased={isTeased}>
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
      
      <div className="relative z-10 text-center font-medium px-2 max-w-[130px] mx-auto leading-snug pointer-events-none transition-all duration-700"
        style={{
            color: textColor,
            fontFamily: TYPOGRAPHY.nodeFontFamily,
            fontSize: TYPOGRAPHY.nodeFontSize,
        }}
      >
        {data.label}
      </div>
    </BaseNode>
  );
}