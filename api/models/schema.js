const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  key: { type: String },
  title: { type: String, required: true },
  details: { type: String, required: true },
  priority: { type: Number, required: true },
  category: { type: String, required: true },
  done: { type: Boolean, required: true },
});

const Todos = mongoose.model("Todos", todoSchema, "todo_items");
const mySchemas = { Todos: Todos };

module.exports = mySchemas;
