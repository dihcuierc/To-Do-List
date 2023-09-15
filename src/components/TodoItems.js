import classes from "./TodoItems.module.css";

export default function TodoItems(props) {
  const handleRemove = (itemId) => {
    const updatedItems = props.items.filter((item) => item.key !== itemId);
    props.onUpdateItems(updatedItems);
    fetch(
      `https://to-do-list-15bca-default-rtdb.asia-southeast1.firebasedatabase.app/todo/${itemId}.json`,
      {
        method: "DELETE",
      }
    );
  };

  const handleDone = (itemId) => {
    const updatedItems = props.items.map((item) => {
      if (item.key === itemId) {
        return { ...item, done: true };
      }
      return item;
    });
    props.onUpdateItems(updatedItems);
  };

  return (
    <div>
      {props.updatedList.map((item) => (
        <div
          className={`${classes.entry} ${item.done ? classes.done : ""}`}
          key={item.key}
        >
          <div className={classes.labels}>
            <p>Title</p>
            <p>Details</p>
            <p>Priority</p>
            <p>Category</p>
          </div>
          <div className={classes.text}>
            <p>{item.title}</p>
            <p>{item.details}</p>
            <p>{item.priority}</p>
            <p>{item.category}</p>
          </div>
          <div className={classes.button}>
            <button
              className={classes.doneButton}
              onClick={() => handleDone(item.key)}
            >
              Done
            </button>
            <button
              className={classes.removeButton}
              onClick={() => handleRemove(item.key)}
            >
              X
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
