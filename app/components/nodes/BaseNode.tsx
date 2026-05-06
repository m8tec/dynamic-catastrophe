import { Handle, Position, useReactFlow } from '@xyflow/react';

interface BaseNodeProps {
  id: string;
  isActive?: boolean;
  isSelectable?: boolean;
  children: React.ReactNode;
  className?: string;
}

export default function BaseNode({ id, isActive, children, className = "" }: BaseNodeProps) {
  const { setNodes, setEdges } = useReactFlow();

  const onNodeClick = () => {
    if (isActive) return;

    setNodes((nodes) => nodes.map(node => ({
        ...node,
        data: { 
          ...node.data, 
          isActive: node.id === id,
          isSelectable: false 
        }
    })));

    setEdges((edges) => edges.map(edge => {
        let newData = { ...edge.data };
        
        if (edge.source === id && edge.target === id) {
            newData.isSelectable = true;
            newData.isRevealed = false;
            newData.isClicked = false;
        } else if (edge.target === id) {
            newData.isClicked = true; 
            newData.isRevealed = false;
            newData.isSelectable = false;
        } else if (edge.source === id) {
            newData.isSelectable = true;
            newData.isRevealed = false; 
            newData.isClicked = false;  
        } else {
            newData.isSelectable = false;
            newData.isRevealed = false;
            newData.isClicked = false; 
        }
        
        return { ...edge, data: newData };
    }));
  };

  return (
    <div 
      className={`relative flex items-center justify-center min-w-40 min-h-40 group ${!isActive ? 'cursor-pointer hover:scale-105 transition-all duration-300' : ''} ${className}`}
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