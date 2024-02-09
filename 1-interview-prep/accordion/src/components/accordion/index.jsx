import { useState } from "react";
import { data } from "./data";

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiSelected, setMultiSelected] = useState([]);

  const toggleSingleSelection = (getCurrentId) => {
    // console.log(getCurrentId);
    setSelected(getCurrentId === selected ? null : getCurrentId);
  };

  const toggleMultipleSelection = (getCurrentId) => {
    let copyMulti = [...multiSelected];
    const findIndexOfCurrentId = copyMulti.indexOf(getCurrentId);
    // console.log(findIndexOfCurrentId);
    if (findIndexOfCurrentId === -1) {
      copyMulti.push(getCurrentId);
    } else {
      copyMulti.splice(findIndexOfCurrentId, 1);
    }

    setMultiSelected(copyMulti);
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="text-center">
        <button
          className=" p-2 bg-red-500 rounded-md text-white"
          onClick={() => setEnableMultiSelection(!enableMultiSelection)}
        >
          Enable Multi Selection
        </button>
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div key={dataItem.id} className="flex flex-col items-center">
              <div
                className="flex gap-2 p-4"
                onClick={
                  enableMultiSelection
                    ? () => toggleMultipleSelection(dataItem.id)
                    : () => toggleSingleSelection(dataItem.id)
                }
              >
                <p className=" font-bold text-lg">{dataItem.question}</p>
                <span>⬇</span>
              </div>

              {/* answer div */}
              {enableMultiSelection
                ? multiSelected.indexOf(dataItem.id) !== -1 && (
                    <div className="h-auto bg-slate-300 w-80">
                      Answer :- {dataItem.answer}
                    </div>
                  )
                : selected === dataItem.id && (
                    <div className="h-auto bg-slate-300 w-80">
                      Answer :- {dataItem.answer}
                    </div>
                  )}

              {/* {selected === dataItem.id ||
              multiSelected.indexOf(dataItem.id) !== -1 ? (
                <div className="h-auto bg-slate-300 w-80">
                  Answer :- {dataItem.answer}
                </div>
              ) : null} */}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
};

export default Accordion;
