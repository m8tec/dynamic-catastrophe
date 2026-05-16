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

import CircleNode from "@/components/flow/nodes/CircleNode";
import CloudNode from "@/components/flow/nodes/CloudNode";
import CurvedNode from "@/components/flow/nodes/CurvedNode";
import DefinitionNode from "@/components/flow/nodes/DefinitionNode";
import DiamondNode from "@/components/flow/nodes/DiamondNode";
import OptionNode from "@/components/flow/nodes/OptionNode";
import OptionsNode from "@/components/flow/nodes/OptionsNode";
import PlaceholderNode from "@/components/flow/nodes/PlaceholderNode";
import QuoteNode from "@/components/flow/nodes/QuoteNode";
import RectangleNode from "@/components/flow/nodes/RectangleNode";

import InteractiveEdge from "./edges/InteractiveEdge";

import ScenarioSidebar from "@/components/flow/sidebar/ScenarioSidebar";

import { ThemeProvider } from "@/contexts/ThemeContext";
import { THEMES, ThemeName } from "@/constants/theme";

import { initializeFlowState } from "@/utils/flowInit";
import { getLayoutedElements } from "@/utils/layout";

const nodeTypes = {
  circle: CircleNode,
  cloud: CloudNode,
  curved: CurvedNode,
  definition: DefinitionNode,
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
  description: string;
  initialNodes: Node[];
  initialEdges: Edge[];
  isDynamicMode?: boolean;
  prompt?: string;
  rawScenario?: any[];
  startNodeId?: string;
  teaserImage?: string;
  theme?: ThemeName;
  title: string;
}

export default function FlowCanvas({
  description,
  initialNodes,
  initialEdges,
  isDynamicMode = false,
  prompt,
  rawScenario,
  startNodeId,
  teaserImage,
  theme,
  title,
}: FlowCanvasProps) {
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);

  const [isMounted, setIsMounted] = useState(false);

  const [rfInstance, setRfInstance] = useState<ReactFlowInstance | null>(null);
  const [hasCentered, setHasCentered] = useState(false);

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
  }, [initialNodes, initialEdges, startNodeId]);

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

  const handleCenterStart = useCallback(() => {
    if (!rfInstance || nodes.length === 0) return;

    const targetNodeId = startNodeId || nodes[0]?.id;
    const targetNode = nodes.find((n) => n.id === targetNodeId);
    const sidebarOffset = 160;

    if (targetNode && targetNode.position) {
      setTimeout(() => {
        rfInstance.setCenter(
          targetNode.position.x + 112 - sidebarOffset,
          targetNode.position.y + 32,
          { zoom: 0.7, duration: 1000 },
        );
      }, 50);
    }
  }, [rfInstance, nodes, startNodeId]);

  const handleExport = useCallback(() => {
    const dataToExport = {
      title,
      description,
      prompt,
      theme: theme || "default",
      scenario: rawScenario || [],
    };

    const jsonString = JSON.stringify(dataToExport, null, 2);

    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const fileName = title
      ? `${title
          .toLowerCase()
          .replace(/ä/g, "ae")
          .replace(/ö/g, "oe")
          .replace(/ü/g, "ue")
          .replace(/ß/g, "ss")
          .replace(/[^a-z0-9]+/g, "-")}.json`
      : "scenario-export.json";

    const link = document.createElement("a");
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }, [title, theme, nodes, edges]);

  const handleRevealAll = useCallback(() => {
    setNodes((nds) =>
      nds.map((n) => ({
        ...n,
        hidden: false,
        data: { ...n.data, isDiscovered: true },
      })),
    );
    setEdges((eds) =>
      eds.map((e) => ({
        ...e,
        hidden: false,
        data: { ...(e.data || {}), isDiscovered: true },
      })),
    );
  }, []);

  const handleReset = useCallback(() => {
    if (!initialNodes || initialNodes.length === 0) return;

    const { nodes: preparedNodes, edges: preparedEdges } = initializeFlowState(
      initialNodes,
      initialEdges,
      startNodeId,
    );
    const { layoutedNodes, layoutedEdges } = getLayoutedElements(
      preparedNodes,
      preparedEdges,
    );

    setNodes(layoutedNodes);
    setEdges(layoutedEdges);

    handleCenterStart();
  }, [initialNodes, initialEdges, startNodeId, handleCenterStart]);

  useEffect(() => {
    if (hasCentered || !rfInstance || nodes.length === 0) return;

    handleCenterStart();
    setHasCentered(true);
  }, [rfInstance, nodes, hasCentered, handleCenterStart]);

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
        <ScenarioSidebar
            isDynamic={isDynamicMode}
            onCenterStart={handleCenterStart}
            onExport={handleExport}
            onRevealAll={handleRevealAll}
            onReset={handleReset}
            title={title}
            description={description}
            teaserImage={teaserImage}
            prompt={prompt}
          />

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
