import React from "react";
import { nanoid } from "nanoid";
import { useState } from "react";

export default function Todo() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = (e) => {
    if (task) {
      const newTask = { id: nanoid() };
      setTask([...tasks, newTask]);
      localStorage.setItem("ListOfTask", JSON.stringify([...tasks, newTask]));
    }
  };

  return (
    <>
      <input
        type="text"
        value=""
        placeholder="Make ur task...."
        onChange={(e) => setTask(e.target.value)}
      />
      <button>ADD</button>
    
      <div>
        {
            tasks.map((task) =>{
                <div key={task.id}>
                    <span>{task.title}</span>
                </div>
            })
        }
      </div>
    </>
  );
}
