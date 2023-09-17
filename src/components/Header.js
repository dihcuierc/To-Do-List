import classes from "./Header.module.css";

export default function Header() {
  return (
    <header className={classes.header}>
      <h1 className={classes.title}>TodoList</h1>
    </header>
  );
}
