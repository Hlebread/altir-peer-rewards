import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

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
      const newReward: Reward = {
        ...payload,
        id: uuid(),
      };

      state.rewards.push(newReward);
    },
  },
});

export default rewardsSlice.reducer;
