import * as climateData from '@/data/scenarios/climate-change';

export function getStaticScenario(scenarioId?: string) {
  if (scenarioId === 'climate-change') {
    return { 
      nodes: climateData.nodes, 
      edges: climateData.edges, 
      metadata: climateData.metadata
    };
  }
  
  return null;
}