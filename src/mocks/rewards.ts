import { Reward } from '../interfaces';

import { USERS_MOCK } from './user';

export const REWARDS_MOCK: Reward[] = [
  {
    id: 'r1',
    recipient: USERS_MOCK[0],
    sender: USERS_MOCK[1],
    amount: 100,
    dt: Date.now(),
    message: 'Hi',
  },
  {
    id: 'r2',
    recipient: USERS_MOCK[0],
    sender: USERS_MOCK[2],
    amount: 100,
    dt: Date.now(),
    message: 'Hi',
  },
  {
    id: 'r3',
    recipient: USERS_MOCK[0],
    sender: USERS_MOCK[2],
    amount: 100,
    dt: Date.now(),
    message: 'Hi',
  },
  {
    id: 'r4',
    recipient: USERS_MOCK[1],
    sender: USERS_MOCK[2],
    amount: 100,
    dt: Date.now(),
    message: 'Hi',
  },
  {
    id: 'r5',
    recipient: USERS_MOCK[0],
    sender: USERS_MOCK[1],
    amount: 100,
    dt: Date.now(),
    message: 'Hi',
  },
  {
    id: 'r6',
    recipient: USERS_MOCK[2],
    sender: USERS_MOCK[1],
    amount: 100,
    dt: Date.now(),
    message: 'Hi',
  },
];
