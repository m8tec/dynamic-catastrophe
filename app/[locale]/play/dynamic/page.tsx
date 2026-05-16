"use client";

import { useEffect, useState } from "react";
import FlowCanvas from "@/components/flow/FlowCanvas";
import LoadingError from "@/components/play/LoadingError";
import { parseScenarioToFlow } from "@/utils/scenarioParser";
import { ThemeName } from "@/constants/theme";
import { ScenarioNode } from "@/types/scenario";

interface DynamicData {
  title: string;
  description: string;
  theme: ThemeName;
  scenario: ScenarioNode[];
  prompt?: string;
}

export default function DynamicPlayPage() {
  const [data, setData] = useState<DynamicData | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const stored = sessionStorage.getItem("dynamicScenario");
    if (stored) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setData(JSON.parse(stored));
    }
    setIsMounted(true);
  }, []);

  if (!isMounted) return <div className="w-full h-screen bg-[#121212]" />;

  if (!data) {
    return (
      <LoadingError
        title="Kein Szenario gefunden"
        message="Der Äther ist leer. Bitte kehre zur Startseite zurück und generiere eine neue Katastrophe."
      />
    );
  }

  const { nodes, edges } = parseScenarioToFlow(data.scenario);
  
  return (
    <main className="w-full h-screen bg-[#121212]">
      <FlowCanvas
        title={data.title}
        description={data.description}
        prompt={data.prompt}
        theme={data.theme}
        rawScenario={data.scenario}
        initialNodes={nodes}
        initialEdges={edges}
        isDynamicMode={true}
        startNodeId={nodes[0]?.id || "q1"}
      />
    </main>
  );
}