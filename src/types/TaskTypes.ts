export type TaskStatus = 'pending' | 'completed';

export type FilterStatus = TaskStatus | 'all';

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  createdAt: Date;
}