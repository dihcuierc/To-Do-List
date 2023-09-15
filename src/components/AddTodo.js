import { useState } from "react";
import Modal from "../UI/Modal";
import classes from "./AddTodo.module.css";

export default function AddTodo(props) {
  const [formData, setFormData] = useState({
    title: "",
    details: "",
    priority: "1",
    category: "Work",
    done: false,
  });

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onClicked(false);
    props.onDataAdd((prev) => [...prev, formData]);
    fetch(
      "https://to-do-list-15bca-default-rtdb.asia-southeast1.firebasedatabase.app/todo.json",
      {
        method: "POST",
        body: JSON.stringify({
          title: formData.title,
          details: formData.details,
          priority: formData.priority,
          category: formData.category,
        }),
      }
    );
  };

  const handleCancel = () => {
    props.onClicked(false);
  };

  return (
    <Modal className={classes.modal}>
      <div className={classes.content}>
        <form onSubmit={handleSubmit}>
          <div>
            <label className={classes.label} htmlFor="title">
              Title:
            </label>
            <input
              id="title"
              type="text"
              onChange={handleInputChange}
              className={classes.input}
              required
            />
          </div>
          <div>
            <label className={classes.label} htmlFor="details">
              Details:
            </label>
            <input
              id="details"
              type="text"
              onChange={handleInputChange}
              className={classes.input}
            />
          </div>
          <div>
            <label className={classes.label} htmlFor="priority">
              Priority:
            </label>
            <input
              id="priority"
              type="number"
              min="1"
              max="5"
              step="1"
              defaultValue="1"
              onChange={handleInputChange}
              className={classes.input}
            />
          </div>
          <div>
            <label className={classes.label} htmlFor="category">
              Category:
            </label>
            <select
              name="category"
              id="category"
              onChange={(e) => handleInputChange(e)}
              className={classes.input}
            >
              {props.categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <button className={classes.add} type="submit">
            Add
          </button>
          <button
            className={classes.cancel}
            type="button"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </form>
      </div>
    </Modal>
  );
}
