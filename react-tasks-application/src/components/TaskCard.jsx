import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
    const { deleteTask } = useContext(TaskContext);

    return (
        <div className="bg-gray-800 text-white rounded-md p-4">
            <h3 className="text-xl font-bold capitalize">{task.title}</h3>
            <p className="text-gray-400 text-sm">
                {task.id} - {task.description}
            </p>
            {/* Es necesario la funcion anonima (la funcion llave que tiene anidado a deleteTask) para que no se ejecute todo el tiempo al iniciar el componente */}
            <button
                onClick={() => deleteTask(task.id)}
                className="p-1 bg-red-600 rounded-lg mt-4 hover:bg-red-400"
            >
                Eliminar tarea
            </button>
            <br />
        </div>
    );
}

export default TaskCard;
