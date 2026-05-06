import dagre from 'dagre';
import { Node, Edge } from '@xyflow/react';

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const getNodeDimensions = (node: Node) => {
    switch (node.type) {
        case 'option':
            return { width: 180, height: 40 };
        default:
            return { width: 160, height: 160 };
    }
};

export const getLayoutedElements = (nodes: Node[], edges: Edge[], direction = 'TB') => {
  dagreGraph.setGraph({ 
    rankdir: direction,
    ranksep: 80,   // Vertikaler Abstand zwischen den Ebenen (Pfeillänge nach unten)
    nodesep: 40,   // Horizontaler Abstand zwischen zwei Knoten, die nebeneinander liegen
    edgesep: 20,   // Abstand zwischen nah beieinander liegenden Linien
  });

  nodes.forEach((node) => {
    const { width, height } = getNodeDimensions(node);

    dagreGraph.setNode(node.id, { width, height });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  const layoutedNodes = nodes.map((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    
    const { width, height } = getNodeDimensions(node);

    return {
      ...node,
      position: {
        x: nodeWithPosition.x - width / 2,
        y: nodeWithPosition.y - height / 2,
      },
    };
  });

  return { layoutedNodes, layoutedEdges: edges };
};