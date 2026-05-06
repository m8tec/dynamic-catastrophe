import BaseNode from './BaseNode';
import { COLORS } from '@/app/constants/theme';

interface RectangleNodeProps {
  id: string;
  data: { 
    label: string;
    isActive?: boolean;
    isSelectable?: boolean;
  };
}

export default function RectangleNode({ id, data }: RectangleNodeProps) {
  const isActive = data.isActive;
  const isSelectable = data.isSelectable;

  return (
    <>
      <BaseNode id={id} isActive={isActive} isSelectable={isSelectable} className="w-56 h-auto min-h-24">
        <div 
          className="absolute inset-0 rounded-md border-2 transition-all duration-300 shadow-md"
          style={{
              backgroundColor: isActive ? COLORS.nodeBackgroundActive : COLORS.nodeBackgroundInactive,
              borderColor: (isActive || isSelectable) ? COLORS.nodeBackgroundActive : COLORS.nodeBorderInactive,
          }}
        ></div>
        
        <div className="relative z-10 text-center text-sm px-6 py-4 pointer-events-none transition-colors duration-300 font-vesper"
          style={{
              color: isActive 
                ? COLORS.nodeTextActive 
                : (isSelectable ? COLORS.nodeBackgroundActive : COLORS.nodeTextInactive),
              lineHeight: '1.5'
          }}
        >
          {data.label}
        </div>
      </BaseNode>
    </>
  );
}