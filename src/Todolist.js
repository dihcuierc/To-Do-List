import TodoItems from "./components/TodoItems";
import AddTodo from "./components/AddTodo";

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

  return (
    <div>
      <h1>Todolist</h1>
      <button>hi</button>
      <AddTodo />
      <TodoItems items={dummyData} />
    </div>
  );
}

export default Todolist;
