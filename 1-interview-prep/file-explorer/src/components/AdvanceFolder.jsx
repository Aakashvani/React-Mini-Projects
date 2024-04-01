/* eslint-disable react/prop-types */

import { useState } from "react";

const AdvanceFolder = ({ handleInsertNode, explorer }) => {
  //   console.log(explorer);

  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });

  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      visible: true,
      isFolder,
    });
  };

  const onAddFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handleInsertNode(explorer.id, e.target.value, showInput.isFolder);
      setShowInput({ ...showInput, visible: false });
    }
  };

  if (explorer.isFolder) {
    return (
      <div style={{ marginTop: 5 }}>
        <div
          className="folder"
          onClick={() => {
            setExpand(!expand);
          }}
        >
          <div>📁 {explorer.name}</div>

          <div>
            <button onClick={(e) => handleNewFolder(e, true)}>Folder +</button>
            <button onClick={(e) => handleNewFolder(e, false)}>File +</button>
          </div>
        </div>

        <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
          {showInput.visible && (
            <div className="inputContainer">
              <span>{showInput.isFolder ? "📁" : "📄"}</span>
              <input
                onBlur={() => setShowInput({ ...showInput, visible: false })}
                onKeyDown={onAddFolder}
                type="text"
                className="inputContainer__input"
                autoFocus
              />
            </div>
          )}
          {explorer.items.map((item) => {
            return (
              <AdvanceFolder
                handleInsertNode={handleInsertNode}
                explorer={item}
                key={item.id}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    return <span className="file">📄 {explorer.name}</span>;
  }
};

export default AdvanceFolder;
