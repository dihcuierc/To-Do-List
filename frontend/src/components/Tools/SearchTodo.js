import classes from "./SearchTodo.module.css";

export default function SearchTodo({ setSearch, search }) {
  const onSearchClick = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className={classes.container}>
      <label className={classes.label} htmlFor="search-form">
        <input
          type="search"
          name="search-form"
          id="search-form"
          className={classes.input}
          placeholder="Search for..."
          value={search}
          onChange={onSearchClick}
        />
      </label>
    </div>
  );
}
