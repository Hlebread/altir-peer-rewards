import { CardStyleInterpolators } from '@react-navigation/stack';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

import { AddRewardScreen, RewardsScreen } from '../screens';
import { AppRoutes } from '../types';

export const ROUTES = [
  {
    name: AppRoutes.Rewards,
    component: gestureHandlerRootHOC(RewardsScreen),
  },
  {
    name: AppRoutes.AddReward,
    component: gestureHandlerRootHOC(AddRewardScreen),
    options: {
      presentation: 'transparentModal' as const,
      cardStyleInterpolator: CardStyleInterpolators.forBottomSheetAndroid,
    },
  },
];
