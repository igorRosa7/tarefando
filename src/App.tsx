import './App.css'
import { useState, useEffect, useRef } from 'react';
import { Toast } from 'primereact/toast';
import type { Task } from './types/task';
import TaskForm from './Components/TaskForm/TaskForm'
import TaskList from './Components/TaskList/TaskList'
import AppLayout from './Components/AppLayout/AppLayout';
import TaskCounter from './Components/TaskCounter/TaskCounter';
import type { SelectButtonChangeEvent } from 'primereact/selectbutton';
import TaskControls from './Components/TaskControls/TaskControls';
import TaskStatsChart from './Components/TaskStatsChart/TaskStatsChart';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';

type TaskStatusFilter = 'all' | 'pending' | 'completed';

const filterOptions = [
  { label: 'Todas', value: 'all' },
  { label: 'Pendentes', value: 'pending' },
  { label: 'Concluídas', value: 'completed' }
];

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

  const [filterStatus, setFilterStatus] = useState<TaskStatusFilter>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');

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
    confirmDialog({
      message: 'Tem certeza que deseja excluir esta tarefa?',
      header: 'Confirmação de Exclusão',
      icon: 'pi pi-exclamation-triangle',
      acceptClassName: 'p-button-danger',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      accept: () => {
        // A LÓGICA DE EXCLUSÃO VAI AQUI DENTRO (só roda se clicar 'Sim')
        setTasks((prevTasks) => prevTasks.filter(task => task.id !== id));
        // Opcional: Mostrar um toast de sucesso após excluir
        toast.current?.show({
          severity: 'info',
          summary: 'Excluído',
          detail: 'Tarefa excluída com sucesso.',
          life: 3000
        });
      },
      reject: () => {

      }
    });
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

  const counterTasks = tasks.filter(task => {
    const term = searchTerm.toLowerCase();
    return term === '' ||
      task.title.toLowerCase().includes(term) ||
      task.description.toLowerCase().includes(term);
  });

  // filtrando pelo STATUS da tarefa. Essa lista filtrada será passada para o componente TaskList
  const filteredTasks = tasks
    .filter(task => {
      if (filterStatus === 'pending') return task.status === 'pending';
      if (filterStatus === 'completed') return task.status === 'completed';
      return true; // se for 'all', retorne todas
    })
    // filtrando pelos termos de busca no título ou descrição, depois de passar pelo filtro de status
    .filter(task => {
      const term = searchTerm.toLowerCase();
      return (
        task.title.toLowerCase().includes(term) ||
        task.description.toLowerCase().includes(term)
      );
    });

  const pendingCountForChart = counterTasks.filter(task => task.status === 'pending').length;
  const completedCountForChart = counterTasks.filter(task => task.status === 'completed').length;

  return (
    <>
      <Toast ref={toast} />
      <ConfirmDialog />
      <AppLayout
        mainContent={
          <>
            <TaskCounter tasks={counterTasks} />
            <TaskList
              tasks={filteredTasks}
              onDeleteTask={handleDeleteTask}
              onToggleComplete={handleToggleComplete}
            />
          </>
        }
        sidebar={
          <>
            <TaskForm
              onAddTask={handleAddTask}
              toastRef={toast}
            />
            <TaskControls
              filterOptions={filterOptions}
              filterStatus={filterStatus}
              onFilterChange={(e: SelectButtonChangeEvent) => setFilterStatus(e.value)}
              searchTerm={searchTerm}
              onSearchChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
            />
            <TaskStatsChart
              pendingCount={pendingCountForChart}
              completedCount={completedCountForChart}
            />
          </>

        }
      />

    </>
  )
}

export default App
