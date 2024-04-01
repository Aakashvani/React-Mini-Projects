import { useState } from "react";
import "./App.css";
import explorer from "./data/folderData";
import Folder from "./components/Folder";
import AdvanceFolder from "./components/AdvanceFolder";

function App() {
  const [explorerData, setExplorerData] = useState(explorer);
  // console.log(explorerData);

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <div>
        <p>Basic file explorer ↓</p>
        <Folder explorer={explorerData} />
      </div>
      <div>
        <p>Advance file explorer ↓ with button for creating folder and files</p>
        <AdvanceFolder explorer={explorerData} />
      </div>
    </div>
  );
}

export default App;
