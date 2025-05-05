import GlobalSettings from "./components/GlobalSettings/GlobalSettings";
import DiagramSheet from "./components/DiagramSheet/DiagramSheet";
import useStore from "./utils/store";

function App() {
  const { selectedColor, importedJSON, setCurrentJSON } = useStore();

  return (
    <>
      <GlobalSettings />
      <DiagramSheet
        nodeColor={selectedColor}
        importedJSON={importedJSON}
        setCurrentJSON={setCurrentJSON}
      />
    </>
  );
}

export default App;
