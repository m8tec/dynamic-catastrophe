import { Node, Edge } from '@xyflow/react';

export interface StaticNode {
  id: string;
  type: string;
  position?: { x: number; y: number };
  data: any;
}

export interface StaticEdge {
  id?: string;
  source: string;
  target?: string;
  type?: string;
}

export function normalizeStaticNodes(nodes: StaticNode[]): Node[] {
  return (nodes || []).map((n) => ({
    id: n.id,
    type: (n as any).type,
    position: n.position || { x: 0, y: 0 },
    data: n.data || {},
  } as Node));
}

export function normalizeStaticEdges(edges: StaticEdge[]): Edge[] {
  return (edges || []).map((e) => ({
    id: e.id || `e-${e.source}-to-${e.target}`,
    source: e.source,
    target: e.target,
    type: e.type || 'interactive',
  } as Edge));

}
