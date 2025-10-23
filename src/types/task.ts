export type TaksStatus = 'pending' | 'completed';

export type FilterStatus = TaksStatus | 'all';

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaksStatus;
  createdAt: Date;
}