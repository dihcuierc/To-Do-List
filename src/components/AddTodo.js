import Input from "../UI/Input";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import classes from "../UI/Input.module.css";

export default function AddTodo(props) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    details: "",
    priority: "1",
    category: "",
  });

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    // Update the corresponding property in the state object
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    props.onClicked(false);
  };

  return (
    <form>
      <div className={classes.input}>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" onChange={handleInputChange} />
      </div>
      <div className={classes.input}>
        <label htmlFor="details">Details</label>
        <input id="details" type="text" onChange={handleInputChange} />
      </div>
      <div className={classes.input}>
        <label htmlFor="priority">Priority</label>
        <input
          id="priority"
          type="number"
          min="1"
          max="5"
          step="1"
          defaultValue="1"
          onChange={handleInputChange}
        />
      </div>
      <div className={classes.input}>
        <label htmlFor="category">Category</label>
        <input id="category" type="text" onChange={handleInputChange} />
      </div>
      <button type="submit" onClick={handleSubmit}>
        Add
      </button>
    </form>
  );
}
