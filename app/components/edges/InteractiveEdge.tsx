import { BaseEdge, EdgeProps, useInternalNode } from '@xyflow/react';
import { COLORS } from '@/app/constants/theme';

// Diese Funktion berechnet den EXAKTEN Punkt auf der Außenkante der Node, 
// in die Richtung des angegebenen Winkels (in Radiant).
function getPointOnBoundary(node: any, angle: number) {
  const w = (node.measured?.width || node.width || 0) / 2;
  const h = (node.measured?.height || node.height || 0) / 2;
  const cx = (node.internals?.positionAbsolute?.x || node.position.x) + w;
  const cy = (node.internals?.positionAbsolute?.y || node.position.y) + h;

  const cos = Math.cos(angle);
  const sin = Math.sin(angle);

  let x, y;
  if (node.type === 'diamond') {
    // Rauten-Grenze (Raute wird mathematisch perfekt nachgezeichnet)
    const a = 1 / (Math.abs(cos) / w + Math.abs(sin) / h);
    x = cx + a * cos;
    y = cy + a * sin;
  } else if (node.type === 'circle' || node.type === 'cloud') {
    // Kreis-Grenze
    const a = 1 / Math.sqrt(Math.pow(cos / w, 2) + Math.pow(sin / h, 2));
    x = cx + a * cos;
    y = cy + a * sin;
  } else {
    // Rechteck-Grenze (Option Node)
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

    if (isOptionOnRight) {
      // leave source on the RIGHT edge (angle 0)
      const p1 = getPointOnBoundary(sourceNode, 0);
      sx = p1.x; sy = p1.y;
      
      // enter target on the UPPER RIGHT edge (angle -45 degrees)
      const p2 = getPointOnBoundary(targetNode, -Math.PI * 0.25);
      tx = p2.x; ty = p2.y;

      // Control points pull the curve far to the right
      cx1 = sx + loopSize; cy1 = sy - loopSize * 0.2;
      cx2 = tx + loopSize; cy2 = ty - loopSize * 0.2;
    } else {
      // leave source on the LEFT edge (angle 180 degrees)
      const p1 = getPointOnBoundary(sourceNode, Math.PI);
      sx = p1.x; sy = p1.y;
      
      // enter target on the UPPER LEFT edge (angle -135 degrees)
      const p2 = getPointOnBoundary(targetNode, -Math.PI * 0.75);
      tx = p2.x; ty = p2.y;

      // Control points pull the curve far to the left
      cx1 = sx - loopSize; cy1 = sy - loopSize * 0.2;
      cx2 = tx - loopSize; cy2 = ty - loopSize * 0.2;
    }
  } else {
    // === FORWARD PATH ===
    
    // find point on source
    const angleToTarget = Math.atan2(dy, dx);
    const p1 = getPointOnBoundary(sourceNode, angleToTarget);
    sx = p1.x; sy = p1.y;

    // find point on target
    const angleToSource = Math.atan2(-dy, -dx);
    const p2 = getPointOnBoundary(targetNode, angleToSource);
    tx = p2.x; ty = p2.y;

    // Control points pull the curve away from the straight line
    const pull = Math.max(40, Math.abs(dy) * 0.4);
    cx1 = sx; cy1 = sy + pull;
    cx2 = tx; cy2 = ty - pull;
  }

  // draw path as cubic bezier
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
          <marker
            id={`arrow-${id}`}
            viewBox="0 0 10 10"
            refX="9" 
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