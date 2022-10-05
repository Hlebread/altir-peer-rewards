import { createSlice } from '@reduxjs/toolkit';

import { User } from '../../../interfaces';
import { USERS_MOCK } from '../../../mocks';

interface AuthSliceInitialState {
  user: User | null;
}

const initialState: AuthSliceInitialState = {
  user: USERS_MOCK[0],
};

export const authSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {},
});

export default authSlice.reducer;
