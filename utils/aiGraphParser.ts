import { Node, Edge } from '@xyflow/react';

export interface AiStep {
  id: string;
  type: 'diamond' | 'circle' | 'cloud';
  text: string;
  options: {
    text: string;
    nextId: string;
  }[];
}

export function parseAiToFlow(aiSteps: AiStep[]) {
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

      edges.push({
        id: `e-${optNodeId}-to-${opt.nextId}`,
        source: optNodeId,
        target: opt.nextId || 'q1', 
        type: 'interactive',
      });
    });
  });

  return { nodes, edges };
}