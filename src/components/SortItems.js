import { useState } from "react";

export default function SortItems(props) {
  const [sortOrder, setSortOrder] = useState("ascending");
  const handleSort = (order) => {
    setSortOrder(order);
    const sortedList = [...props.todolist].sort((a, b) => {
      if (sortOrder === "ascending") {
        return a.priority - b.priority;
      } else {
        return b.priority - a.priority;
      }
    });
    props.setTodolist(sortedList);
  };

  return (
    <div>
      <label>Sort by Priority: </label>
      <select onChange={(e) => handleSort(e.target.value)}>
        <option value="ascending">Ascending</option>
        <option value="descending">Descending</option>
      </select>
    </div>
  );
}
