import { BaseEdge, EdgeProps, useInternalNode } from '@xyflow/react';
import { useTheme } from "@/contexts/ThemeContext";

function getPointOnBoundary(node: any, angle: number) {
  const w = (node.measured?.width || node.width || 0) / 2;
  const h = (node.measured?.height || node.height || 0) / 2;
  const cx = (node.internals?.positionAbsolute?.x || node.position.x) + w;
  const cy = (node.internals?.positionAbsolute?.y || node.position.y) + h;

  const cos = Math.cos(angle);
  const sin = Math.sin(angle);

  let x, y;
  if (node.type === 'diamond') {
    const a = 1 / (Math.abs(cos) / w + Math.abs(sin) / h);
    x = cx + a * cos;
    y = cy + a * sin;
  } else if (node.type === 'circle' || node.type === 'cloud') {
    const a = 1 / Math.sqrt(Math.pow(cos / w, 2) + Math.pow(sin / h, 2));
    x = cx + a * cos;
    y = cy + a * sin;
  } else {
    const a = 1 / Math.max(Math.abs(cos) / w, Math.abs(sin) / h);
    x = cx + a * cos;
    y = cy + a * sin;
  }
  return { x, y };
}

export default function InteractiveEdge({
  id, source, target, data, style, markerEnd
}: EdgeProps) {
  const sourceNode = useInternalNode(source);
  const targetNode = useInternalNode(target);

  if (!sourceNode || !targetNode) return null;

  const COLORS = useTheme();

  const isSelectable = data?.isSelectable as boolean; 
  const isDiscovered = data?.isDiscovered as boolean;
  const isTeased = data?.isTeased as boolean;

  const isVisible = isDiscovered || isTeased;
  const showArrow = targetNode.type !== 'option';

  let color = isSelectable ? COLORS.pathActive : isDiscovered ? COLORS.pathInactive : COLORS.nodeBackgroundUndiscovered;

  const sxCenter = (sourceNode.internals?.positionAbsolute?.x || sourceNode.position.x) + (sourceNode.measured?.width || 0) / 2;
  const syCenter = (sourceNode.internals?.positionAbsolute?.y || sourceNode.position.y) + (sourceNode.measured?.height || 0) / 2;
  const txCenter = (targetNode.internals?.positionAbsolute?.x || targetNode.position.x) + (targetNode.measured?.width || 0) / 2;
  const tyCenter = (targetNode.internals?.positionAbsolute?.y || targetNode.position.y) + (targetNode.measured?.height || 0) / 2;

  const dx = txCenter - sxCenter;
  const dy = tyCenter - syCenter;

  const isReturnPath = dy < -20; 

  let sx, sy, tx, ty, cx1, cy1, cx2, cy2;

  if (isReturnPath) {
    const isOptionOnRight = dx < 0;
    const loopSize = Math.max(80, Math.abs(dy) * 0.5);

    const targetAngle = isOptionOnRight ? -Math.PI * 0.25 : -Math.PI * 0.75;

    const p1 = getPointOnBoundary(sourceNode, isOptionOnRight ? 0 : Math.PI);
    sx = p1.x; sy = p1.y;
    
    const p2 = getPointOnBoundary(targetNode, targetAngle);
    tx = p2.x; ty = p2.y;

    cx1 = sx + (isOptionOnRight ? loopSize : -loopSize); cy1 = sy - loopSize * 0.2;
    cx2 = tx + Math.cos(targetAngle) * loopSize; cy2 = ty + Math.sin(targetAngle) * loopSize;

  } else {
    let exitAngle;

    if (dx < -100) {
      exitAngle = Math.PI;
    } else if (dx > 100) {
      exitAngle = 0;      
    } else {
      const rawAngle = Math.atan2(dy, dx);
      exitAngle = Math.max(Math.PI * 0.35, Math.min(Math.PI * 0.65, rawAngle));
    }

    const p1 = getPointOnBoundary(sourceNode, exitAngle);
    sx = p1.x; sy = p1.y;

    const p2 = getPointOnBoundary(targetNode, -Math.PI / 2);
    tx = p2.x; ty = p2.y;

    const pull = Math.max(50, Math.abs(dy) * 0.4);

    cx1 = sx + Math.cos(exitAngle) * pull; 
    cy1 = sy + Math.sin(exitAngle) * pull;
    
    cx2 = tx; cy2 = ty - pull;
  }

  const edgePath = `M ${sx} ${sy} C ${cx1} ${cy1} ${cx2} ${cy2} ${tx} ${ty}`;

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
        <linearGradient id={`gradient-${id}`} gradientUnits="userSpaceOnUse" x1={sx} y1={sy} x2={tx} y2={ty}>
          <stop offset="100%" stopColor={color} />
        </linearGradient>

        {showArrow && (
          <marker id={`arrow-${id}`} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill={color} style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.7s ease, fill 0.3s ease' }} />
          </marker>
        )}
      </defs>
      <BaseEdge path={edgePath} markerEnd={showArrow ? `url(#arrow-${id})` : undefined} style={edgeStyle} />
    </>
  );
}