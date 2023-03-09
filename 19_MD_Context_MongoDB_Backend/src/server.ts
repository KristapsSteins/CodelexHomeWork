import express from "express";
import { Request, Response } from "express";
import bodyparser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

mongoose.set("strictQuery", false);

mongoose.connect("mongodb://127.0.0.1:27017/tasks").then(() => {
  console.log("Connected");
});

const taskSchema = new mongoose.Schema({
  task: String,
  date: {
    type: Date,
    default: Date.now(),
  },
  isDone: Boolean,
});

const Tasks = mongoose.model("Tasks", taskSchema);

const app = express();

app.use(bodyparser.json());
app.use(cors({ origin: "*" }));

app.get("/tasks", async (req: Request, res: Response) => {
  const allTasks = await Tasks.find();
  return res.status(200).json(allTasks);
});

app.post("/tasks", async (req: Request, res: Response) => {
  const task = req.body;
  if (!task) {
    return res.status(400);
  }
  const newTask = new Tasks({
    task: task.task,
    isDone: true,
  });
  try {
    const insertedTask = await newTask.save();
    return res.status(201).json(insertedTask);
  } catch (err) {
    console.error(err);
    return res.status(500);
  }
});

app.delete("/tasks/:id", async (req: Request, res: Response) => {
  const taskId = req.params.id;
  try {
    const deletedTask = await Tasks.findByIdAndDelete({ _id: taskId });
    if (!deletedTask) {
      return res.status(404);
    }
    return res.status(200);
  } catch (err) {
    console.error(err);
    return res.status(500);
  }
});

app.listen(3004, () => {
  console.log("Application started on port 3004!");
});
