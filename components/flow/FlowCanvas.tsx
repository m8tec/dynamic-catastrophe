"use client";

import { useState, useCallback, useEffect } from "react";
import {
  ReactFlow,
  Controls,
  Background,
  applyNodeChanges,
  applyEdgeChanges,
  Node,
  Edge,
  NodeChange,
  EdgeChange,
  ReactFlowInstance,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import BorderNode from "@/components/flow/nodes/BorderNode";
import CircleNode from "@/components/flow/nodes/CircleNode";
import CloudNode from "@/components/flow/nodes/CloudNode";
import CurvedNode from "@/components/flow/nodes/CurvedNode";
import DiamondNode from "@/components/flow/nodes/DiamondNode";
import OptionNode from "@/components/flow/nodes/OptionNode";
import OptionsNode from "@/components/flow/nodes/OptionsNode";
import PlaceholderNode from "@/components/flow/nodes/PlaceholderNode";
import QuoteNode from "@/components/flow/nodes/QuoteNode";
import RectangleNode from "@/components/flow/nodes/RectangleNode";

import InteractiveEdge from "./edges/InteractiveEdge";

import ScenarioSidebar, { SidebarData } from '@/components/flow/ScenarioSlider';

import { ThemeProvider } from "@/contexts/ThemeContext";
import { THEMES, ThemeName } from "@/constants/theme";

import { initializeFlowState } from "@/utils/flowInit";
import { getLayoutedElements } from "@/utils/layout";

const nodeTypes = {
  border: BorderNode,
  circle: CircleNode,
  cloud: CloudNode,
  curved: CurvedNode,
  diamond: DiamondNode,
  placeholder: PlaceholderNode,
  option: OptionNode,
  options: OptionsNode,
  rectangle: RectangleNode,
  quote: QuoteNode,
};

const edgeTypes = {
  interactive: InteractiveEdge,
};

interface FlowCanvasProps {
  initialNodes: Node[];
  initialEdges: Edge[];
  startNodeId?: string;
  isDynamicMode?: boolean;
  sidebarData?: SidebarData;
  theme?: ThemeName;
}

export default function FlowCanvas({
  initialNodes,
  initialEdges,
  startNodeId,
  sidebarData,
  theme,
  isDynamicMode = false,
}: FlowCanvasProps) {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);

  const [isMounted, setIsMounted] = useState(false);

  const [rfInstance, setRfInstance] = useState<ReactFlowInstance | null>(null);
  const [hasCentered, setHasCentered] = useState(false); // <-- NEU

  const currentTheme = theme ? THEMES[theme] || THEMES.default : THEMES.default;

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (initialNodes && initialNodes.length > 0) {
      const { nodes: preparedNodes, edges: preparedEdges } =
        initializeFlowState(initialNodes, initialEdges, startNodeId);
      const { layoutedNodes, layoutedEdges } = getLayoutedElements(
        preparedNodes,
        preparedEdges,
      );

      setNodes(layoutedNodes);
      setEdges(layoutedEdges);
    }
  }, [initialNodes, initialEdges]);

  const onNodesChange = useCallback(
    (changes: NodeChange[]) =>
      setNodes((nds) => applyNodeChanges(changes, nds)),
    [],
  );
  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) =>
      setEdges((eds) => applyEdgeChanges(changes, eds)),
    [],
  );

  useEffect(() => {
    if (rfInstance && nodes.length > 0 && !hasCentered) {
      const targetNodeId = startNodeId || nodes[0]?.id;
      const targetNode = nodes.find((n) => n.id === targetNodeId);

      const sidebarOffset = sidebarData ? 160 : 0;

      if (targetNode && targetNode.position) {
        setTimeout(() => {
          rfInstance.setCenter(
            targetNode.position.x + 112 - sidebarOffset,
            targetNode.position.y + 32,
            { zoom: 0.7, duration: 1200 }
          );
          setHasCentered(true);
        }, 100);
      }
    }
  }, [rfInstance, nodes, startNodeId, hasCentered]);

  if (!isMounted) {
    return (
      <div
        className="w-full h-screen"
        style={{ backgroundColor: currentTheme.background }}
      />
    );
  }

  return (
    <ThemeProvider theme={theme || "default"}>
      <div
        className="w-full h-screen relative overflow-hidden"
        style={{ backgroundColor: currentTheme.background }}
      >
        {sidebarData && (
          <ScenarioSidebar data={sidebarData} isDynamic={isDynamicMode} />
        )}

        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onInit={setRfInstance}
          nodeTypes={nodeTypes}
          edgeTypes={edgeTypes}
          nodesDraggable={false}
          nodesConnectable={false}
        >
          <Background color={currentTheme.dots} gap={16} />
          <Controls className="bg-neutral-800 border-neutral-700 fill-neutral-300" />
        </ReactFlow>
      </div>
    </ThemeProvider>
  );
}
