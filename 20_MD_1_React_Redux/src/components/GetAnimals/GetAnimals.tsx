import { useAppSelector } from "../../store/hooks";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteAnimal } from "../../store/animalSlice";

function GetAnimals() {
    const dispatch = useDispatch();
    
    const { animals } =  useAppSelector((store) => {
        return store.animal;
    });

    const [selectedSpecies, setSelectedSpecies] = useState("All");

    const handleSpeciesChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedSpecies(e.target.value);
    };

    const filteredAnimals = selectedSpecies === "All"
        ? animals
        : animals.filter((animal) => animal.species === selectedSpecies);

    return (
        <div>
            <div className="filter_box">
                <label>
                    Filter by Species:
                </label>
                <select className="filter_select" value={selectedSpecies} onChange={handleSpeciesChange}>
                    <option value="All">All species</option>
                    {animals.map((animal) => (
                        <option key={animal.id} value={animal.species}>{animal.species}</option>
                    ))}
                </select>
            </div>
            <table className="animal_table">
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Species</th>
                </tr>
                {filteredAnimals .map(({ id, name, image, species}) => (
                    <tr key={id}>
                        <td className="table_img"><img src={image} alt={name} /></td>
                        <td>{name}</td>
                        <td>{species}</td>
                        <td className="delete_box">
                            <button className="delete_btn" onClick={() => dispatch(deleteAnimal(id))}>Delete</button>
                        </td>
                    </tr>
                ))}
            </table>
        </div>
    );
}

export default GetAnimals;
