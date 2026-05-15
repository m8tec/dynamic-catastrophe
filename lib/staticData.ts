import { data as climateData, translations as climateTranslations } from '@/data/scenarios/climate-change';

export function getStaticScenario(scenarioId?: string, locale: string = 'de') {
  if (scenarioId === 'climate-change') {
    const trans = (locale in climateTranslations) 
      ? climateTranslations[locale as keyof typeof climateTranslations] 
      : climateTranslations.de;
    return {
      metadata: {
        title: trans.title,
        description: trans.description,
        teaserImage: climateData.teaserImage,
        theme: climateData.theme,
      },
      rawScenario: climateData.scenario,
    };
  }
  
  return null;
}