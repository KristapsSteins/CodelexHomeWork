import { useState } from "react";
import { useAppDispatch } from "../../store/hooks";
import { v4 as uuidv4 } from "uuid";
import { setAllAnimals } from "../../store/animalSlice";


function AddAnimals() {
    const dispatch = useAppDispatch();
    const [showForm, setShowForm] = useState(false);

    const [newAnimal, setNewAnimal] = useState({
        name: "",
        image: "",
        species: "Mammals",
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        dispatch(setAllAnimals([{...newAnimal, id: uuidv4()}]));

        setNewAnimal({
            name: "",
            image: "",
            species: "Mammals",
        });

        setShowForm(false);

    };

    return (
        <div>
            {!showForm && (
                <button 
                    className="add_button" 
                    onClick={() => {
                        setShowForm(true);
                    }}
                >
                    Add New Animal
                </button>
            )}
            {showForm && (
                <form onSubmit={handleSubmit}>
                    <label className="add_label">
                        Animal name:
                        <input
                            type="text"
                            value={newAnimal.name}
                            onChange={(e) => {
                                setNewAnimal({...newAnimal, name: e.target.value});
                            }}
                            required
                        />
                    </label>
                    <label className="add_label">
                        Animal image:
                        <input
                            type="text"
                            value={newAnimal.image}
                            onChange={(e) => {
                                setNewAnimal({...newAnimal, image: e.target.value});
                            }}
                            required
                        />
                    </label>
                    <label className="add_select">
                        Animal species:
                        <select
                            value={newAnimal.species}
                            onChange={(e) => {
                                setNewAnimal({...newAnimal, species: e.target.value});
                            }}
                        >
                            <option value="Mammals">Mammals</option>
                            <option value="Fish">Fish</option>
                            <option value="Birds">Birds</option>
                            <option value="Insects">Insects</option>
                        </select>
                    </label>
                    <div className="button_box">
                        <button type="submit" className="add_button">
                            Add Animal
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
}

export default AddAnimals;