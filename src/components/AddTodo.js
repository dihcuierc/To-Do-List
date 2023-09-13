import { useState } from "react";
import Modal from "../UI/Modal";
import classes from "./AddTodo.module.css";

export default function AddTodo(props) {
  const [formData, setFormData] = useState({
    title: "",
    details: "",
    priority: "1",
    category: "",
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
    if (formData.category === "") {
      formData.category = "Work";
    }
    props.onClicked(false);
    props.onDataAdd((prev) => [...prev, formData]);
  };

  return (
    <Modal className={classes.modal}>
      <div className={classes.content}>
        <form>
          <div className={classes.input}>
            <label className={classes.label} htmlFor="title">
              Title:
            </label>
            <input id="title" type="text" onChange={handleInputChange} />
          </div>
          <div className={classes.input}>
            <label className={classes.label} htmlFor="details">
              Details:
            </label>
            <input id="details" type="text" onChange={handleInputChange} />
          </div>
          <div className={classes.input}>
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
            />
          </div>
          <div className={classes.input}>
            <label className={classes.label} htmlFor="category">
              Category:
            </label>
            <select
              name="category"
              id="category"
              onChange={(e) => handleInputChange(e)}
            >
              {props.categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          <button className={classes.add} type="submit" onClick={handleSubmit}>
            Add
          </button>
          <button className={classes.cancel} type="submit">
            Cancel
          </button>
        </form>
      </div>
    </Modal>
  );
}
