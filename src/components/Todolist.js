import firebase from "../backend/firebase";
import { getDatabase, ref, child, get } from "firebase/database";
import TodoItems from "./TodoItems";
import AddTodo from "./AddTodo";
import classes from "./Todolist.module.css";
import { useEffect, useState } from "react";
import SortItems from "./Tools/SortItems";
import FilterItems from "./Tools/FilterItems";
import SearchTodo from "./Tools/SearchTodo";

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

  const dbRef = ref(getDatabase());
  useEffect(() => {
    get(child(dbRef, "todo/")).then((snapshot) => {
      if (snapshot.exists()) {
        const responseData = snapshot.val();
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
      }
    });
  }, []);

  const onClickedHandler = (props) => {
    setAddItemForm(props);
  };

  useEffect(() => {
    const escapedSearch = search.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(escapedSearch, "i");
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
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <h1 className={classes.header}>Todolist</h1>
        <button
          className={classes.button}
          onClick={() => onClickedHandler(true)}
        >
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
    </div>
  );
}

export default Todolist;
