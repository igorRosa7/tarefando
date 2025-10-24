import React from 'react';
import type { Task } from '../../types/task';
import { CounterContainer } from './TaskCounter.styled';

interface TaskCounterProps {
  tasks: Task[];
}

const TaskCounter: React.FC<TaskCounterProps> = ({ tasks }) => {

  const pendingCount = tasks.filter(task => task.status === 'pending').length;
  const completedCount = tasks.filter(task => task.status === 'completed').length;

  return (
    <CounterContainer>
      <div className="stat-block">
        <span className="stat-number">{pendingCount}</span>
        <span className="stat-label">Pendentes</span>
      </div>
      <div className="stat-block">
        <span className="stat-number">{completedCount}</span>
        <span className="stat-label">Concluídas</span>
      </div>
    </CounterContainer>
  );
};

export default TaskCounter;