import { createSlice,  PayloadAction } from "@reduxjs/toolkit";

const animalsFromLocalStorage = localStorage.getItem("AllAnimalsStorage") || "[]";
const initialAnimals = JSON.parse(animalsFromLocalStorage);

type Animal = {
    id: string,
    name: string,
    image: string,
    species: string
}

interface AnimalState {
    animals: Animal[]
  }

const initialState: AnimalState = {
    animals: initialAnimals,
};

const animalSlice = createSlice({
    name: "animal",
    initialState,
    reducers: {
        setAllAnimals: (state, { payload }: PayloadAction<Animal[]>) => {
            state.animals = [...state.animals, ...payload];
            localStorage.setItem("AllAnimalsStorage", JSON.stringify(state.animals));
        },
        deleteAnimal: (state, { payload }: PayloadAction<string>) => {
            state.animals = state.animals.filter(animal => animal.id!== payload);
            localStorage.setItem("AllAnimalsStorage", JSON.stringify(state.animals));
        },
    }
});

export const { setAllAnimals, deleteAnimal } = animalSlice.actions;

export default animalSlice.reducer;