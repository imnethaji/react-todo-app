import "./CSS/TodoItems.sass";

// eslint-disable-next-line react/prop-types
const TodoItems = ({ text, index, removeList }) => {
  return (
    <>
      <div className="list-items">
        <p>
          <span className="item-index">{index + 1}</span> {text}
        </p>
        <button className="remove" onClick={removeList}>
          Remove
        </button>
      </div>
    </>
  );
};

export default TodoItems;
