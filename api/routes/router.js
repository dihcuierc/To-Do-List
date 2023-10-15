const express = require("express");
const router = express.Router();
const schemas = require("../models/schema");

router.post("/add", async (req, res) => {
  const { key, title, details, priority, category, done } = req.body;

  const newTodo = new schemas.Todos({
    key: key,
    title: title,
    details: details,
    priority: priority,
    category: category,
    done: done,
  });
  const saveTodo = await newTodo.save();
  if (saveTodo) {
    res.send("Todo added successfully");
  } else {
    res.send("Failed to add item");
  }
  res.end();
});

router.get("/todoitems", async (req, res) => {
  const todo = schemas.Todos;
  const todoData = await todo.find({}).exec();
  if (todoData) {
    res.send(JSON.stringify(todoData));
  } else {
    res.status(404).send("Unable to retrieve data");
  }
});

router.delete("/todoitems/:id", async (req, res) => {
  const todo = schemas.Todos;
  const result = await todo.findOneAndDelete({ key: req.params.id });
  if (result) {
    res.send("Todo deleted successfully");
  } else {
    res.status(404).send("Todo not found");
  }
});

router.put("/todoitems/:id", async (req, res) => {
  const todo = schemas.Todos;
  const { id } = req.params;

  const updatedTodo = await todo.findOneAndUpdate(
    { key: id },
    {
      title: req.body.title,
      details: req.body.details,
      priority: req.body.priority,
      category: req.body.category,
      done: true,
    },
    { new: true }
  );

  if (updatedTodo) {
    res.send("Todo updated successfully");
  } else {
    res.status(404).send("Failed to update item");
  }
});

module.exports = router;
