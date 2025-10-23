export type TaksStatus = 'pending' | 'completed';

export type FilterStatus = TaksStatus | 'all';

export interface Task {
  id: number;
  title: string;
  description: string;
  status: TaksStatus;
  createdAt: Date;
}