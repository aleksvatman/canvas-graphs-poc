import GlobalSettings from "./components/GlobalSettings/GlobalSettings";
import { DiagramSheet } from "../canvas-graphs-module";
import useStore from "./utils/store";

import "../canvas-graphs-module/dist/index.css";

function App() {
  const { selectedColor, importedJSON, setCurrentJSON } = useStore();

  return (
    <>
      <GlobalSettings />
      <div style={{ width: "calc(80% - 1px)", height: "100vh" }}>
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
