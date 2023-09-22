import classes from "./Header.module.css";
import todoImage from "../assets/image.jpg";
import TodoHeaderIcon from "../assets/TodoHeader.svg";

export default function Header() {
  return (
    <>
      <div>
        <nav className={classes.header}>
          <img
            src={TodoHeaderIcon}
            alt="ToDo Header Icon"
            width="40"
            height="40"
          />
          <h1 className={classes.title}>TodoList</h1>
        </nav>

        <div className={classes.mainImage}>
          <img src={todoImage} alt="todo" />
        </div>
      </div>
    </>
  );
}
