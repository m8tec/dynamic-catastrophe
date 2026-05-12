"use client";

import { useEffect, useState } from "react";
import { nodes as oldNodes, edges as oldEdges } from "@/data/scenarios/climate-change"; 

export default function MigratePage() {
  const [output, setOutput] = useState("Berechne...");

  useEffect(() => {
    const finalNodes: any[] = [];
    const processedIds = new Set<string>();

    const queue = oldNodes.filter(
      (n) => n.type !== "option" && n.type !== "options"
    );

    while (queue.length > 0) {
      const curr = queue.shift()!;
      if (processedIds.has(curr.id)) continue;
      processedIds.add(curr.id);

      const options = [];
      const outgoingEdges = oldEdges.filter((e) => e.source === curr.id);

      for (const edge of outgoingEdges) {
        const targetNode = oldNodes.find((n) => n.id === edge.target);
        if (!targetNode) continue;

        if (targetNode.type === "option" || targetNode.type === "options") {
          const text = targetNode.data.label;
          const targetOutgoingEdges = oldEdges.filter((e) => e.source === targetNode.id);
          
          let nextId: string | undefined = undefined; 

          if (targetOutgoingEdges.length > 0) {
            nextId = targetOutgoingEdges[0].target;
            const nextTargetNode = oldNodes.find((n) => n.id === nextId);

            if (nextTargetNode && (nextTargetNode.type === "option" || nextTargetNode.type === "options")) {
              const modifiedNode = { ...nextTargetNode, type: "rectangle" };
              queue.push(modifiedNode);
            }
          }

          options.push({ text, nextId });
        } else {
          options.push({ text: "Weiter", nextId: targetNode.id });
        }
      }

      finalNodes.push({
        id: curr.id,
        type: curr.type,
        text: curr.data?.label || "",
        options: options,
      });
    }
    
    setOutput(JSON.stringify(finalNodes, null, 2));
  }, []);

  return (
    <div className="p-8 bg-neutral-900 min-h-screen text-green-400 font-mono text-xs overflow-auto">
      <h1 className="text-xl mb-4 text-white">Migration Erfolgreich! Kopiere diesen Array:</h1>
      <pre>{output}</pre>
    </div>
  );
}