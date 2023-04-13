import { tasks } from "../data/tasks";
import { createContext, useState, useEffect } from "react";

export const TaskContext = createContext();

// Provider es el componente que engloba al resto de componentes
export function TaskContextProvider(props) {
    // No se alcanza a cargar el objeto porque aun no se crea, por eso es necesario el useEffect que asigna los objetos una vez se crea el componente
    // const [task, setTask] = useState([tasks]);
    const [task, setTask] = useState([]);

    useEffect(() => {
        setTask(tasks);
    }, []);

    // [...arreglo, nuevo elemento] Agrega un nuevo elemento al arreglo (append)
    function createTask(newTask) {
        setTask([
            ...task,
            {
                title: newTask.title,
                description: newTask.description,
                id: task.length,
            },
        ]);
    }

    const deleteTask = (taskID) => setTask(task.filter((t) => t.id !== taskID));
    // const createTask = (newTask) => setTask(task.push(newTask));

    return (
        <TaskContext.Provider
            value={{
                task,
                deleteTask,
                createTask,
            }}
        >
            {props.children}
        </TaskContext.Provider>
    );
}
