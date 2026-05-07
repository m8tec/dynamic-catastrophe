import { Handle, Position, useReactFlow } from "@xyflow/react";
import { useRef } from "react";

interface BaseNodeProps {
  id: string;
  isActive?: boolean;
  isDiscovered?: boolean;
  isSelectable?: boolean;
  isTeased?: boolean;
  children: React.ReactNode;
  className?: string;
}

export default function BaseNode({
  id,
  isActive,
  isSelectable,
  isDiscovered = true,
  isTeased = false,
  children,
  className = "",
}: BaseNodeProps) {
  const isVisible = isDiscovered || isTeased;

  const { setNodes, setEdges, getEdges } = useReactFlow();

  const invalidClickCount = useRef(0);

  const onNodeClick = () => {
    if (!isDiscovered) {
      invalidClickCount.current += 1;

      if (invalidClickCount.current >= 3) {
        alert(
          "Wähle zuerst ein Objekt aus, was hierher zeigt, um dieses Element sichtbar zu machen.",
        );
        invalidClickCount.current = 0;
      }

      const edges = getEdges();

      const incomingEdges = edges.filter((e) => e.target === id);

      incomingEdges.forEach((edge) => {
        const parentEl = document.getElementById(
          `basenode-inner-${edge.source}`,
        );
        if (parentEl) {
          parentEl.classList.remove("animate-double-blink");
          void parentEl.offsetWidth;
          parentEl.classList.add("animate-double-blink");
        }
      });
      return;
    }

    if (isActive) return;

    invalidClickCount.current = 0;

    const edges = getEdges();

    const outgoingEdges = edges.filter((e) => e.source === id);
    const nextNodeIds = outgoingEdges.map((e) => e.target);

    const teasedNodeIds = edges
      .filter((e) => nextNodeIds.includes(e.source))
      .map((e) => e.target);

    setNodes((nodes) =>
      nodes.map((node) => {
        let newData = { ...node.data };

        if (node.id === id) {
          newData.isActive = true;
          newData.isSelectable = false;
        } else if (nextNodeIds.includes(node.id)) {
          newData.isActive = false;
          newData.isSelectable = true;
          newData.isDiscovered = true;
          newData.isTeased = false;
          if (newData.targetLabel) newData.label = newData.targetLabel;
        } else {
          newData.isActive = false;
          newData.isSelectable = false;

          if (!newData.isDiscovered) {
            if (teasedNodeIds.includes(node.id)) {
              newData.isTeased = true;
            }
          }
        }

        return { ...node, data: newData };
      }),
    );

    setEdges((currentEdges) =>
      currentEdges.map((edge) => {
        let newData = { ...edge.data };

        if (edge.source === id) {
          newData.isSelectable = true;
          newData.isDiscovered = true;
          newData.isTeased = false;
        } else {
          newData.isSelectable = false;
          if (nextNodeIds.includes(edge.source)) {
            newData.isTeased = true;
          }
        }

        return { ...edge, data: newData };
      }),
    );
  };

  let cursorClass = "cursor-default";

  if (!isDiscovered) {
    cursorClass = "cursor-not-allowed";
  } else if (isSelectable) {
    cursorClass = "cursor-pointer hover:scale-105 transition-all duration-300";
  }

  return (
    <>
      <style>{`
        @keyframes double-blink {
          0%, 100% { opacity: 1; }
          25%, 75% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        .animate-double-blink {
          animation: double-blink 0.6s ease-in-out;
        }
      `}</style>

      <div
        id={`basenode-inner-${id}`}
        className={`relative flex items-center justify-center min-w-40 min-h-40 group ${cursorClass} ${className} ${isVisible ? "" : "!opacity-0 pointer-events-none"}`}
        onClick={onNodeClick}
      >
        <Handle
          type="target"
          position={Position.Top}
          id="top"
          className="opacity-0"
        />
        <Handle
          type="source"
          position={Position.Bottom}
          id="bottom"
          className="opacity-0"
        />
        <Handle
          type="source"
          position={Position.Right}
          id="right"
          className="opacity-0"
        />
        <Handle
          type="source"
          position={Position.Left}
          id="left"
          className="opacity-0"
        />

        {children}
      </div>
    </>
  );
}
