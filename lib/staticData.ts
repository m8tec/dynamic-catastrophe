import { data as climateData } from '@/data/scenarios/climate-change';

export function getStaticScenario(scenarioId?: string) {
  if (scenarioId === 'climate-change') {
    return {
      metadata: {
        title: climateData.title,
        description: climateData.description,
        teaserImage: climateData.teaserImage,
        theme: climateData.theme,
      },
      rawScenario: climateData.scenario,
    };
  }
  
  return null;
}