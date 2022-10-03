import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Reward } from '../../../interfaces';
import { REWARDS_MOCK } from '../../../mocks';

interface RewardsSliceInitialState {
  rewards: Reward[];
}

const initialState: RewardsSliceInitialState = {
  rewards: REWARDS_MOCK,
};

export const rewardsSlice = createSlice({
  name: 'rewards',
  initialState,
  reducers: {
    addReward(state, { payload }: PayloadAction<Reward>) {
      state.rewards.push(payload);
    },
  },
});

export default rewardsSlice.reducer;
