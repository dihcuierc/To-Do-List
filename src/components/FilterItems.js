export default function FilterItems(props) {
  const handleFilter = (filter) => {
    let filteredList;
    if (filter === "All") {
      filteredList = props.filteredItems;
    } else {
      filteredList = props.filteredItems.filter(
        (item) => item.category === filter
      );
    }
    props.setFilteredItems(filteredList);
  };
  return (
    <div>
      <label>Filter by Category: </label>
      <select onChange={(e) => handleFilter(e.target.value)}>
        <option value="All">All</option>
        {props.filteredItems.map((item) => (
          <option key={item.index} value={item.category}>
            {item.category}
          </option>
        ))}
      </select>
    </div>
  );
}
