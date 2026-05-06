import BaseNode from './BaseNode';
import { COLORS } from '@/app/constants/theme';

interface CloudNodeProps {
  id: string;
  data: { 
    label: string;
    isActive?: boolean;
    isSelectable?: boolean;
  };
}

export default function CloudNode({ id, data }: CloudNodeProps) {
  const isActive = data.isActive;
  const isSelectable = data.isSelectable;

  return (
    <BaseNode id={id} isActive={isActive} isSelectable={isSelectable}>
      
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-[120%] h-[100%] -left-[10%] transition-all duration-300 drop-shadow-md"
        preserveAspectRatio="none" 
      >
        <path
          d="M 50 15 C 65 15, 75 25, 75 35 C 90 35, 95 50, 85 65 C 95 75, 80 90, 65 85 C 60 95, 40 95, 35 85 C 20 90, 5 75, 15 65 C 5 50, 10 35, 25 35 C 25 25, 35 15, 50 15 Z"
          
          fill={isActive ? COLORS.nodeBackgroundActive : COLORS.nodeBackgroundInactive}
          stroke={(isActive || isSelectable) ? COLORS.nodeBackgroundActive : COLORS.nodeBorderInactive}
          
          strokeWidth="3" 
          strokeLinejoin="round"
          
          vectorEffect="non-scaling-stroke" 
          className="transition-all duration-300"
        />
      </svg>
      
      <div className="relative z-10 text-center text-sm px-4 pointer-events-none transition-colors duration-300 font-vesper"
        style={{
            color: isActive 
              ? COLORS.nodeTextActive 
              : (isSelectable ? COLORS.nodeBackgroundActive : COLORS.nodeTextInactive),
            lineHeight: '1.4'
        }}
      >
        {data.label}
      </div>
    </BaseNode>
  );
}