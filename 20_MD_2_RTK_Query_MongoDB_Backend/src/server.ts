import express from "express";
import { Request, Response } from "express";
import bodyparser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";

mongoose.set("strictQuery", false);

mongoose.connect("mongodb://127.0.0.1:27017/animals").then(() => {
  console.log("Connected");
});

const animalSchema = new mongoose.Schema({
  name: String,
  image: String,
  species: String,
});

const Animals = mongoose.model("Animals", animalSchema);

const app = express();

app.use(bodyparser.json());
app.use(cors({ origin: "*" }));

app.get("/animals", async (req: Request, res: Response) => {
  const allAnimals = await Animals.find();
  return res.status(200).json(allAnimals);
});

app.post("/animals", async (req: Request, res: Response) => {
  const animal = req.body;
  if (!animal.name || !animal.image || !animal.species) {
    return res.status(400);
  }
  const newAnimal = new Animals({
    name: animal.name,
    image: animal.image,
    species: animal.species,
  });
  try {
    const insertedAnimal = await newAnimal.save();
    return res.status(201).json(insertedAnimal);
  } catch (err) {
    console.error(err);
    return res.status(500);
  }
});

app.delete("/animals/:id", async (req: Request, res: Response) => {
  const animalId = req.params.id;
  try {
    const deletedAnimal = await Animals.findByIdAndDelete({ _id: animalId });
    if (!deletedAnimal) {
      return res.status(404);
    }
    return res.status(200).json();
  } catch (err) {
    console.error(err);
    return res.status(500);
  }
});

app.get("/", (req: Request, res: Response) => {
  res.send("Application works!");
});

app.listen(3004, () => {
  console.log("Application started on port 3004!");
});
