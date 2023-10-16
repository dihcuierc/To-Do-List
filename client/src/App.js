import "./App.css";
import Todolist from "./components/Todolist";
import Header from "./UI/Header";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App">
      <Header />
      <Todolist />
      <Toaster />
    </div>
  );
}

export default App;
