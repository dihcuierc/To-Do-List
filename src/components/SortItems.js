import { useEffect } from "react";
import classes from "./Dropdown.module.css";

export default function SortItems(props) {
  const handleSort = (order) => {
    props.setOrder(order);
  };

  useEffect(() => {
    props.setOrder("ascending");
  }, []);

  return (
    <div className={classes.container}>
      <label className={classes.label}>Sort by Priority: </label>
      <select
        className={classes.select}
        onChange={(e) => handleSort(e.target.value)}
      >
        <option value="ascending">Ascending</option>
        <option value="descending">Descending</option>
      </select>
    </div>
  );
}
