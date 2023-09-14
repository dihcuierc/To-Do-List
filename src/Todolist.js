import TodoItems from "./components/TodoItems";
import AddTodo from "./components/AddTodo";
import classes from "./Todolist.module.css";
import { useEffect, useState } from "react";
import SortItems from "./components/SortItems";
import FilterItems from "./components/FilterItems";
import SearchTodo from "./components/SearchTodo";

function Todolist() {
  const dummyData = [
    {
      id: 1,
      title: "Finish Homework",
      details:
        "Complete the math and history assignments for tomorrow's classes.",
      priority: 3,
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
  const [filter, setFilter] = useState("All");
  const [order, setOrder] = useState("ascending");
  const [updatedList, setUpdatedList] = useState(todolist);
  const [search, setSearch] = useState("");
  const onClickedHandler = (props) => {
    setAddItemForm(props);
  };

  useEffect(() => {
    const regex = new RegExp(search, "i");
    const searchedItems =
      search.trim() === ""
        ? todolist
        : todolist.filter((item) => regex.test(item.title));
    console.log(searchedItems);

    const filteredItems =
      filter === "All"
        ? searchedItems
        : searchedItems.filter((item) => item.category === filter);

    const sortedList = [...filteredItems].sort((item1, item2) => {
      if (order === "ascending") {
        return item1.priority - item2.priority;
      } else {
        return item2.priority - item1.priority;
      }
    });
    setUpdatedList(sortedList);
  }, [filter, order, todolist, search]);

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
      <SearchTodo search={search} setSearch={setSearch} />
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
