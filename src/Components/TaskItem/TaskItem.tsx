import React from 'react';
import  type { Task } from '../../types/task';
import { ItemContainer } from './TaskItem.styled';

// Esta interface recebe o objeto task e as funções de manipulação de tarefas como props
interface TaskItemProps {
  task: Task;
  onDeleteTask: (id: string) => void;
  onToggleComplete: (id: string) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onDeleteTask, onToggleComplete }) => {
  
  // Transformando a data em uma string legível no formato DD/MM/AAAA
  const creationDate = task.createdAt.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  return (
    <ItemContainer $isCompleted={task.status === 'completed'}>
    
      <div className="task-info">
        <h3>{task.title}</h3>
        {task.description && <p>{task.description}</p>}
        <span>Criada em: {creationDate}</span>
      </div>

      <div className="task-actions">
        {/* Esse botão marca/desmarca a tarefa como concluída */}
        <button 
          className="toggle-btn" 
          onClick={() => onToggleComplete(task.id)}
        >
          {task.status === 'pending' ? 'Concluir' : 'Desfazer'}
        </button>
        
        {/* Esse botão exclui a tarefa */}
        <button 
          className="delete-btn" 
          onClick={() => onDeleteTask(task.id)}
        >
          Excluir
        </button>
      </div>

    </ItemContainer>
  );
};

export default TaskItem;