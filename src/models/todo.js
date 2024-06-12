import mongoose from "mongoose"

const TodoSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  priority: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    required: true
  }
})

const Todo = mongoose.models.todos || mongoose.model("Todo", TodoSchema)

export default Todo
