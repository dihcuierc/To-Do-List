import classes from "./Layout.module.css";
import todoImage from "../assets/image.jpg";

export default function Layout() {
  return (
    <>
      <div>
        <nav className={classes.header}>
          <h1 className={classes.title}>TodoList</h1>
        </nav>

        <div className={classes.mainImage}>
          <img src={todoImage} alt="todo" />
        </div>
      </div>
    </>
  );
}
