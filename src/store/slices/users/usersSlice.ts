import { createSlice } from '@reduxjs/toolkit';

import { User } from '../../../interfaces';
import { USERS_MOCK } from '../../../mocks';

interface UsersSliceInitialState {
  users: User[];
}

const initialState: UsersSliceInitialState = {
  users: USERS_MOCK,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export default usersSlice.reducer;
