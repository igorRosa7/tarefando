import React from 'react';
import type { Task } from '../../types/TaskTypes';
import { ListContainer } from './TaskList.styled';
import TaskItem from '../TaskItem/TaskItem';

interface TaskListProps {
  tasks: Task[];
  onDeleteTask: (id: string) => void;
  onToggleComplete: (id: string) => void;
  filterStatus: 'all' | 'pending' | 'completed';
}


const TaskList: React.FC<TaskListProps> = ({ tasks, onDeleteTask, onToggleComplete, filterStatus }) => {

  const getEmptyMessage = () => {
    switch (filterStatus) {
      case 'pending':
        return 'Nenhuma tarefa pendente encontrada.';
      case 'completed':
        return 'Nenhuma tarefa concluída encontrada.';
      default: // 'all' 
        return 'Nenhuma tarefa cadastrada ainda.';
    }
  };
  //apenas irá retornar essas mensagens acima quando a lista estiver vazia, dependendo do filtro aplicado
  return (
    <ListContainer>
      {tasks.length === 0 ? (
        <p className="empty-list-message">
          {getEmptyMessage()} 
        </p>
      ) : (
        tasks.map(task => (
          <TaskItem
            key={task.id} 
            task={task}
            onDeleteTask={onDeleteTask}
            onToggleComplete={onToggleComplete}
          />
        ))
      )}
    </ListContainer>
  );
};

export default TaskList;