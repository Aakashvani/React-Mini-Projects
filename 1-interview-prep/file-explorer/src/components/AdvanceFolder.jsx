/* eslint-disable react/prop-types */

import { useState } from "react";

const AdvanceFolder = ({ explorer }) => {
  //   console.log(explorer);

  const [expand, setExpand] = useState(false);

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
        </div>

        <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
          {explorer.items.map((item) => {
            return <AdvanceFolder explorer={item} key={item.id} />;
          })}
        </div>
      </div>
    );
  } else {
    return <span className="file">📄 {explorer.name}</span>;
  }
};

export default AdvanceFolder;
