/* eslint-disable react/prop-types */
export default function TodoList({ todos, deleteTodo }) {
  return (
    <div>
      {todos.map((todo, index) => (
        <ul onClick={() => deleteTodo(index)} key={index}>
          {todo}
        </ul>
      ))}
    </div>
  );
}
