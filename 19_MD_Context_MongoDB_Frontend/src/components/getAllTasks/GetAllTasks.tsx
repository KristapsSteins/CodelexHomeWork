import axios from "axios";
import { useQuery, useMutation } from "@tanstack/react-query";
import { RiCloseCircleLine } from "react-icons/ri";
import TaskContext from "../../Context/TaskContent";
import { useContext } from "react";


export type Tasks = {
    _id: string;
    task: string;
    date: string;
};

function GetAllTasks() {
    const { deleteTask } = useContext(TaskContext);
    const { isLoading, isError, data } = useQuery<Tasks[]>( 
        ["tasks"],
        () => 
            axios
                .get("http://localhost:3004/tasks")
                .then((res) => res.data),
    );

    const { mutate: deleteMutate } = useMutation(deleteTask);

    const splitDate = (date: string) => {
        const newDate = date.split("T")[0];
        return newDate;
    };

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    if (isError || !data) {
        throw Error("Something went bad");
    }

    return (
        <>
            {data.map(({ _id, task, date}) => {
                return (
                    <div className="row" key={_id}>
                        <div className="col-12 task-box">
                            <span>{task}</span>
                            {splitDate(date)}
                            <div className="icon">
                                <RiCloseCircleLine 
                                    key={_id}
                                    onClick={() => deleteMutate(_id)}
                                />
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
}

export default GetAllTasks;