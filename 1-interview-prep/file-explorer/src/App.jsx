import { useState } from "react";
import "./App.css";
import explorer from "./data/folderData";
import Folder from "./components/Folder";
import AdvanceFolder from "./components/AdvanceFolder";
import useTraverseTree from "./hooks/useTraverseTree";

function App() {
  const [explorerData, setExplorerData] = useState(explorer);
  // console.log(explorerData);

  // code for adv.
  const { insertNode } = useTraverseTree();

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);

    setExplorerData(finalTree);
  };
  // code for adv.

  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <div>
        <p>Basic file explorer ↓</p>
        <Folder explorer={explorerData} />
      </div>
      <div>
        <p>Advance file explorer ↓ with button for creating folder and files</p>
        <AdvanceFolder
          handleInsertNode={handleInsertNode}
          explorer={explorerData}
        />
      </div>
    </div>
  );
}

export default App;
