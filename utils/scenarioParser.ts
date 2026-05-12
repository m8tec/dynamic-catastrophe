import { Node, Edge } from '@xyflow/react';
import { ScenarioNode } from '@/types/scenario';

export function parseScenarioToFlow(aiSteps: ScenarioNode[]) {
  const nodes: Node[] = [];
  const edges: Edge[] = [];
  
  if (!Array.isArray(aiSteps)) return { nodes, edges };

  aiSteps.forEach((step) => {
    nodes.push({
      id: step.id,
      type: step.type || 'diamond',
      position: { x: 0, y: 0 },
      data: { label: step.text || '...' },
    });

    if (!step.options || !Array.isArray(step.options)) return;

    step.options.forEach((opt, index) => {
      const isHiddenOption = 
        opt.text.toLowerCase() === "weiter" || 
        opt.text.toLowerCase() === "zurück" || 
        opt.text.trim() === "";

      if (isHiddenOption) {
        if (opt.nextId) {
          edges.push({
            id: `e-${step.id}-to-${opt.nextId}`,
            source: step.id,
            target: opt.nextId,
            type: 'interactive',
          });
        }
      } else {
        const optNodeId = `${step.id}-opt-${index}`;

        nodes.push({
          id: optNodeId,
          type: 'option',
          position: { x: 0, y: 0 },
          data: { label: opt.text },
        });

        edges.push({
          id: `e-${step.id}-to-${optNodeId}`,
          source: step.id,
          target: optNodeId,
          type: 'interactive',
        });
        
        if (opt.nextId) {
          edges.push({
            id: `e-${optNodeId}-to-${opt.nextId}`,
            source: optNodeId,
            target: opt.nextId,
            type: 'interactive',
          });
        }
      }
    });
  });

  return { nodes, edges };
}