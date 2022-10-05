import { v4 as uuid } from 'uuid';

import { Reward } from '../interfaces';

import { USERS_MOCK } from './user';

export const REWARDS_MOCK: Reward[] = [
  {
    id: uuid(),
    recipient: USERS_MOCK[0],
    sender: USERS_MOCK[1],
    amount: 237,
    dt: Date.now(),
    message: 'Thanks for amazing songs!',
  },
  {
    id: uuid(),
    recipient: USERS_MOCK[3],
    sender: USERS_MOCK[0],
    amount: 145,
    dt: Date.now(),
    message: 'Thanks for amazing songs!',
  },
  {
    id: uuid(),
    recipient: USERS_MOCK[1],
    sender: USERS_MOCK[0],
    amount: 100,
    dt: 1664835562000,
    message: 'Thanks for amazing songs!',
  },
  {
    id: uuid(),
    recipient: USERS_MOCK[0],
    sender: USERS_MOCK[2],
    amount: 100,
    dt: 1664795962000,
    message:
      'Thanks for amazing songs! Thanks for amazing songs! Thanks for amazing songs!',
  },
  {
    id: uuid(),
    recipient: USERS_MOCK[1],
    sender: USERS_MOCK[2],
    amount: 100,
    dt: 1664579962000,
    message: 'Thanks for amazing songs!',
  },
  {
    id: uuid(),
    recipient: USERS_MOCK[0],
    sender: USERS_MOCK[1],
    amount: 100,
    dt: 1664579962000,
    message: 'Thanks for amazing songs!',
  },
  {
    id: uuid(),
    recipient: USERS_MOCK[2],
    sender: USERS_MOCK[1],
    amount: 100,
    dt: 1656890362000,
    message:
      'Thanks for amazing songs! Thanks for amazing songs! Thanks for amazing songs! Thanks for amazing songs! Thanks for amazing songs! Thanks for amazing songs! Thanks for amazing songs! Thanks for amazing songs!',
  },
];
