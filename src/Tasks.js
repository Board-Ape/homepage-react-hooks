import React, { useState } from 'react';
import uuid from 'uuid/v4';

function Tasks() {
    const [taskText, setTaskText] = useState('');
    const [completedTasks, setCompletedTasks] = useState([]);
    const [tasks, setTasks] = useState([]);

    const updateTaskText = event => {
        setTaskText(event.target.value);
    }

    const addTask = () => {
        setTasks([...tasks, { taskText, id: uuid() }])
        setTaskText('')
    }

    const completeTasks = completedTask => () => {
        setCompletedTasks([...completedTasks, completedTask]);
        setTasks(tasks.filter(task => task.id !== completedTask.id))
    }

    const deleteTask = deletedTask => () => {
        setCompletedTasks(completedTasks.filter(tasks => tasks.id !== deletedTask.id))
    }

    console.log('tasks', tasks);
    console.log('completed tasks', completedTasks)

    return (
        <div>
            <h3>Tasks</h3>
            <div className='form'>
                <input value={taskText} onChange={updateTaskText} />
                <button onClick={addTask}>Add Task</button>
            </div> 
            <div className='task-list'>
                {
                    tasks.map(task => {
                        const { id, taskText } = task;
                        return (
                            <div key={id} onClick={completeTasks(task)}>
                                {taskText}
                            </div>
                        )
                    })
                }
            </div>
            <div className='completed-list'>
                {
                    completedTasks.map(task => {
                        const { id, taskText } = task;
                        return (
                            <div key={id}>
                                {taskText}{' '}
                                <span onClick={deleteTask(task)} className='delete-task'>X</span>
                            </div>    
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Tasks;