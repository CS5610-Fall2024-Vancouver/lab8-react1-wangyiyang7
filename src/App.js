
import './App.css';
import React, { useState } from "react";
import Header from './components/Header';
import TasksList from './components/TasksList';
import AddTask from './components/AddTask';

const initialTasks = [
  { id: 1, text: "Learn React" },
  { id: 2, text: "Do homework" },
  { id: 3, text: "Cook dinner" },
];

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [showForm, setShowForm] = useState(false);

  function deleteTask(id) {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  }

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id:id, text:task };
    console.log(newTask);
    setTasks([...tasks, newTask]);
  };

  const toggleForm = () => {setShowForm(!showForm);};
 
  return (
    <div className="App">
    
      <Header toggleForm={toggleForm} showForm={showForm} />
      {showForm && <AddTask addTask={addTask} />}

      {tasks.length === 0 ? (
        <p>No tasks left</p>
      ) : (
          <TasksList key={tasks.id} tasks={tasks} deleteTask={deleteTask} /> 
      )}
    </div>
  );
}

export default App;
/*

import React, { useState } from 'react';
import AddTask from './components/AddTask';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Initial Task 1' },
    { id: 2, text: 'Initial Task 2' }
  ]);

  const addTask = (taskText) => {
    const newTask = {
      id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      text: taskText
    };
    setTasks([...tasks, newTask]);
  };

  const deleteAllTasks = () => {
    setTasks([]);
  };

  return (
    <div className="App">
      <h1>Task List</h1>
      <AddTask addTask={addTask} />
      {tasks.length === 0 ? (
        <p>No tasks left</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>{task.text}</li>
          ))}
        </ul>
      )}
      <button onClick={deleteAllTasks}>Delete All Tasks</button>
    </div>
  );
}

export default App;*/