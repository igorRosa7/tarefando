import './App.css'
import { useState , useEffect, useRef} from 'react';
import { Toast } from 'primereact/toast';
import type { Task } from './types/task';
import TaskForm from './Components/TaskForm/TaskForm'
import TaskList from './Components/TaskList/TaskList'
import AppLayout from './Components/AppLayout/AppLayout';
import TaskCounter from './Components/TaskCounter/TaskCounter';

function App() {
  const toast = useRef<Toast>(null);


  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      const parsedTasks = JSON.parse(savedTasks) as Task[];
      return parsedTasks.map(task => ({
        ...task, // Copia todas as chaves (id, title, description, status)
        createdAt: new Date(task.createdAt), // E sobrescreve o createdAt, convertendo a string em Date
      }));
    }
    return [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

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
    toast.current?.show({ 
      severity: 'success', 
      summary: 'Sucesso!', 
      detail: 'Tarefa adicionada.', 
      life: 3000
    });
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
    <Toast ref={toast} />
    <AppLayout>
      <TaskForm 
          onAddTask={handleAddTask} 
          toastRef={toast} 
        />

        <TaskCounter tasks={tasks} />
        
    <TaskList
          tasks={tasks}
          onDeleteTask={handleDeleteTask}
          onToggleComplete={handleToggleComplete}
        />
    </AppLayout>
  


    </>
  )
}

export default App
