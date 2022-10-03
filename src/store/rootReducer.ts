import { combineReducers } from '@reduxjs/toolkit';

import authReducer, { authSlice } from './slices/auth/authSlice';
import rewardsReducer, { rewardsSlice } from './slices/rewards/rewardsSlice';
import usersReducer, { usersSlice } from './slices/users/usersSlice';

export const rootReducer = combineReducers({
  [authSlice.name]: authReducer,
  [rewardsSlice.name]: rewardsReducer,
  [usersSlice.name]: usersReducer,
});
