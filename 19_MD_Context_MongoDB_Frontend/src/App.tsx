import "./App.css";
import AddTask from "./components/AddTasks/AddTask";
import GetAllTasks from "./components/getAllTasks/GetAllTasks";
import TaskContext from "./Context/TaskContent";
import axios from "axios";
import { useQueryClient } from "@tanstack/react-query";
import { Tasks } from "./components/getAllTasks/GetAllTasks";

  
function App() {
    const queryClient = useQueryClient();
    const deleteTask = async (id: string) => {
        queryClient.setQueryData<Tasks[]>(["tasks"], (prevData) =>
            prevData?.filter((task) => task._id !== id)
        );
        await axios.delete(`http://localhost:3004/tasks/${id}`);
        return { status: "success" };
    };


    return (
        <TaskContext.Provider value={{ deleteTask }}>
            <div className="container-main">
                <div className="tasks-box">
                    <AddTask />
                    <GetAllTasks />
                </div>
            </div>
        </TaskContext.Provider>
    );
}

export default App;