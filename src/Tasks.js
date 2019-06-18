import React, { useState } from 'react';

function Tasks() {
    const [taskText, setTaskText] = useState('');
    const [tasks, setTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);

    const updateTaskText = event => {
        setTaskText(event.target.value);
    }

    const addTask = () => {
        setTasks([...tasks, taskText])
    }

    console.log('tasks', tasks);

    return (
        <div>
            <h3>Tasks</h3>
            <div className='form'>
                <input value={taskText} onChange={updateTaskText} />
                <button onClick={addTask}>Add Task</button>
            </div>
        </div>
    )
}

export default Tasks;