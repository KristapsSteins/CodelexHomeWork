import { useDeleteAnimalMutation, useGetAllAnimalsQuery } from "../../store/animalsApiSlice";

function GetAnimals() {
    const { data, isLoading, isError} = useGetAllAnimalsQuery();
    const [ deleteAnimal ] = useDeleteAnimalMutation();

    if (isLoading) {
        return <div>loading...</div>;
    }
    
    if (isError) {
        throw new Error("Something went wrong!");
    }

    const handleDelete = (id: string) => {
        deleteAnimal(id);
        console.log(id);
    };

    return (
        <div className="hero">
            {data?.map((animal) => (
                <div key={animal._id} className="animal">
                    <img src={animal.image} alt={animal.name} />
                    <span className="animal_name">Name: {animal.name}</span>
                    <p>Species: {animal.species}</p>
                    <div className="delete_box">
                        <button className="delete_btn" onClick={() => handleDelete(animal._id)}>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default GetAnimals;
