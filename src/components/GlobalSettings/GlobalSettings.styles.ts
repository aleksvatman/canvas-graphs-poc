import styled from "styled-components";

const ControlsWrapper = styled.div`
  height: 100vh;
  width: 20%;
  border-right: 1px solid lightgray;
  padding: 10px;
`

const ActionsContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 10px;
`

const PaletteWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 3px;
  padding: 10px;
  box-shadow: 0px 0px 2px 0px rgba(95, 95, 95, 0.75);

  h5 {
    width: 100%;
    text-align: center;
    margin: 0 0 10px;
  }
`

const ColorButton = styled.button<{ $bgColor?: string; }>`
  height: 20px;
  width: 20px;
  border-radius: 20px;
  background-color: ${(props) => props.$bgColor};
  border: none;

  &:active {
    opacity: 0.8;
  }

  &:hover {
    cursor: pointer;
  }
`

const Styled = {
  ControlsWrapper,
  ActionsContents,
  PaletteWrapper,
  ColorButton,
}

export default Styled;