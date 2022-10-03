import { createSlice } from '@reduxjs/toolkit';

import { User } from '../../../interfaces';
import { USERS_MOCK } from '../../../mocks';

interface AuthSliceInitialState {
  user: User | null;
  token: string | null;
}

const initialState: AuthSliceInitialState = {
  user: USERS_MOCK[0],
  token: null,
};

export const authSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {},
});

export default authSlice.reducer;
