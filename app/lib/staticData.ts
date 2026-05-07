import * as climateData from '@/app/data/scenarios/climate-change';

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