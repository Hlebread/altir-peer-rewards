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
