import { Node, Edge } from '@xyflow/react';

export const metadata = {
  title: "Klimawandel: Die nackte Wahrheit",
  description: "Bist du bereit für die Realität? Ein interaktiver Pfad durch die Klimakatastrophe.",
};

export const nodes: Node[] = [
  { id: '1', type: 'diamond', position: { x: 0, y: 0 }, data: { label: 'Ist der Klimawandel real?' } },
  { id: 'opt-no', type: 'rectangle', position: { x: 0, y: 0 }, data: { label: 'Nö!' } },
  { id: 'opt-yes', type: 'rectangle', position: { x: 0, y: 0 }, data: { label: 'Ja!' } },
  { id: 'opt-ignore', type: 'rectangle', position: { x: 0, y: 0 }, data: { label: 'Ich versuche, nicht daran zu denken' } },
  { id: 'opt-ignore2', type: 'rectangle', position: { x: 0, y: 0 }, data: { label: 'Ich versuche, nicht daran zu denken' } },
  { id: '2', type: 'circle', position: { x: 0, y: 0 }, data: { label: 'Verdrängst du da vielleicht etwas?' } },
  { id: 'opt-hmmm', type: 'rectangle', position: { x: 0, y: 0 }, data: { label: 'Hmmm...' } },
  { id: 'opt-was', type: 'rectangle', position: { x: 0, y: 0 }, data: { label: 'Klima was?' } },
  { id: '3', type: 'cloud', position: { x: 0, y: 0 }, data: { label: 'Ich verdränge gar nichts!' } },
  { id: '4', type: 'diamond', position: { x: 0, y: 0 }, data: { label: 'Sind wir am Arsch?' } },
  { id: 'opt-wen-meinst-du', type: 'rectangle', position: { x: 0, y: 0 }, data: { label: 'Wenn meinst du mit >>wir<<?' } },
  { id: 'opt-noch-nicht', type: 'rectangle', position: { x: 0, y: 0 }, data: { label: 'Noch nicht, aber...' } },
];

export const edges: Edge[] = [
  { id: 'e1-opt-no', source: '1', target: 'opt-no', type: 'interactive' },
  { id: 'e1-opt-yes', source: '1', target: 'opt-yes', type: 'interactive' },
  { id: 'e1-opt-ignore', source: '1', target: 'opt-ignore', type: 'interactive' },
  { id: 'e1-opt-ignore2', source: '4', target: 'opt-ignore2', type: 'interactive' },
  { id: 'e1-opt-ignore22', source: 'opt-ignore2', target: '4', type: 'interactive' },
  { id: 'e-opt-2', source: 'opt-no', target: '2', type: 'interactive' },
  { id: 'e-opt-3', source: 'opt-yes', target: '4', type: 'interactive' },
  { id: 'e2-3', source: '2', target: '3', type: 'interactive' },
  { id: 'e-ignore-1', source: 'opt-ignore', target: '1', type: 'interactive' },
  { id: 'efwp', source: '2', target: 'opt-hmmm', type: 'interactive' },
  { id: 'e-hmmm-4', source: 'opt-hmmm', target: '1', type: 'interactive' },
  { id: 'e-opt-was', source: '1', target: 'opt-was', type: 'interactive' },
  { id: 'e-opt-was2', source: 'opt-was', target: '1', type: 'interactive' },
  { id: 'e-opt-wen-meinst-du', source: '4', target: 'opt-wen-meinst-du', type: 'interactive' },
  { id: 'e-opt-noch-nicht', source: '4', target: 'opt-noch-nicht', type: 'interactive' },
];