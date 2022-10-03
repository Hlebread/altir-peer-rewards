import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../types';

const selectSelf = (state: RootState) => state;

export const selectAllUsers = createSelector(
  selectSelf,
  state => state.users.users,
);
