import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../types';

const selectSelf = (state: RootState) => state;

export const selectAllRewards = createSelector(
  selectSelf,
  state => state.rewards.rewards,
);

export const selectUserRewards = createSelector(selectSelf, state =>
  state.rewards.rewards.filter(
    item =>
      item.recipient.displayName === state.authentication.user?.displayName,
  ),
);

export const selectGivenAmount = createSelector(selectSelf, state =>
  state.rewards.rewards.reduce(
    (accumulator, current) =>
      current.sender.displayName === state.authentication.user?.displayName
        ? accumulator + current.amount
        : accumulator,
    0,
  ),
);

export const selectRecievedAmount = createSelector(selectSelf, state =>
  state.rewards.rewards.reduce(
    (accumulator, current) =>
      current.recipient.displayName === state.authentication.user?.displayName
        ? accumulator + current.amount
        : accumulator,
    0,
  ),
);
