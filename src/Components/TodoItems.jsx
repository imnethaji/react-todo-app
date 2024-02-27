import "./CSS/TodoItems.sass";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const TodoItems = ({ initialText, i, removeList }) => {
  const [todoText, setTodoText] = useState(initialText);
  const [isEditing, setIsEditing] = useState(false);

  function editText() {
    setIsEditing((e) => !e);
  }
  function handleChange(e) {
    setTodoText(e.target.value);
  }

  return (
    <>
      <div className="list-items">
        <div className="list-text-container">
          <button className="item-index">{i + 1}</button>
          {isEditing ? (
            <input
              type="text"
              required
              className="edit-input"
              value={todoText}
              onChange={handleChange}
            />
          ) : (
            <p className="list-text">{todoText}</p>
          )}
        </div>
        <div className="btn-container">
          <button className="edit" onClick={editText}>
            {isEditing ? "Save" : "Edit"}
          </button>
          <button className="remove" onClick={removeList}>
            Remove
          </button>
        </div>
      </div>
    </>
  );
};

export default TodoItems;
