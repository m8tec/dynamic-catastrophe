import { ThemeName } from '@/constants/theme';

export interface ScenarioMetadata {
  title: string;
  description: string;
  teaserImage?: string;
  theme?: ThemeName;
}