import { BaseEdge, EdgeLabelRenderer, EdgeProps, getBezierPath, useReactFlow } from '@xyflow/react';
import { COLORS } from '@/app/constants/theme';

export default function InteractiveEdge({
  id, sourceX, sourceY, targetX, targetY, sourcePosition, targetPosition, data, style, markerEnd, source, target
}: EdgeProps) {
  const [edgePath, labelX, labelY] = getBezierPath({ sourceX, sourceY, sourcePosition, targetX, targetY, targetPosition });
  
  const { setNodes, setEdges } = useReactFlow();

  const isClicked = data?.isClicked as boolean;       
  const isRevealed = data?.isRevealed as boolean;     
  const isSelectable = data?.isSelectable as boolean; 

  const hasLabel = Boolean(data?.label);

  let topColor: string = COLORS.pathInactive;
  let bottomColor: string = COLORS.pathInactive; 

  if (!hasLabel) {
      if (isRevealed || isSelectable) {
          topColor = COLORS.pathActive;
          bottomColor = COLORS.pathActive;
      }
  } else {
      if (isRevealed) {
          topColor = COLORS.pathInactive;
          bottomColor = COLORS.pathActive;
      } else if (isSelectable) {
          topColor = COLORS.pathActive;
          bottomColor = COLORS.pathInactive;
      }
  }

  const edgeStyle = {
    ...style,
    stroke: `url(#gradient-${id})`,
    strokeWidth: (isSelectable || isRevealed || isClicked) ? 2.5 : 2,
    transition: 'stroke-width 0.3s ease',
  };

  const onEdgeClick = () => {
    if (isRevealed || isClicked) return;

    setNodes((nodes) => nodes.map(node => {
        let newData = { ...node.data };

        if (node.id === target) {
            newData.label = newData.targetLabel || 'Generiere...'; 
            newData.isActive = false;
            newData.isSelectable = true;
            return { ...node, data: newData };
        }
        if (node.id === source) {
            newData.isActive = false;
            newData.isSelectable = false;
            return { ...node, data: newData };
        }
        return node;
    }));

    setEdges((edges) => edges.map(edge => {
        let newData = { ...edge.data };

        if (edge.id === id) {
            newData.isRevealed = true;
            newData.isSelectable = false;
            return { ...edge, data: newData, animated: false };
        } 
        
        if (edge.source === source) {
            newData.isSelectable = false;
            return { ...edge, data: newData };
        }

        return edge;
    }));
  };

  let buttonClasses = "px-4 py-1.5 text-sm font-medium transition-all shadow-lg ";
  
  if (isClicked) {
      buttonClasses += "text-neutral-500 shadow-none cursor-default";
  } else if (isRevealed) {
      buttonClasses += "text-white cursor-default";
  } else if (isSelectable) {
      buttonClasses += "text-red-500 cursor-pointer";
  } else {
      buttonClasses += "text-neutral-600 cursor-default hidden"; 
  }

  return (
    <>
      <defs>
        <linearGradient id={`gradient-${id}`} gradientUnits="userSpaceOnUse" x1={sourceX} y1={sourceY} x2={targetX} y2={targetY}>
          <stop offset="50%" stopColor={topColor} />
          <stop offset="50%" stopColor={bottomColor} />
        </linearGradient>
      </defs>

      <BaseEdge path={edgePath} markerEnd={markerEnd} style={edgeStyle} />
      
      {hasLabel && (
        <EdgeLabelRenderer>
          <div
            style={{
              position: 'absolute',
              transform: `translate(-50%, -50%) translate(${labelX}px, ${labelY}px)`,
              pointerEvents: 'all',
              zIndex: (isRevealed || isClicked) ? 0 : 1000,
            }}
            className="nodrag nopan"
          >
            <button disabled={isRevealed || isClicked} className={buttonClasses} onClick={onEdgeClick}
            style={{
              backgroundColor: isRevealed ? COLORS.optionBackgroundActive : COLORS.optionBackgroundInactive,
              color: isRevealed ? COLORS.optionTextActive : (isSelectable ? COLORS.optionTextNext : COLORS.optionTextDefault),
              border: isSelectable ? `1px solid ${COLORS.nodeBackgroundActive}` : 'none'
            }}
            >
              {data?.label as string}
            </button>
          </div>
        </EdgeLabelRenderer>
      )}
    </>
  );
}