import './App.css'
import React, { useState } from 'react';
import type { Task } from './types/task';
import Header from './Components/header'
import TaskForm from './Components/TaskForm/TaskForm'
import TaskList from './Components/TaskList/TaskList'


function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  //Nas funções abaixo, o setTasks está sendo utilizado para atualizar o estado das tarefas com base nas ações do usuário
  //TaskList é o intermediário entre o App e o TaskItem, passando as funções como props para que possam ser chamadas nos componentes filhos

  const handleAddTask = (title: string, description: string) => {

     const newTask: Task = {
      id: crypto.randomUUID(), // Gera um ID único e aleatório para cada task
      title: title,
      description: description,
      status: 'pending',
      createdAt: new Date(),
    };
    setTasks((prevTasks) => [newTask, ...prevTasks]);
  };

  
  const handleDeleteTask = (id: string) => {
    if (window.confirm('Tem certeza que deseja excluir esta tarefa?')) {
      setTasks((prevTasks) => prevTasks.filter(task => task.id !== id));
    }
  };

  
  const handleToggleComplete = (id: string) => {
    setTasks((prevTasks) =>
      prevTasks.map(task =>
        task.id === id
          ? { ...task, status: task.status === 'pending' ? 'completed' : 'pending' }
          : task
      )
    );
  };

  return (
    <>
      <Header />
      <TaskForm onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} onToggleComplete={handleToggleComplete} />

    </>
  )
}

export default App
