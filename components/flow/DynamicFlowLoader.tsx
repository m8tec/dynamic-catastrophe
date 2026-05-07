"use client";

import { useState, useEffect, useRef } from "react";
import { Node, Edge } from "@xyflow/react";
import FlowCanvas from "./FlowCanvas";
import LoadingScreen from "./LoadingScreen";
import { parseAiToFlow } from "@/utils/aiGraphParser";

export default function DynamicFlowLoader({ topic }: { topic: string }) {
  const [isLoading, setIsLoading] = useState(true);
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);
  const [error, setError] = useState<string | null>(null);

  const hasFetched = useRef(false);

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;

    async function fetchAiScenario() {
      try {
        const res = await fetch('/api/generate', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ topic })
        });

        if (!res.ok) throw new Error(`API Fehler: ${res.status}`);

        const data = await res.json();
        console.log("Frontend empfängt:", data);

        if (data.scenario) {
          const { nodes: flowNodes, edges: flowEdges } = parseAiToFlow(data.scenario);
          setNodes(flowNodes);
          setEdges(flowEdges);
          setIsLoading(false);
        } else {
          throw new Error("KI hat kein 'scenario' Array geliefert.");
        }

      } catch (err) {
        console.error("Fetch Error:", err);
        setError("Die Verbindung zum Abgrund ist abgerissen. Bitte versuche es erneut.");
        setIsLoading(false);
      }
    }

    fetchAiScenario();
  }, [topic]);

  if (error) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-[#121212]">
        <p className="text-red-500 font-vesper text-2xl">{error}</p>
      </div>
    );
  }

  if (isLoading) {
    return <LoadingScreen topic={topic} />;
  }
  
  return <FlowCanvas initialNodes={nodes} initialEdges={edges} isDynamicMode={true} startNodeId="q1" />;
}