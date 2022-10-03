import { User } from './User.interface';

export interface Reward {
  id: string;
  sender: User;
  recipient: User;
  amount: number;
  message: string;
  dt: number;
}

export interface RewardEntry {
  recipient: string;
  amount: number;
  message: string;
}
