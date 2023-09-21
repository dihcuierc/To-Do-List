import "./App.css";
import Todolist from "./components/Todolist";
import Header from "./UI/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Todolist />
    </div>
  );
}

export default App;
