import "./App.css";
import Todolist from "./Todolist";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddTodo from "./components/AddTodo";
import RootLayout from "./Root";
import Error from "./Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Todolist /> },
      { path: "add", element: <AddTodo /> },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
