import classes from "./Dropdown.module.css";

export default function FilterItems(props) {
  const handleFilter = (filter) => {
    props.setFilter(filter);
  };

  return (
    <form className={classes.container} id="Filter">
      <label className={classes.label} id="Filter">
        Filter by Category:{" "}
        <select
          className={classes.select}
          onChange={(e) => handleFilter(e.target.value)}
          id="Filter"
        >
          <option value="All">All</option>
          {props.categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>
    </form>
  );
}
