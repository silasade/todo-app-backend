const { create } = require("domain");
const Task = require("../models/task.model");

const getAllTask = async (req, res) => {
    try {
      const { search } = req.query;
  
      let tasks;
      if (search) {
        tasks = await Task.find({
          $or: [
            { name: { $regex: search, $options: "i" } },
            { description: { $regex: search, $options: "i" } },
          ],
        });
      } else {
        tasks = await Task.find();
      }
  
      if (tasks.length === 0) {
        return res.status(404).json({ message: "No tasks found." });
      }
      res.status(200).json(tasks);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
const getTAsk = async (req, res) => {
  try {
    const { id } = req.params;
    const { search } = req.query;
    const task = await Task.findById(id);
    if (!task) {
      res.status(404).json({ message: "Task does not exist" });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
  
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndUpdate(id, req.body);
    if (!task) {
      res.status(404).json({ message: "Task does not exist" });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndDelete(id);
    if (!task) {
      res.status(404).json({ message: "Task does not exits" });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = { getAllTask, getTAsk, createTask, deleteTask, updateTask };
