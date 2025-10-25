//tipos e hooks
import { useState, useEffect, useRef } from 'react';
import type { Task } from './types/TaskTypes';
import type { SelectButtonChangeEvent } from 'primereact/selectbutton';
// componentes do prime react
import { Toast } from 'primereact/toast';
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
//componentes locais
import AppLayout from './Components/AppLayout/AppLayout';
import TaskCounter from './Components/TaskCounter/TaskCounter';
import TaskControls from './Components/TaskControls/TaskControls';
import TaskForm from './Components/TaskForm/TaskForm'
import TaskList from './Components/TaskList/TaskList'
import TaskStatsChart from './Components/TaskStatsChart/TaskStatsChart';

//TaskForm = componente de formulário para adicionar tasks
//TaskList = componente que renderiza a lista de tasks
//AppLayout = componente de layout que organiza o formulário, lista e contador
//TaskCounter = componente que exibe a contagem de tasks
//TaskControls = componente que exibe os botões de filtro e campo de busca
//TaskStatsChart = componente que exibe o gráfico de estatísticas de tasks

type TaskStatusFilter = 'all' | 'pending' | 'completed';

// filtros (e valores) que serão passados para o componente TaskControls, que exibe os botões de filtro.
//Esses filtros também passam para TaskList para exibir a mensagem correta quando a lista estiver vazia
const filterOptions = [
  { label: 'Todas', value: 'all' },
  { label: 'Pendentes', value: 'pending' },
  { label: 'Concluídas', value: 'completed' }
];

function App() {
  // hook para o componente Toast do PrimeReact
  const toast = useRef<Toast>(null);

  // carregando as tasks do localStorage ao iniciar o app
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      const parsedTasks = JSON.parse(savedTasks) as Task[];
      return parsedTasks.map(task => ({
        ...task, 
        createdAt: new Date(task.createdAt), 
      }));
    }
    return [];
  });

  // salvando as tasks no localStorage sempre que o estado mudar
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // estado para o filtro de status e termo de busca
  const [filterStatus, setFilterStatus] = useState<TaskStatusFilter>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  
  // função para adicionar uma nova tarefa, exibindo um toast de sucesso do PrimeReact
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

  // função para excluir uma tarefa após confirmação, utilizando o ConfirmDialog do PrimeReact, e exibir um toast de informação
  const handleDeleteTask = (id: string) => {
    confirmDialog({
      message: 'Tem certeza que deseja excluir esta tarefa?',
      header: 'Confirmação de Exclusão',
      icon: 'pi pi-exclamation-triangle',
      acceptClassName: 'p-button-danger',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      accept: () => {
        setTasks((prevTasks) => prevTasks.filter(task => task.id !== id));
        
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

  // função para alternar o status de conclusão de uma tarefa
  const handleToggleComplete = (id: string) => {
    setTasks((prevTasks) =>
      prevTasks.map(task =>
        task.id === id
        ? { ...task, status: task.status === 'pending' ? 'completed' : 'pending' }
        : task
      )
    );
  };

  // Contagem de tasks. Ao realizar alguma busca pelo searchTerm, a contagem muda. 
  // Já ao filtrar pelo status (FilterStatus), a contagem permanece a mesma (a função está ignorando filteredTasks)
  const counterTasks = tasks.filter(task => {
    const term = searchTerm.toLowerCase();
    return term === '' ||
    task.title.toLowerCase().includes(term) ||
    task.description.toLowerCase().includes(term);
  });
  
  // filtrando pelo STATUS da tarefa, e depois pelos termos de busca. Essa lista filtrada será passada para o componente TaskList, que irá renderizar os itens
  const filteredTasks = tasks.filter(task => {
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
    // constantes utilizadas para o gráfico de estatísticas de tasks (contagem de pendentes e concluídas)
    const pendingCountForChart = counterTasks.filter(task => task.status === 'pending').length;
    const completedCountForChart = counterTasks.filter(task => task.status === 'completed').length;

    // taskList é o intermediário entre o App e o TaskItem, passando as funções como props para que possam ser chamadas nos componentes filhos
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
              filterStatus={filterStatus}
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
