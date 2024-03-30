import { useState } from "react";
import "./App.css";
import explorer from "./data/folderData";
import Folder from "./components/Folder";
import AdvanceFolder from "./components/AdvanceFolder";

function App() {
  const [explorerData, setExplorerData] = useState(explorer);
  // console.log(explorerData);

  return (
    <>
      <p>Basic file explorer ↓</p>
      <Folder explorer={explorerData} />
      <p>Advance file explorer ↓ with button for creating folder and files</p>
      <AdvanceFolder explorer={explorerData} />
    </>
  );
}

export default App;
