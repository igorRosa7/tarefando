import React from 'react';
import  type { Task } from '../../types/task';
import { ItemContainer } from './TaskItem.styled';
import { Button } from 'primereact/button';

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

  const isCompleted = task.status === 'completed';

  return (
    <ItemContainer $isCompleted={isCompleted}>
    
      <div className="task-info">
        <h3>{task.title}</h3>
        {task.description && <p>{task.description}</p>}
        <span>Criada em: {creationDate}</span>
      </div>

      <div className="task-actions">
        {/* Esse botão marca/desmarca a tarefa como concluída */}
        <Button 
          icon={isCompleted ? "pi pi-undo" : "pi pi-check"} 
          label={isCompleted ? "Desfazer" : "Concluir"}
          severity="success" 
          outlined={isCompleted} 
          onClick={() => onToggleComplete(task.id)}
        />
        
        {/* Esse botão exclui a tarefa */}
       <Button 
          icon="pi pi-trash" 
          label="Excluir"
          severity="danger" 
          onClick={() => onDeleteTask(task.id)}
        />
      </div>

    </ItemContainer>
  );
};

export default TaskItem;