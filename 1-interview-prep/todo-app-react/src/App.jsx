import { useEffect, useState, useRef } from "react";
import TodoInputFeild from "./components/TodoInputFeild";
import TodoList from "./components/TodoList";
import "./App.css";

export default function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const inputRef = useRef(null); // Create a ref for the input element

  // Focus on the input element when the component mounts
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // Function to handle changes in the input
  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };

  // Function to add a new todo
  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  // Function to delete a todo
  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      {/* input feild and button */}
      <TodoInputFeild
        newTodo={newTodo}
        handleChange={handleChange}
        addTodo={addTodo}
        inputRef={inputRef}
      />

      {/* todo list */}
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}
