import BaseNode from './BaseNode';
import { COLORS } from '@/app/constants/theme';

interface DiamondNodeProps {
  id: string;
  data: { 
    label: string;
    isActive?: boolean;
  };
}

export default function DiamondNode({ id, data }: DiamondNodeProps) {
  const isActive = data.isActive;

  return (
    <BaseNode id={id} isActive={isActive}>
      <div 
        className="absolute inset-0 transition-all duration-300"
        style={{
            backgroundColor: isActive ? COLORS.nodeBackgroundActive : COLORS.nodeBorderInactive,
            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' 
        }}
      ></div>
      
      <div 
        className="absolute inset-[2px] transition-all duration-300"
        style={{
            backgroundColor: isActive ? COLORS.nodeBackgroundActive : COLORS.nodeBackgroundInactiveDiamond,
            clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' 
        }}
      ></div>

      <div className="relative z-10 text-center text-sm font-medium px-6 pointer-events-none transition-colors duration-300"
        style={{
            color: isActive ? COLORS.nodeTextActive : COLORS.nodeTextInactive,
            fontFamily: 'Vesper Libre',
        }}
      >
        {data.label}
      </div>
    </BaseNode>
  );
}