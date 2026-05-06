import { Node, Edge } from '@xyflow/react';

export const initializeFlowState = (nodes: Node[], edges: Edge[]) => {
  if (nodes.length === 0) return { nodes, edges };

  const startNode = [...nodes].sort((a, b) => 
    a.id.localeCompare(b.id, undefined, { numeric: true })
  )[0];

  const startNodeId = startNode.id;
  console.log("Startknoten ID:", startNodeId);

  const selectableNodeIds = edges
    .filter((edge) => edge.source === startNodeId)
    .map((edge) => edge.target);

  const initializedNodes = nodes.map((node) => ({
    ...node,
    data: {
      ...node.data,
      isActive: node.id === startNodeId,
      isSelectable: selectableNodeIds.includes(node.id),
      label: node.id === startNodeId && node.data.targetLabel 
             ? node.data.targetLabel 
             : (node.data.label || "")
    },
  }));

  const initializedEdges = edges.map((edge) => ({
    ...edge,
    data: {
      ...edge.data,
      isSelectable: edge.source === startNodeId,
      isClicked: false,
      isRevealed: false,
    },
  }));

  return { nodes: initializedNodes, edges: initializedEdges };
};