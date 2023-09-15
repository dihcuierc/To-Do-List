import TodoItems from "./components/TodoItems";
import AddTodo from "./components/AddTodo";
import classes from "./Todolist.module.css";
import { useEffect, useState } from "react";
import SortItems from "./components/SortItems";
import FilterItems from "./components/FilterItems";
import SearchTodo from "./components/SearchTodo";

function Todolist() {
  const categories = [
    "Work",
    "Personal",
    "Home",
    "Health & Fitness",
    "Shopping",
    "Other",
  ];

  const [todolist, setTodolist] = useState([]);
  const [addItemForm, setAddItemForm] = useState(false);
  const [filter, setFilter] = useState("All");
  const [order, setOrder] = useState("ascending");
  const [updatedList, setUpdatedList] = useState(todolist);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchTodo = async () => {
      const response = await fetch(
        "https://to-do-list-15bca-default-rtdb.asia-southeast1.firebasedatabase.app/todo.json"
      );
      const responseData = await response.json();

      const loadedTodo = [];
      for (const key in responseData) {
        loadedTodo.push({
          key: key,
          title: responseData[key].title,
          details: responseData[key].details,
          priority: responseData[key].priority,
          category: responseData[key].category,
          done: responseData[key].done,
        });
      }
      setTodolist(loadedTodo);
    };
    fetchTodo();
  }, []);

  const onClickedHandler = (props) => {
    setAddItemForm(props);
  };

  useEffect(() => {
    const regex = new RegExp(search, "i");
    const searchedItems =
      search.trim() === ""
        ? todolist
        : todolist.filter((item) => regex.test(item.title));
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
        />
      )}
      {updatedList.length !== 0 ? (
        <TodoItems
          updatedList={updatedList}
          onUpdateItems={setTodolist}
          filterCategory={filter}
          order={order}
          items={todolist}
        />
      ) : todolist.length === 0 ? (
        <h1>Add new Todos</h1>
      ) : (
        <h1>No Todos found</h1>
      )}
    </div>
  );
}

export default Todolist;
