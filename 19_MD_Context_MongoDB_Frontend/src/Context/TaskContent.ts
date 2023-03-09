import { createContext } from "react";

type TaskContextType = {
  deleteTask: (id: string) => Promise<{ status: string }>;
};

const TaskContext = createContext<TaskContextType>({
    deleteTask: async () => ({ status: "" }),
});

export default TaskContext;