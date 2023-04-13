import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskCard from "./TaskCard";

function TaskList() {
    // console.log(tasks);

    const { task } = useContext(TaskContext);

    if (task.length === 0) return <h1 className="text-white text-4xl font-bold text-center mt-40">No hay tareas</h1>;

    return (
        <div className="grid grid-cols-4 gap-2 p-4">
            {task.map((val) => (
                <TaskCard task={val} key={val.id} />
            ))}
        </div>
    );
}

export default TaskList;
