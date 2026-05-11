import * as climateData from '@/data/scenarios/climate-change';
import { normalizeStaticNodes, normalizeStaticEdges } from '@/types/static';

export function getStaticScenario(scenarioId?: string) {
  if (scenarioId === 'climate-change') {
    return {
      nodes: normalizeStaticNodes((climateData as any).nodes || []),
      edges: normalizeStaticEdges((climateData as any).edges || []),
      metadata: climateData.metadata,
    };
  }
  
  return null;
}