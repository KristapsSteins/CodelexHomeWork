import { useState } from "react";
import { useAddAnimalMutation } from "../../store/animalsApiSlice";

function AddAnimals() {
    const [showForm, setShowForm] = useState(false);

    const [newAnimal, setNewAnimal] = useState({
        name: "",
        image: "",
        species: "Mammals",
    });

    const [ addAnimal ] = useAddAnimalMutation();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
      
        if (!newAnimal.name || !newAnimal.image || !newAnimal.species) {
            console.log("Please fill all required fields");
            return;
        }
      
        const urlRegex = /^(http|https):\/\/[^ "]+$/;
        if (!urlRegex.test(newAnimal.image)) {
            console.log("Please enter a valid image URL");
            return;
        }
      
        addAnimal(newAnimal);
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
                            onChange={(e) => setNewAnimal({...newAnimal, name: e.target.value})}
                            required
                        />
                    </label>
                    <label className="add_label">
                        Animal image:
                        <input
                            type="text"
                            value={newAnimal.image}
                            onChange={(e) => setNewAnimal({...newAnimal, image: e.target.value})}
                            required
                        />
                    </label>
                    <label className="add_select">
                        Animal species:
                        <select
                            value={newAnimal.species}
                            onChange={(e) => setNewAnimal({...newAnimal, species: e.target.value})}
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