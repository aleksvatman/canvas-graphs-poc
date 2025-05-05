import { useCallback, useEffect } from "react";
import Styled from "./DiagramSheet.styles";
import CustomNode from "./shared/CustomNode/CustomNode";
import CustomEdge from "./shared/CustomEdge/CustomEdge";
import { initialEdges, initialNodes, panOnDrag } from "./constants";
import {
  ReactFlow,
  useNodesState,
  useEdgesState,
  addEdge,
  Background,
  SelectionMode,
  ConnectionMode,
  type OnConnect,
  type Edge,
  MarkerType,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";

interface DiagramSheetProps {
  nodeColor?: string;
  importedJSON?: string;
  setCurrentJSON?: (value: string) => void;
}

const nodeTypes = {
  "custom-node": CustomNode,
};

const edgeTypes = {
  "straight-arrow": CustomEdge,
};

function DiagramSheet({
  nodeColor,
  importedJSON,
  setCurrentJSON,
}: DiagramSheetProps) {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  // Set current data in JSON format, if props function for this is provided
  useEffect(() => {
    if (!setCurrentJSON) {
      return;
    }

    // Clone Edges array and delete markerEnd property from resulted JSON
    const copiedEdges = JSON.parse(JSON.stringify(edges));
    const resultObj = {
      elements: nodes,
      connections: copiedEdges.map((edge: Edge) => {
        delete edge.markerEnd;
        return edge;
      }),
    };

    setCurrentJSON(JSON.stringify(resultObj));
  }, [nodes, edges, setCurrentJSON]);

  // Set nodes background color, if provided externally
  useEffect(() => {
    if (!nodeColor) {
      return;
    }

    setNodes((nodes) => {
      const newNodes = nodes.map((node) => {
        return { ...node, data: { ...node.data, bgColor: nodeColor } };
      });
      return newNodes;
    });
  }, [nodeColor, setNodes]);

  // Apply imported data, if correct JSON is provided
  useEffect(() => {
    if (!importedJSON) {
      return;
    }

    const parsedJSON = JSON.parse(JSON.parse(importedJSON));

    if (
      Array.isArray(parsedJSON.connections) &&
      Array.isArray(parsedJSON.elements)
    ) {
      const modifiedEdges = parsedJSON.connections.map((edge: Edge) => {
        edge.markerEnd = { type: MarkerType.Arrow };
        return edge;
      });

      setNodes(parsedJSON.elements);
      setEdges(modifiedEdges);
    } else {
      alert(
        "Wrong file, structure or format. Should be JSON and contain 2 arrays of objects: 'elements' & 'connections'."
      );
    }
  }, [importedJSON, setEdges, setNodes]);

  const onConnect: OnConnect = useCallback(
    (params) => {
      const edge = {
        ...params,
        type: "straight-arrow",
        markerEnd: { type: MarkerType.Arrow },
      };
      setEdges((eds) => addEdge(edge, eds));
    },
    [setEdges]
  );

  return (
    <Styled.SheetWrapper>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
        panOnScroll
        selectionOnDrag
        panOnDrag={panOnDrag}
        selectionMode={SelectionMode.Partial}
        connectionMode={ConnectionMode.Loose}
        deleteKeyCode={["Delete", "Backspace"]}
      >
        <Background id="1" color="#f7f7f7" bgColor="#f7f7f7" />
      </ReactFlow>
    </Styled.SheetWrapper>
  );
}

export default DiagramSheet;
