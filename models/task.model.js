const { timeStamp } = require("console");
const mongoose = require("mongoose");
const { type } = require("os");
const TaskSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name of task is required"],
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timeStamp: true,
  }
);
const Task = mongoose.model("Task", TaskSchema);
module.exports=Task
