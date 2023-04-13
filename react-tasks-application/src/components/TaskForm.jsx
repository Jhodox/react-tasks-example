import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
    // Hoocks
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const { createTask } = useContext(TaskContext);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(title, " - ", description);
        createTask({
            title,
            description,
        });
        setTitle("");
        setDescription("");
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-neutral-700 p-10 mb-4 max-w-md mx-auto "
        >
            <h1 className="mb-4 text-2xl font-bold text-white">Crear tarea</h1>
            <input
                placeholder="Escribe tu tarea"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                autoFocus
                className="bg-slate-300 p-3 w-full mb-3"
            />
            <textarea
                placeholder="Escribe la descripción"
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                className="bg-slate-300 p-3 w-full mb-3"
            />
            <button className=" bg-indigo-500 px-3 py-1 text-white">
                Guardar
            </button>
        </form>
    );
}

export default TaskForm;
