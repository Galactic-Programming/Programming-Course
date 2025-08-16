import React, { useState } from "react";

function ToDoList() {

    const [task, setTask] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTask(task => [...task, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index) {
        const updatedTask = setTask(task => task.filter((_, i) => i !== index));
        setNewTask(updatedTask);
    }

    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTask = [...task];
            const temp = updatedTask[index - 1];
            updatedTask[index - 1] = updatedTask[index];
            updatedTask[index] = temp;
            setTask(updatedTask);
        }
    }

    function moveTaskDown(index) {
        if (index < task.length - 1) {
            const updatedTask = [...task];
            const temp = updatedTask[index + 1];
            updatedTask[index + 1] = updatedTask[index];
            updatedTask[index] = temp;
            setTask(updatedTask);
        }
    }

    return (
        <div className="to-do-list">
            <h1>To-Do-List</h1>

            <div>
                <input type="text" placeholder="Enter a task..." value={newTask} onChange={handleInputChange}/>
                <button className="add-button" onClick={addTask}>Add</button>
            </div>

            <ol>
                {task.map((task, index) => 
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button className="delete-button" onClick={() => deleteTask(index)}>
                            Delete
                        </button>
                        <button className="move-button" onClick={() => moveTaskUp(index)}>🔼</button>
                        <button className="move-button" onClick={() => moveTaskDown(index)}>🔽</button>
                    </li>
                )}
            </ol>
        </div>
    );
}

export default ToDoList;