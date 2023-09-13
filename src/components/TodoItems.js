import AddTodo from "./AddTodo";
import classes from "./TodoItems.module.css";

export default function TodoItems(props) {
  const handleRemove = (itemId) => {
    const updatedItems = props.items.filter((item) => item.id !== itemId);
    props.onUpdateItems(updatedItems);
  };

  const handleDone = (itemId) => {
    const updatedItems = props.items.map((item) => {
      if (item.id === itemId) {
        return { ...item, done: true };
      }
      return item;
    });
    props.onUpdateItems(updatedItems);
  };

  const handleEdit = (itemId) => {
    const updatedItems = props.items.map((item) => {
      if (item.id === itemId) {
        return <AddTodo />;
      }
      return item;
    });
    props.onUpdateItems(updatedItems);
  };

  return (
    <div>
      {props.updatedList.map((item) => (
        <div
          className={`${classes.item} ${item.done ? classes.done : ""}`}
          key={item.title}
        >
          <p>{item.title}</p>
          <p>{item.details}</p>
          <p>{item.priority}</p>
          <p>{item.category}</p>
          <button
            className={classes.removeButton}
            onClick={() => handleEdit(item.id)}
          >
            Edit
          </button>
          <button
            className={classes.doneButton}
            onClick={() => handleDone(item.id)}
          >
            Done
          </button>
          <button
            className={classes.removeButton}
            onClick={() => handleRemove(item.id)}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
}
