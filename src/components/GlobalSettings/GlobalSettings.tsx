import Styled from "./GlobalSettings.styles";
import useStore from "../../utils/store";
import { ChangeEvent, useRef } from "react";

const nodeColorsPalette: string[] = [
  "#E8B2C9",
  "#B3D1E8",
  "#D6E8A3",
  "#E89FB3",
  "#A3D6DB",
  "#FFCA99",
  "#C6B2E3",
  "#FFB6C9",
  "#A3D6C6",
  "#E8C68F",
  "#D1E9E3",
  "#A3E8B2",
];

function GlobalSettings() {
  const { changeSelectedColor, setImportedJSON, currentJSON } = useStore();
  const importInputRef = useRef<HTMLInputElement>(null);

  const onImportClick = () => {
    if (importInputRef.current) {
      importInputRef.current.click();
    }
  };

  const onExportClick = () => {
    const fileData = currentJSON ? currentJSON : "";
    const blob = new Blob([fileData], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = "exported-canvas-config.json";
    link.href = url;
    link.click();
    link.remove();
  };

  const onReadFile = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : undefined;
    const reader = new FileReader();
    reader.onload = () => {
      setImportedJSON(JSON.stringify(reader.result));
    };
    if (file) {
      reader.readAsText(file);
    }
  };

  return (
    <Styled.ControlsWrapper>
      <Styled.ActionsContents>
        <h4 style={{ textAlign: "center", margin: 0 }}>Global Settings</h4>
        <button onClick={onImportClick}>import JSON</button>
        <input
          type="file"
          ref={importInputRef}
          onChange={onReadFile}
          style={{ visibility: "hidden", height: 0, position: "absolute" }}
        />
        <button onClick={onExportClick}>export JSON</button>
        <Styled.PaletteWrapper>
          <h5>Change nodes color</h5>
          {nodeColorsPalette.map((color: string) => {
            return (
              <Styled.ColorButton
                onClick={() => changeSelectedColor(color)}
                $bgColor={color}
                key={"color-btn-" + color}
              />
            );
          })}
        </Styled.PaletteWrapper>
      </Styled.ActionsContents>
    </Styled.ControlsWrapper>
  );
}

export default GlobalSettings;
