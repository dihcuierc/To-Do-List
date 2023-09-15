import classes from "./Dropdown.module.css";

export default function SortItems(props) {
  const handleSort = (order) => {
    props.setOrder(order);
  };

  return (
    <form className={classes.container} id="Priority">
      <label className={classes.label}>
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
