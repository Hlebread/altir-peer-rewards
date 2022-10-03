import { CardStyleInterpolators } from '@react-navigation/stack';
import { AddRewardScreen } from '../screens';
import RewardsScreen from '../screens/Rewards/Rewards';
import { AppRoutes } from '../types';

export const ROUTES = [
  {
    name: AppRoutes.Rewards,
    component: RewardsScreen,
  },
  {
    name: AppRoutes.AddReward,
    component: AddRewardScreen,
    options: {
      presentation: 'transparentModal',
      cardStyleInterpolator: CardStyleInterpolators.forBottomSheetAndroid,
    },
  },
];
