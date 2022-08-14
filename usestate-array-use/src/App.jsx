import { useState } from "react";
import "./App.css";

function App() {
  let listOfTask = [
    {
      id: 0,
      task: "learn react.js",
    },
    {
      id: 2,
      task: "learn vue.js",
    },
    {
      id: 3,
      task: "learn dancing",
    },
  ];

  const [MyTask, setMyTask] = useState(listOfTask);

  const DeleteTask = () => {
    setMyTask([]);
  };
  console.log(listOfTask);

  return (
    <div className="App">
      <h2 style={{ textDecoration: "underline" }}>ToDo - App</h2>
      {MyTask.map((e) => {
        return <h3 key={e.id}>{e.task}</h3>;
      })}
      <button style={{ marginLeft: "2rem" }} onClick={DeleteTask}>
        click
      </button>
    </div>
  );
}

export default App;
