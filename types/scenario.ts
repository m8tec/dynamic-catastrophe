import { ThemeName } from '@/constants/theme';

export type NodeType = 'circle' | 'cloud' | 'curved' | 'definition' | 'diamond' | 'option' | 'options' | 'quote' | 'rectangle';

export interface ScenarioOption {
  text: string;
  nextId: string | undefined;
}

export interface ScenarioNode {
  id: string;
  type: NodeType;
  text: string;
  options: ScenarioOption[];
}

export interface ScenarioData {
  title: string;
  description: string;
  theme?: ThemeName;
  teaserImage?: string;
  scenario: ScenarioNode[];
}