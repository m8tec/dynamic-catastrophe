import { Handle, Position } from '@xyflow/react';

export default function PlaceholderNode() {
  return (
    <div style={{ width: 1, height: 1 }}>
      <Handle type="target" position={Position.Top} className="opacity-0" />
    </div>
  );
}