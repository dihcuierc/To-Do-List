import { useEffect } from "react";
import classes from "./Dropdown.module.css";

export default function FilterItems(props) {
  const handleFilter = (filter) => {
    props.setFilter(filter);
  };

  useEffect(() => {
    props.setFilter("All");
  }, []);

  return (
    <div className={classes.container}>
      <label className={classes.label}>Filter by Category: </label>
      <select
        className={classes.select}
        onChange={(e) => handleFilter(e.target.value)}
      >
        <option value="All">All</option>
        {props.categories.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}
