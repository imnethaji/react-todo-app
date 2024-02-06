import "./CSS/TodoItems.sass";

// eslint-disable-next-line react/prop-types
const TodoItems = ({ text, index, removeList }) => {
  return (
    <>
      <div className="list-items">
        <p>
          {index + 1}. {text}
        </p>
        <button className="remove" onClick={removeList}>
          Remove
        </button>
      </div>
    </>
  );
};

export default TodoItems;
