"use client";

import { useEffect, useState } from "react";
import FlowCanvas from "@/components/flow/FlowCanvas";
import { parseScenarioToFlow } from "@/utils/scenarioParser";
import { ThemeName } from "@/constants/theme";

interface CustomScenarioData {
  title: string;
  description: string;
  prompt?: string;
  theme?: ThemeName;
  scenario: any[];
}

export default function CustomPlayPage() {
  const [data, setData] = useState<CustomScenarioData | null>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem("customScenario");
    if (stored) {
      setData(JSON.parse(stored));
    }
  }, []);

  if (!data) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-[#121212] text-neutral-400">
        Lade Szenario...
      </div>
    );
  }
  
  const { nodes, edges } = parseScenarioToFlow(data.scenario);

  return (
    <FlowCanvas 
      title={data.title}
      description={data.description} 
      prompt={data.prompt} 
      theme={data.theme} 
      rawScenario={data.scenario} 
      initialNodes={nodes}
      initialEdges={edges}
      startNodeId={nodes[0]?.id || "q1"}
    />
  );
}