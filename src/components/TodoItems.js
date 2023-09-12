import classes from "./TodoItems.module.css";

export default function TodoItems(props) {
  const handleRemove = (itemId) => {
    const updatedItems = props.items.filter((item) => item.id !== itemId);
    props.onRemoveItem(updatedItems);
  };

  return (
    <div>
      {props.items.map((item) => (
        <div className={classes.item}>
          <p>{item.title}</p>
          <p>{item.details}</p>
          <p>{item.priority}</p>
          <p>{item.category}</p>
          <button
            className={classes.remove}
            onClick={() => handleRemove(item.id)}
          >
            Done
          </button>
        </div>
      ))}
    </div>
  );
}
