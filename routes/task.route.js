const {
  createTask,
  deleteTask,
  getAllTask,
  getTAsk,
  updateTask,
} = require("../controller/task.controller");
const express = require("express");
const router = express.Router();

router.get("/", getAllTask);
router.get("/:id", getTAsk);
router.post("/", createTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;
