import React from 'react';
import type { Task } from '../../types/task';
import { ListContainer } from './TaskList.styled';
import TaskItem from '../TaskItem/TaskItem';

interface TaskListProps {
  tasks: Task[];
  onDeleteTask: (id: string) => void;
  onToggleComplete: (id: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onDeleteTask, onToggleComplete }) => {
  return (
    <ListContainer>
      {tasks.length === 0 ? (
        <p className="empty-list-message">
          Nenhuma tarefa cadastrada ainda.
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