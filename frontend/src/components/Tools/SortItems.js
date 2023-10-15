import classes from "./Tools.module.css";

export default function SortItems(props) {
  const handleSort = (order) => {
    props.setOrder(order);
  };

  return (
    <form className={classes.container} id="Priority-form">
      <label className={classes.label} id="Priority-label">
        Sort by Priority:{" "}
        <select
          className={classes.select}
          onChange={(e) => handleSort(e.target.value)}
          id="Priority"
        >
          <option value="ascending" id="ascending">
            Ascending
          </option>
          <option value="descending" id="descending">
            Descending
          </option>
        </select>
      </label>
    </form>
  );
}
