import './App.css'
import React, { useState } from 'react';
import type { Task } from './types/task';
import Header from './Components/header'
import TaskForm from './Components/TaskForm/TaskForm'
import TaskList from './Components/TaskList'


function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTask = (title: string, description: string) => {

     const newTask: Task = {
      id: crypto.randomUUID(), // Gera um ID único e aleatório
      title: title,
      description: description,
      status: 'pending',
      createdAt: new Date(),
    };
    setTasks((prevTasks) => [newTask, ...prevTasks]);
  };

  return (
    <>
      <Header />
      <TaskForm onAddTask={handleAddTask} />
      <TaskList />

    </>
  )
}

export default App
