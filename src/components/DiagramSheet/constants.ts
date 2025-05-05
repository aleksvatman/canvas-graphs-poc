import { type Node, type Edge, MarkerType,  } from "@xyflow/react";

export const initialNodes: Node[] = [
  {
    id: "1",
    position: { x: 0, y: 0 },
    data: { label: "obj 1", id: "1", icon: "LuDatabase" },
    type: "custom-node",
  },
  {
    id: "2",
    position: { x: 0, y: 100 },
    data: { label: "obj 2", id: "2", icon: "LuFile" },
    type: "custom-node",
  },
  {
    id: "3",
    position: { x: 200, y: 150 },
    data: { label: "obj 3", id: "3", icon: "LuCodeXml" },
    type: "custom-node",
  },
  {
    id: "4",
    position: { x: 200, y: 250 },
    data: { label: "obj 4", id: "4", icon: "LuStar" },
    type: "custom-node",
  },
  {
    id: "5",
    position: { x: 300, y: 350 },
    data: { label: "obj 5", id: "5", icon: "LuInbox" },
    type: "custom-node",
  },
];

export const initialEdges: Edge[] = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    sourceHandle: "1-bottom",
    targetHandle: "2-top",
    type: "straight-arrow",
    markerEnd: { type: MarkerType.Arrow },
  },
  { id: "e1-3", source: "1", sourceHandle: '1-right', target: "3", type: "straight-arrow", markerEnd: { type: MarkerType.Arrow } },
];

export const panOnDrag = [1, 2];