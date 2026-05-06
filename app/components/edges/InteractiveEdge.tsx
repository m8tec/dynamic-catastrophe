import { BaseEdge, EdgeProps, getBezierPath, useReactFlow } from '@xyflow/react';
import { COLORS } from '@/app/constants/theme';

export default function InteractiveEdge({
  id, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition, data, style, target
}: EdgeProps) {
  const [edgePath] = getBezierPath({ sourceX, sourceY, sourcePosition, targetX, targetY, targetPosition });
  
  const { getNode } = useReactFlow();
  const targetNode = getNode(target);
  
  const showArrow = targetNode && targetNode.type !== 'option';
  
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

        {showArrow && (
          <marker
            id={`arrow-${id}`}
            viewBox="0 0 10 10"
            refX="8"
            refY="5"
            markerWidth="5"
            markerHeight="5"
            orient="auto-start-reverse"
          >
            <path 
              d="M 0 0 L 10 5 L 0 10 z" 
              fill={color} 
              style={{
                opacity: isVisible ? 1 : 0,
                transition: 'opacity 0.7s ease, fill 0.3s ease',
              }}
            />
          </marker>
        )}
      </defs>
      
      <BaseEdge 
        path={edgePath} 
        markerEnd={showArrow ? `url(#arrow-${id})` : undefined} 
        style={edgeStyle} 
      />
    </>
  );
}