import express from "express";
import { Request, Response } from "express";
import bodyparser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

mongoose.set("strictQuery", false);

mongoose.connect("mongodb://127.0.0.1:27017/Jokes").then(() => {
  console.log("Connected");
});

const jokesSchema = new mongoose.Schema({
  id: String,
  category: String,
  joke: String,
});

const Jokes = mongoose.model("Jokes", jokesSchema);

const app = express();

app.use(bodyparser.json());
app.use(cors({ origin: "*" }));

app.get("/favorite", async (req: Request, res: Response) => {
  const allJokes = await Jokes.find();
  return res.status(200).json(allJokes);
});

app.post("/addFavorite", async (req: Request, res: Response) => {
  const joke = req.body;
  if (!joke.id || !joke.category || !joke.joke) {
    return res.status(400);
  }

  const newJoke = new Jokes({
    id: joke.id,
    category: joke.category,
    joke: joke.joke,
  });
  try {
    const insertedJoke = await newJoke.save();
    return res.status(201).json(insertedJoke);
  } catch (err) {
    console.log(err);
    return res.status(500);
  }
});

app.delete("/favorite/:id", async (req: Request, res: Response) => {
  const jokeId = req.params.id;
  try {
    const deletedJoke = await Jokes.deleteOne({ id: jokeId });
    if (!deletedJoke) {
      return res.status(404);
    }
    return res.status(200).json();
  } catch (err) {
    console.error(err);
    return res.status(500);
  }
});

app.listen(3004, () => {
  console.log("Application started on port 3004!");
});
