import { Handle, Position } from "@xyflow/react";
import Styled from "./CustomNode.styles";
import renderIcon from "../../utils/renderIcon";

function CustomNode({
  data,
}: {
  data: { label: string; id: string; icon?: string; bgColor?: string };
}) {
  if (!data.label || !data.id) {
    return (
      <Styled.NodeContainer>
        <Styled.NodeLabel>Wrong created node</Styled.NodeLabel>
      </Styled.NodeContainer>
    );
  }

  return (
    <Styled.NodeContainer $bgColor={data.bgColor}>
      <Handle type="source" position={Position.Top} id={`${data.id}-top`} />
      {data.icon && <Styled.NodeIcon>{renderIcon(data.icon)}</Styled.NodeIcon>}
      <Styled.NodeLabel>{data.label}</Styled.NodeLabel>
      <Handle
        type="source"
        position={Position.Bottom}
        id={`${data.id}-bottom`}
      />
      <Handle type="source" position={Position.Left} id={`${data.id}-left`} />
      <Handle type="source" position={Position.Right} id={`${data.id}-right`} />
    </Styled.NodeContainer>
  );
}

export default CustomNode;
