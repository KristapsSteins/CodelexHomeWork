import axios from "axios";
import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";


function AddTask() {
    const [addTask, setAddTask] = useState("");
    const queryClient = useQueryClient();

    const handleSubmit = () => {
        return axios.post("http://localhost:3004/tasks", { task: addTask });
    };

    const { mutate } = useMutation(handleSubmit, {
        onSuccess: () => {
            queryClient.invalidateQueries(["tasks"]);
        }
    });

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        mutate();
        setAddTask("");
    };


    return (
        <>
            <h1>My to do tasks:</h1>
            <div className="row mt-3 gap-3">
                <form 
                    className="d-flex gap-3 justify-content-center" 
                    onSubmit={handleFormSubmit}
                >
                    <div className="col-10">
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Write your task" 
                            onChange={(e) => setAddTask(e.target.value)}
                            value={addTask}
                            required/>
                    </div>
                    <div className="col-2">
                        <button type="submit" className="btn btn-secondary">
                                Add task
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default AddTask;
