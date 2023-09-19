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
    console.log(itemId);
    const updatedItems = props.items.map((item) => {
      if (item.key === itemId) {
        return { ...item, done: true };
      }

      return item;
    });
    console.log(updatedItems);
    props.onUpdateItems(updatedItems);
  };

  return (
    <div>
      {props.updatedList.map((item) => (
        <div className={classes.entry} key={item.key}>
          <div>
            {item.title && (
              <div className={`${classes.content} ${"title"}`}>
                <p className={classes.labels}>Title:</p>
                <p
                  className={`${classes.text} ${item.done ? classes.done : ""}`}
                >
                  {item.title}
                </p>
              </div>
            )}
            {item.details && (
              <div className={`${classes.content} ${"details"}`}>
                <p className={classes.labels}>Details:</p>
                <p
                  className={`${classes.text} ${item.done ? classes.done : ""}`}
                >
                  {item.details}
                </p>
              </div>
            )}
            {item.priority && (
              <div className={`${classes.content} ${"priority"}`}>
                <p className={classes.labels}>Priority:</p>
                <p
                  className={`${classes.text} ${item.done ? classes.done : ""}`}
                >
                  {item.priority}
                </p>
              </div>
            )}
            {item.category && (
              <div className={`${classes.content} ${"category"}`}>
                <p className={classes.labels}>Category:</p>
                <p
                  className={`${classes.text} ${item.done ? classes.done : ""}`}
                >
                  {item.category}
                </p>
              </div>
            )}
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
