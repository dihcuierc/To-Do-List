import "./App.css";
import Todolist from "./Todolist";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([{ path: "/", element: <Todolist /> }]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
