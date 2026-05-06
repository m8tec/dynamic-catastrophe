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

const rawNodes: Node[] = [
  { id: '1', type: 'diamond', position: { x: 0, y: 0 }, data: { label: 'Ist der Klimawandel real?' } },
  { id: 'opt-no', type: 'rectangle', position: { x: 0, y: 0 }, data: { label: 'Nö!' } },
  { id: 'opt-yes', type: 'rectangle', position: { x: 0, y: 0 }, data: { label: 'Ja!' } },
  { id: 'opt-ignore', type: 'rectangle', position: { x: 0, y: 0 }, data: { label: 'Ich versuche, nicht daran zu denken' } },
  { id: 'opt-ignore2', type: 'rectangle', position: { x: 0, y: 0 }, data: { label: 'Ich versuche, nicht daran zu denken' } },
  { id: '2', type: 'circle', position: { x: 0, y: 0 }, data: { label: 'Verdrängst du da vielleicht etwas?' } },
  { id: 'opt-hmmm', type: 'rectangle', position: { x: 0, y: 0 }, data: { label: 'Hmmm...' } },
  { id: 'opt-was', type: 'rectangle', position: { x: 0, y: 0 }, data: { label: 'Klima was?' } },
  { id: '3', type: 'cloud', position: { x: 0, y: 0 }, data: { label: 'Ich verdränge gar nichts!' } },
  { id: '4', type: 'diamond', position: { x: 0, y: 0 }, data: { label: 'Sind wir am Arsch?' } },
  { id: 'opt-wen-meinst-du', type: 'rectangle', position: { x: 0, y: 0 }, data: { label: 'Wenn meinst du mit >>wir<<?' } },
  { id: 'opt-noch-nicht', type: 'rectangle', position: { x: 0, y: 0 }, data: { label: 'Noch nicht, aber...' } },
];

const rawEdges: Edge[] = [
  { id: 'e1-opt-no', source: '1', target: 'opt-no', type: 'interactive' },
  { id: 'e1-opt-yes', source: '1', target: 'opt-yes', type: 'interactive' },
  { id: 'e1-opt-ignore', source: '1', target: 'opt-ignore', type: 'interactive' },
  { id: 'e1-opt-ignore2', source: '4', target: 'opt-ignore2', type: 'interactive' },
  { id: 'e1-opt-ignore22', source: 'opt-ignore2', target: '4', type: 'interactive' },
  { id: 'e-opt-2', source: 'opt-no', target: '2', type: 'interactive' },
  { id: 'e-opt-3', source: 'opt-yes', target: '4', type: 'interactive' },
  { id: 'e2-3', source: '2', target: '3', type: 'interactive' },
  { id: 'e-ignore-1', source: 'opt-ignore', target: '1', type: 'interactive' },
  { id: 'efwp', source: '2', target: 'opt-hmmm', type: 'interactive' },
  { id: 'e-hmmm-4', source: 'opt-hmmm', target: '1', type: 'interactive' },
  { id: 'e-opt-was', source: '1', target: 'opt-was', type: 'interactive' },
  { id: 'e-opt-was2', source: 'opt-was', target: '1', type: 'interactive' },
  { id: 'e-opt-wen-meinst-du', source: '4', target: 'opt-wen-meinst-du', type: 'interactive' },
  { id: 'e-opt-noch-nicht', source: '4', target: 'opt-noch-nicht', type: 'interactive' },
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
    <div className="w-full h-screen bg-neutral-900" style={{ backgroundColor: COLORS.background }}>
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