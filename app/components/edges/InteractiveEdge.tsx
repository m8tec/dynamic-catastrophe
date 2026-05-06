import { BaseEdge, EdgeProps, getBezierPath } from '@xyflow/react';
import { COLORS } from '@/app/constants/theme';

export default function InteractiveEdge({
  id, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition, data, style, markerEnd
}: EdgeProps) {
  const [edgePath] = getBezierPath({ sourceX, sourceY, sourcePosition, targetX, targetY, targetPosition });
  
  const isSelectable = data?.isSelectable as boolean; 
  const isDiscovered = data?.isDiscovered as boolean;
  const isTeased = data?.isTeased as boolean;

  const isVisible = isDiscovered || isTeased;

  let color = isSelectable ? COLORS.pathActive : COLORS.pathInactive;

  const edgeStyle = {
    ...style,
    stroke: `url(#gradient-${id})`,
    strokeWidth: isSelectable ? 2.5 : 2,
    opacity: isVisible ? 1 : 0,
    transition: 'stroke-width 0.3s ease, opacity 0.7s ease',
  };

  return (
    <>
      <defs>
        <linearGradient id={`gradient-${id}`} gradientUnits="userSpaceOnUse" x1={sourceX} y1={sourceY} x2={targetX} y2={targetY}>
          <stop offset="100%" stopColor={color} />
        </linearGradient>
      </defs>
      <BaseEdge path={edgePath} markerEnd={markerEnd} style={edgeStyle} />
    </>
  );
}