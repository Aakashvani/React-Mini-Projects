/* eslint-disable react/prop-types */
export default function Todo({ newTodo, handleChange, addTodo, inputRef }) {
  return (
    <div>
      <input
        autoFocus
        type="text"
        value={newTodo}
        onChange={handleChange}
        ref={inputRef}
      />
      <button onClick={addTodo}>Add</button>
    </div>
  );
}
