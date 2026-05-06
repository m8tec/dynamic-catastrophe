import BaseNode from './BaseNode';
import { COLORS } from '@/app/constants/theme';

interface CircleNodeProps {
  id: string;
  data: { 
    label: string;
    isActive?: boolean;
    isSelectable?: boolean;
  };
}

export default function CircleNode({ id, data }: CircleNodeProps) {
  const isActive = data.isActive;
  const isSelectable = data.isSelectable;

  return (
    <BaseNode id={id} isActive={isActive} isSelectable={isSelectable} className="w-40 h-40">
      <div 
        className="absolute inset-0 rounded-full border-2 transition-all duration-300"
        style={{
            backgroundColor: isActive ? COLORS.nodeBackgroundActive : COLORS.nodeBackgroundInactive,
            borderColor: (isActive || isSelectable) ? COLORS.nodeBackgroundActive : COLORS.nodeBorderInactive,
        }}
      ></div>

      <div className="relative z-10 text-center text-sm font-medium px-6 pointer-events-none transition-colors duration-300"
        style={{
            color: isActive 
              ? COLORS.nodeTextActive 
              : (isSelectable ? COLORS.nodeBackgroundActive : COLORS.nodeTextInactive),
            fontFamily: 'Vesper Libre',
        }}
      >
        {data.label}
      </div>
    </BaseNode>
  );
}