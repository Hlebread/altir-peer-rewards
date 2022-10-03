import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../types';

const selectSelf = (state: RootState) => state;

export const selectUser = createSelector(
  selectSelf,
  state => state.authentication.user,
);
