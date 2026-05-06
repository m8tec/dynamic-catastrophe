import { Handle, Position, useReactFlow } from '@xyflow/react';

interface BaseNodeProps {
  id: string;
  isActive?: boolean;
  isSelectable?: boolean;
  isDiscovered?: boolean;
  children: React.ReactNode;
  className?: string;
}

export default function BaseNode({ id, isActive, isSelectable, isDiscovered = true, children, className = "" }: BaseNodeProps) {
  const { setNodes, setEdges, getEdges } = useReactFlow();

  const onNodeClick = () => {
    if (isActive || !isDiscovered) return;

    const edges = getEdges();
    
    const outgoingEdges = edges.filter(e => e.source === id);
    const nextNodeIds = outgoingEdges.map(e => e.target);

    setNodes((nodes) => nodes.map(node => {
        let newData = { ...node.data };

        if (node.id === id) {
            newData.isActive = true;
            newData.isSelectable = false;
        } else if (nextNodeIds.includes(node.id)) {
            newData.isActive = false;
            newData.isSelectable = true;
            newData.isDiscovered = true;
            if (newData.targetLabel) newData.label = newData.targetLabel;
        } else {
            newData.isActive = false;
            newData.isSelectable = false;
        }

        return { ...node, data: newData };
    }));

    setEdges((currentEdges) => currentEdges.map(edge => {
        let newData = { ...edge.data };
        
        if (edge.source === id) {
            newData.isSelectable = true;
            newData.isDiscovered = true;
        } else {
            newData.isSelectable = false;
        }
        
        return { ...edge, data: newData };
    }));
  };

  const cursorClass = isSelectable ? 'cursor-pointer hover:scale-105 transition-all duration-300' : 'cursor-default';

  return (
    <div 
      className={`relative flex items-center justify-center min-w-40 min-h-40 group ${cursorClass} ${className}`}
      onClick={onNodeClick}
    >
      <Handle type="target" position={Position.Top} id="top" className="opacity-0" />
      <Handle type="source" position={Position.Bottom} id="bottom" className="opacity-0" />
      <Handle type="source" position={Position.Right} id="right" className="opacity-0" />
      <Handle type="source" position={Position.Left} id="left" className="opacity-0" />
      
      {children}
    </div>
  );
}