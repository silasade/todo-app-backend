require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const taskRoute = require("./routes/task.route");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  try {
    res.status(200).json("Welcome to the todo app backend");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.use("/api/tasks", taskRoute);
const mongoDBPassword = process.env.mongoDBPassword;
const PORT = process.env.PORT || 5000;

if (!mongoDBPassword) {
  console.error("MongoDB password is missing in the environment variables.");
  process.exit(1); // Exit if the password is not found
}

const mongoURI = `mongodb+srv://silasadegoke331:${mongoDBPassword}@tododb.f6qs0.mongodb.net/?retryWrites=true&w=majority&appName=todoDb`;

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("Connected to todoApp database!");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log("Error connecting to database:", error.message);
    process.exit(1); // Exit if the connection fails
  });
