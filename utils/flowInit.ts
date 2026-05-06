import { Node, Edge } from '@xyflow/react';

export const initializeFlowState = (nodes: Node[], edges: Edge[]) => {
  if (nodes.length === 0) return { nodes, edges };

  const startNode = [...nodes].sort((a, b) => 
    a.id.localeCompare(b.id, undefined, { numeric: true })
  )[0];

  const startNodeId = startNode.id;

  const selectableNodeIds = edges
    .filter((edge) => edge.source === startNodeId)
    .map((edge) => edge.target);

  const teasedNodeIds = edges
    .filter((edge) => selectableNodeIds.includes(edge.source))
    .map((edge) => edge.target);

  const initializedNodes = nodes.map((node) => {
    const isStart = node.id === startNodeId;
    const isNext = selectableNodeIds.includes(node.id);
    const isTeased = teasedNodeIds.includes(node.id);
    
    return {
      ...node,
      data: {
        ...node.data,
        isActive: isStart,
        isSelectable: isNext,
        isDiscovered: isStart || isNext, 
        isTeased: !isStart && !isNext && isTeased,
        label: isStart && node.data.targetLabel 
               ? node.data.targetLabel 
               : (node.data.label || "")
      },
    };
  });

  const initializedEdges = edges.map((edge) => {
    const isFromStart = edge.source === startNodeId;
    const isFromNext = selectableNodeIds.includes(edge.source);

    return {
      ...edge,
      data: {
        ...edge.data,
        isSelectable: isFromStart,
        isDiscovered: isFromStart,
        isTeased: !isFromStart && isFromNext,
        isClicked: false,
        isRevealed: false,
      },
    };
  });

  return { nodes: initializedNodes, edges: initializedEdges };
};