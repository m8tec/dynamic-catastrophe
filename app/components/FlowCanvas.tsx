"use client";

import { useState, useCallback } from 'react';
import { ReactFlow, Controls, Background, applyNodeChanges, applyEdgeChanges, Node, Edge, NodeChange, EdgeChange } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import CircleNode from './nodes/CircleNode';
import CloudNode from './nodes/CloudNode';
import DiamondNode from './nodes/DiamondNode';
import PlaceholderNode from './nodes/PlaceholderNode';
import RectangleNode from './nodes/RectangleNode';
import InteractiveEdge from './edges/InteractiveEdge';

import { COLORS } from '@/app/constants/theme';

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

const initialNodes: Node[] = [
  { 
    id: '1', 
    type: 'diamond', 
    position: { x: 0, y: 0 }, 
    data: { label: 'Ist der Klimawandel real?', isActive: true } 
  },
  { 
    id: '2', 
    type: 'circle', 
    position: { x: 0, y: 0 }, 
    data: { 
        isActive: false,
        targetLabel: 'Verdrängst du da vielleicht etwas?' 
    }
  },
  { 
    id: '3', 
    type: 'cloud', 
    position: { x: 0, y: 0 }, 
    data: { 
        isActive: false,
        targetLabel: 'Ich verdränge gar nichts!' 
    }
  },
];

const initialEdges: Edge[] = [
  {
    id: 'e1-2',
    source: '1',
    target: '2',
    type: 'interactive',
    data: { label: 'Nö!', isClicked: false, isSelectable: true },
    animated: true,
  },
  {
    id: 'e1-1',
    source: '1',
    target: '1',
    sourceHandle: 'right',
    targetHandle: 'top',
    type: 'interactive',
    data: { label: 'Ich versuche nicht daran zu denken', isClicked: false, isSelectable: true },
  },
  {
    id: 'e2-3',
    source: '2',
    target: '3',
    type: 'interactive',
    data: { 
      isClicked: false, 
      isSelectable: false 
    },
  },
];

const { layoutedNodes, layoutedEdges } = getLayoutedElements(initialNodes, initialEdges);

export default function FlowCanvas() {
  const [nodes, setNodes] = useState<Node[]>(layoutedNodes);
  const [edges, setEdges] = useState<Edge[]>(layoutedEdges);

  const onNodesChange = useCallback((changes: NodeChange[]) => setNodes((nds) => applyNodeChanges(changes, nds)), []);
  const onEdgesChange = useCallback((changes: EdgeChange[]) => setEdges((eds) => applyEdgeChanges(changes, eds)), []);

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