import "./App.css";
import Todolist from "./components/Todolist";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <Layout />
      <Todolist />
    </div>
  );
}

export default App;
