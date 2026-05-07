"use client";

import { useState, useEffect } from "react";
import { Node, Edge } from "@xyflow/react";
import FlowCanvas from "./FlowCanvas";
import LoadingScreen from "./LoadingScreen";

export default function DynamicFlowLoader({ topic }: { topic: string }) {
  const [isLoading, setIsLoading] = useState(true);
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchAiScenario() {
      try {
        // const res = await fetch('/api/generate', { method: 'POST', body: JSON.stringify({ topic }) });
        // const data = await res.json();

        await new Promise((resolve) => setTimeout(resolve, 8000));

        if (!isMounted) return;

        // Mock
        setNodes([
          { id: "1", type: "diamond", position: { x: 0, y: 0 }, data: { label: `Ist ${topic} unser Ende?` } },
          { id: "opt-1", type: "rectangle", position: { x: 0, y: 0 }, data: { label: "Ziemlich sicher." } },
        ]);
        setEdges([
          { id: "e1", source: "1", target: "opt-1", type: "interactive" }
        ]);
        
        setIsLoading(false);
      } catch (err) {
        if (isMounted) {
          setError("Die Verbindung zum Abgrund ist abgerissen. Bitte versuche es erneut.");
          setIsLoading(false);
        }
      }
    }

    fetchAiScenario();

    return () => { isMounted = false; };
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

  return <FlowCanvas initialNodes={nodes} initialEdges={edges} isDynamicMode={true} />;
}