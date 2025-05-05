import GlobalSettings from "./components/GlobalSettings/GlobalSettings";
// import DiagramSheet from "./components/DiagramSheet/DiagramSheet";
import { DiagramSheet } from "../canvas-graphs-module/src";
import useStore from "./utils/store";

function App() {
  const { selectedColor, importedJSON, setCurrentJSON } = useStore();

  return (
    <>
      <GlobalSettings />
      <div style={{ width: "calc(80% - 1px)" }}>
        <DiagramSheet
          nodeColor={selectedColor}
          importedJSON={importedJSON}
          setCurrentJSON={setCurrentJSON}
        />
      </div>
    </>
  );
}

export default App;
