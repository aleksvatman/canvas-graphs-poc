import styled from "styled-components";

const NodeContainer = styled.div<{ $bgColor?: string; }>`
  width: 60px;
  max-width: 130px;
  background-color: ${props => props.$bgColor ? props.$bgColor : 'white'};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 5px 10px;
  color:rgb(112, 111, 111);
  font-size: 12px;
  border-radius: 3px;
  box-shadow: 0px 0px 2px 0px rgba(95, 95, 95, 0.75);
  gap: 2px;

  .react-flow__node.selected & {
    outline: 1px solid rgb(112, 111, 111);
  }

  .react-flow__handle {
    background-color: lightblue;
    border-color: lightblue;
    min-height: 4px;
    height: 4px;
    min-width: 4px;
    width: 4px;
    visibility: hidden;
  }


  &:hover {
    .react-flow__handle {
      visibility: visible;
    }
  }
`

const NodeIcon = styled.div`
  margin: 0;
  font-size: 12px;
  line-height: 1;
`

const NodeLabel = styled.p`
  font-size: 8px;
  margin: 0;
  text-align: center;
  line-height: 1;
`

const Styled = {
  NodeContainer,
  NodeIcon,
  NodeLabel,
}

export default Styled;