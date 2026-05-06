"use client";

import { useState, useCallback, useEffect } from 'react';
import { ReactFlow, Controls, Background, applyNodeChanges, applyEdgeChanges, Node, Edge, NodeChange, EdgeChange } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import CircleNode from './nodes/CircleNode';
import CloudNode from './nodes/CloudNode';
import DiamondNode from './nodes/DiamondNode';
import OptionNode from './nodes/OptionNode';
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
  option: OptionNode,
  placeholder: PlaceholderNode,
  rectangle: RectangleNode,
};

const edgeTypes = {
  interactive: InteractiveEdge,
};

const rawNodes: Node[] = [
  { id: '1', type: 'diamond', position: { x: 0, y: 0 }, data: { label: 'Ist der Klimawandel real?' } },
  { id: 'opt-no', type: 'option', position: { x: 0, y: 0 }, data: { label: 'Nö!' } },
  { id: 'opt-ignore', type: 'option', position: { x: 0, y: 0 }, data: { label: 'Ich versuche nicht daran zu denken' } },
  { id: '2', type: 'circle', position: { x: 0, y: 0 }, data: { label: 'Verdrängst du da vielleicht etwas?' } },
  { id: '3', type: 'cloud', position: { x: 0, y: 0 }, data: { label: 'Ich verdränge gar nichts!' } },
];

const rawEdges: Edge[] = [
  { id: 'e1-opt-no', source: '1', target: 'opt-no', type: 'interactive' },
  { id: 'e1-opt-ignore', source: '1', target: 'opt-ignore', type: 'interactive' },
  { id: 'e-opt-2', source: 'opt-no', target: '2', type: 'interactive' },
  { id: 'e2-3', source: '2', target: '3', type: 'interactive' },
  { id: 'e-ignore-1', source: 'opt-ignore', target: '1', type: 'interactive' },
];

const { nodes: preparedNodes, edges: preparedEdges } = initializeFlowState(rawNodes, rawEdges);
const { layoutedNodes, layoutedEdges } = getLayoutedElements(preparedNodes, preparedEdges);

export default function FlowCanvas() {
  const [nodes, setNodes] = useState<Node[]>(layoutedNodes);
  const [edges, setEdges] = useState<Edge[]>(layoutedEdges);
  
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const onNodesChange = useCallback((changes: NodeChange[]) => setNodes((nds) => applyNodeChanges(changes, nds)), []);
  const onEdgesChange = useCallback((changes: EdgeChange[]) => setEdges((eds) => applyEdgeChanges(changes, eds)), []);
  
  if (!isMounted) {
    return <div className="w-full h-screen bg-neutral-900" />;
  }

  return (
    <div className="w-full h-screen bg-neutral-900">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
        fitViewOptions={{ padding: 0.5 }}
      >
        <Background color={COLORS.dots} gap={16} />
        <Controls className="bg-neutral-800 border-neutral-700 fill-neutral-300" />
      </ReactFlow>
    </div>
  );
}