import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TodoList = () => {
  const [tasks, setTasks] = useState([
    { task: 'Sample Task', isDone: false, id: uuidv4(), date: new Date().toLocaleString() }
  ]);
  const [newTask, setNewTask] = useState('');
  const [editTaskId, setEditTaskId] = useState(null);

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    const trimmedTask = newTask.trim().toLowerCase();

    const isDuplicate = tasks.some(task => task.task.trim().toLowerCase() === trimmedTask);

    if (newTask.trim() !== '' && !isDuplicate) {
      const currentDateTime = new Date().toLocaleString(); // Get current date and time

      if (editTaskId) {
        // Update task with new date
        const updatedTasks = tasks.map(task =>
          task.id === editTaskId ? { ...task, task: newTask, date: currentDateTime } : task
        );
        setTasks(updatedTasks);
        setEditTaskId(null);
      } else {
        // Add new task with date
        setTasks([...tasks, { task: newTask, isDone: false, id: uuidv4(), date: currentDateTime }]);
      }
      setNewTask(''); // Clear input field
    } else if (isDuplicate) {
      alert('Task already exists in the list!');
    }
  };

  const handleDelete = (id) => {
    const newTasks = tasks.filter((item) => item.id !== id);
    setTasks(newTasks);
  };

  const handleComplete = (id) => {
    const completedTasks = tasks.map((item) => {
      if (id === item.id) item.isDone = !item.isDone;
      return item;
    });

    setTasks(completedTasks);
  };

  const handleEdit = (id, task) => {
    setEditTaskId(id);
    setNewTask(task);
  };

  return (
    <div className='text-center'>
      <h1>Welcome To TodoList</h1>
      <div className="input-group input-group-lg">
        <span className="input-group-text" id="inputGroup-sizing-lg">Enter a Task</span>
        <input 
          type="text" 
          className="form-control" 
          value={newTask}
          onChange={handleInputChange}
          aria-label="Sizing example input" 
          aria-describedby="inputGroup-sizing-lg" 
        />
        <button className="btn btn-primary mx-2" onClick={addTask}>
          {editTaskId ? 'Update' : 'Add'}
        </button>
      </div>

      <ol>
        {tasks.map((item) => (
          <li key={item.id}>
            <span style={{ textDecoration: item.isDone ? 'line-through' : 'none' }}>
              {item.task}
            </span>
            <br />
            <small><em>{item.date}</em></small> {/* Display the task's date and time */}

            <div>
              <button className="btn btn-danger mx-4 my-3" onClick={() => handleDelete(item.id)}>
                Delete
              </button>
              <button className="btn btn-success mx-3 my-3" onClick={() => handleComplete(item.id)}>
                {item.isDone ? 'Undo' : 'Complete'}
              </button>
              <button className="btn btn-warning mx-3 my-3" onClick={() => handleEdit(item.id, item.task)}>
                Edit
              </button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TodoList;
