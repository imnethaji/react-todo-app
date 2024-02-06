import { useRef, useState } from "react";
import "./CSS/Todo.sass";

import TodoItems from "./TodoItems";

let count = 0;

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef(null);
  const add = () => {
    // Adding new items to array by using spread operator and passing object with values from input field
    setTodos([
      ...todos,
      { no: count++, text: inputRef.current.value, display: "" },
    ]);
    inputRef.current.value = "";
  };

  const clearList = () => {
    // Clearing array by assigning empty array
    setTodos([]);
  };

  const removeListItem = (index) => {
    // Creating two new slices and then concating to make a new array and assigning to the setTodos() state function
    let newTodos = todos.slice(0, index).concat(todos.slice(index + 1));
    setTodos(newTodos);
  };

  return (
    <div>
      <div className="todo">
        <div className="todo-header">
          <h2>To-Do List</h2>
        </div>
        <div className="todo-add">
          <input
            type="text"
            placeholder="Add your task"
            className="todo-input"
            ref={inputRef}
          ></input>
        </div>
        <div className="todo-btns">
          <div
            className="todo-add-btn"
            onClick={() => {
              add();
            }}
          >
            ADD
          </div>
          <div
            className="todo-clr-btn"
            onClick={() => {
              clearList();
            }}
          >
            Clear
          </div>
        </div>
        <div className="todo-list">
          {todos.map((todo, index) => (
            <TodoItems
              text={todo.text}
              index={index}
              key={index}
              removeList={() => removeListItem(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todo;