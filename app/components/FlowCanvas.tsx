"use client";

import { useState, useCallback, useEffect } from 'react';
import { ReactFlow, Controls, Background, applyNodeChanges, applyEdgeChanges, Node, Edge, NodeChange, EdgeChange } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import CircleNode from './nodes/CircleNode';
import CloudNode from './nodes/CloudNode';
import DiamondNode from './nodes/DiamondNode';
import PlaceholderNode from './nodes/PlaceholderNode';
import RectangleNode from './nodes/RectangleNode';
import InteractiveEdge from './edges/InteractiveEdge';

import { COLORS } from '@/app/constants/theme';

import { initializeFlowState } from '@/utils/flowInit';
import { getLayoutedElements } from '@/utils/layout';

const nodeTypes = {
  circle: CircleNode,
  cloud: CloudNode,
  diamond: DiamondNode,
  placeholder: PlaceholderNode,
  rectangle: RectangleNode,
};

const edgeTypes = {
  interactive: InteractiveEdge,
};

interface FlowCanvasProps {
  initialNodes: Node[];
  initialEdges: Edge[];
  startNodeId?: string;
  isDynamicMode?: boolean;
}

export default function FlowCanvas({ initialNodes, initialEdges, startNodeId, isDynamicMode = false }: FlowCanvasProps) {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);
  
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (initialNodes && initialNodes.length > 0) {
      const { nodes: preparedNodes, edges: preparedEdges } = initializeFlowState(initialNodes, initialEdges);
      const { layoutedNodes, layoutedEdges } = getLayoutedElements(preparedNodes, preparedEdges);
      
      setNodes(layoutedNodes);
      setEdges(layoutedEdges);
    }
  }, [initialNodes, initialEdges]);

  const onNodesChange = useCallback((changes: NodeChange[]) => setNodes((nds) => applyNodeChanges(changes, nds)), []);
  const onEdgesChange = useCallback((changes: EdgeChange[]) => setEdges((eds) => applyEdgeChanges(changes, eds)), []);

  if (!isMounted) {
    return <div className="w-full h-screen" style={{ backgroundColor: COLORS.background }} />;
  }

  return (
    <div className="w-full h-screen" style={{ backgroundColor: COLORS.background }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
        fitViewOptions={{ padding: 0.5 }}
        nodesDraggable={false} 
        nodesConnectable={false}
      >
        <Background color={COLORS.dots} gap={16} />
        <Controls className="bg-neutral-800 border-neutral-700 fill-neutral-300" />
      </ReactFlow>
    </div>
  );
}