import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';

import { AppRoutes } from '../types';
import { AddRewardScreen } from '../screens';

import RewardsNavigator from './RewardsNavigator';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={AppRoutes.Rewards}>
        <Stack.Screen name={AppRoutes.Rewards} component={RewardsNavigator} />
        <Stack.Screen
          name={AppRoutes.AddReward}
          component={AddRewardScreen}
          options={{
            presentation: 'transparentModal',
            cardStyleInterpolator: CardStyleInterpolators.forBottomSheetAndroid,
          }}
        />
      </Stack.Navigator>
    </>
  );
};

export default RootNavigator;
