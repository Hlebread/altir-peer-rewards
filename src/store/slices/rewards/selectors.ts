import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../types';

const selectSelf = (state: RootState) => state;

export const selectAllRewards = createSelector(
  selectSelf,
  state => state.rewards.rewards,
);

export const selectUserRewards = createSelector(selectSelf, state =>
  state.rewards.rewards.filter(
    item => item.recipient.id === state.authentication.user?.id,
  ),
);

export const selectGivenAmount = createSelector(selectSelf, state =>
  state.rewards.rewards.reduce(
    (accumulator, current) =>
      current.sender.id === state.authentication.user?.id
        ? accumulator + current.amount
        : accumulator,
    0,
  ),
);

export const selectRecievedAmount = createSelector(selectSelf, state =>
  state.rewards.rewards.reduce(
    (accumulator, current) =>
      current.recipient.id === state.authentication.user?.id
        ? accumulator + current.amount
        : accumulator,
    0,
  ),
);
