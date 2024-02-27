import { useRef, useState } from "react";
import "./CSS/Todo.sass";

import TodoItems from "./TodoItems";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);
  const inputRef = useRef(null);

  const add = () => {
    const uniqueID = Math.random();
    if (inputRef.current.value === "") {
      alert("Please type something");
    } else {
      setTodos([
        ...todos,
        { id: uniqueID, no: count, text: inputRef.current.value, display: "" },
      ]);
      setCount(count + 1);
      inputRef.current.value = "";
    }
  };

  const clearList = () => {
    // Clearing array by assigning empty array
    setTodos([]);
  };

  const removeListItem = (indexToRemove) => {
    // Filter out the item at the specific index
    let newTodos = todos.filter((todo) => todo.id !== indexToRemove);
    setTodos(newTodos);
    setCount(count - 1);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      add();
    }
  };

  return (
    <div>
      <div className="todo">
        <div className="todo-header">
          <h4>To-Do List</h4>
        </div>
        <div className="todo-add">
          <input
            type="text"
            placeholder="Add your task"
            className="todo-input"
            onKeyDown={handleKeyDown}
            ref={inputRef}
          ></input>
        </div>
        <div className="todo-btns">
          <div
            className="todo-add-btn todo-btn"
            onClick={() => {
              add();
            }}
          >
            ADD
          </div>
          <div
            className="todo-clr-btn todo-btn"
            onClick={() => {
              clearList();
            }}
          >
            Clear All
          </div>
        </div>
        <div className="todo-list">
          {todos.map((todo, i) => (
            <TodoItems
              initialText={todo.text}
              id={todo.id}
              i={i}
              key={todo.no}
              removeList={() => removeListItem(todo.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todo;
