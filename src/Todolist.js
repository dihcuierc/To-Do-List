import TodoItems from "./components/TodoItems";
import AddTodo from "./components/AddTodo";
import classes from "./Todolist.module.css";
import { useEffect, useState } from "react";
import SortItems from "./components/SortItems";
import FilterItems from "./components/FilterItems";

function Todolist() {
  const dummyData = [
    {
      id: 1,
      title: "Finish Homework",
      details:
        "Complete the math and history assignments for tomorrow's classes.",
      priority: 1,
      category: "Work",
    },
    {
      id: 2,
      title: "Grocery Shopping",
      details: "Buy milk, eggs, bread, and fruits from the supermarket.",
      priority: 2,
      category: "Home",
    },
    {
      id: 3,
      title: "Plan Vacation",
      details:
        "Research and plan a vacation for next summer. Check for flight deals and accommodations.",
      priority: 3,
      category: "Other",
    },
  ];

  const [todolist, setTodolist] = useState(dummyData);
  const [addItemForm, setAddItemForm] = useState(false);
  const [filteredItems, setFilteredItems] = useState(todolist);
  const onClickedHandler = (props) => {
    setAddItemForm(props);
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.header}>Todolist</h1>
      <button className={classes.button} onClick={() => onClickedHandler(true)}>
        Add
      </button>
      <SortItems todolist={todolist} setTodolist={setTodolist} />
      <FilterItems
        filteredItems={todolist}
        setFilteredItems={setFilteredItems}
      />
      {addItemForm && (
        <AddTodo
          onClicked={onClickedHandler}
          data={todolist}
          onDataAdd={setTodolist}
        />
      )}
      <TodoItems items={filteredItems} onRemoveItem={setTodolist} />
    </div>
  );
}

export default Todolist;
