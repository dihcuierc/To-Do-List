import { useState } from "react";
import Modal from "../UI/Modal";
import classes from "./AddTodo.module.css";
import axios from "axios";
import uniqid from "uniqid";
import toast from "react-hot-toast";

export default function AddTodo(props) {
  const [formData, setFormData] = useState({
    key: uniqid(),
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

  const axiosPostData = async () => {
    await axios
      .post("http://localhost:4000/add", formData)
      .then((res) => toast.success(res.data))
      .catch((err) => toast.error(err));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onClicked(false);
    props.onDataAdd((prev) => [...prev, formData]);
    axiosPostData();
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
