import TodoItems from "./components/TodoItems";
import AddTodo from "./components/AddTodo";
import { Link } from "react-router-dom";
import classes from "./Todolist.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Todolist() {
  const dummyData = [
    {
      id: 1,
      title: "Finish Homework",
      details:
        "Complete the math and history assignments for tomorrow's classes.",
      priority: "High",
      category: "School",
    },
    {
      id: 2,
      title: "Grocery Shopping",
      details: "Buy milk, eggs, bread, and fruits from the supermarket.",
      priority: "Medium",
      category: "Errands",
    },
    {
      id: 3,
      title: "Plan Vacation",
      details:
        "Research and plan a vacation for next summer. Check for flight deals and accommodations.",
      priority: "Low",
      category: "Personal",
    },
  ];

  const [newTodo, setNewTodo] = useState({
    id: "",
    title: "",
    details: "",
    priority: "",
    category: "",
  });

  const [clicked, setClicked] = useState(false);
  const onClickedHandler = (props) => {
    setClicked(props);
  };

  return (
    <div>
      <h1>Todolist</h1>
      <button className={classes.button} onClick={() => onClickedHandler(true)}>
        Add
      </button>
      {clicked && <AddTodo onClicked={onClickedHandler} />}
      <TodoItems items={dummyData} />
    </div>
  );
}

export default Todolist;
