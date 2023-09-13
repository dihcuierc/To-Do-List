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
      priority: 3,
      category: "Work",
      done: false,
    },
    {
      id: 2,
      title: "Grocery Shopping",
      details: "Buy milk, eggs, bread, and fruits from the supermarket.",
      priority: 2,
      category: "Home",
      done: false,
    },
    {
      id: 3,
      title: "Plan Vacation",
      details:
        "Research and plan a vacation for next summer. Check for flight deals and accommodations.",
      priority: 3,
      category: "Other",
      done: false,
    },
  ];

  const categories = [
    "Work",
    "Personal",
    "Home",
    "Health & Fitness",
    "Shopping",
    "Other",
  ];

  const [todolist, setTodolist] = useState(dummyData);
  const [addItemForm, setAddItemForm] = useState(false);
  const [filter, setFilter] = useState("all");
  const [order, setOrder] = useState("ascending");
  const [updatedList, setUpdatedList] = useState(todolist);
  const onClickedHandler = (props) => {
    setAddItemForm(props);
  };

  useEffect(() => {
    const filteredItems =
      filter === "All"
        ? todolist
        : todolist.filter((item) => item.category === filter);
    setUpdatedList(filteredItems);

    const sortedList = [...filteredItems].sort((item1, item2) => {
      if (order === "ascending") {
        return item1.priority - item2.priority;
      } else {
        return item2.priority - item1.priority;
      }
    });
    setUpdatedList(sortedList);
  }, [filter, order, todolist]);

  return (
    <div className={classes.container}>
      <h1 className={classes.header}>Todolist</h1>
      <button className={classes.button} onClick={() => onClickedHandler(true)}>
        Add
      </button>
      <SortItems setOrder={setOrder} />
      <FilterItems
        filterCategory={todolist}
        setFilter={setFilter}
        categories={categories}
      />
      {addItemForm && (
        <AddTodo
          onClicked={onClickedHandler}
          data={todolist}
          onDataAdd={setTodolist}
          categories={categories}
          add={{ title: "", details: "", priority: "", category: "", done: "" }}
        />
      )}
      <TodoItems
        updatedList={updatedList}
        onUpdateItems={setTodolist}
        filterCategory={filter}
        order={order}
        items={todolist}
      />
    </div>
  );
}

export default Todolist;
