import classes from "./Header.module.css";
import todoImage from "../assets/image.jpg";

export default function Header() {
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
