import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StyleSheet, Text, View } from 'react-native';
import { THEME } from '../constants';
import { AppRoutes } from '../types';

import { ROUTES } from './routes';

const styles = StyleSheet.create({
  tabBarLabelStyle: {
    fontSize: THEME.spacing.md,
    textTransform: 'capitalize',
    fontWeight: THEME.font.weight.bold,
  },
  tabBarStyle: {
    width: '100%',
    overflow: 'hidden',
    borderTopLeftRadius: THEME.spacing.lg,
    borderTopRightRadius: THEME.spacing.lg,
    backgroundColor: THEME.palette.secondary.light,
    elevation: 0,
  },
  tabBarIndicatorStyle: {
    height: '100%',
    backgroundColor: THEME.palette.primary.light,
  },
  button: {
    position: 'absolute',
    bottom: THEME.spacing.lg,
    right: THEME.spacing.lg,
  },
});

const Tab = createMaterialTopTabNavigator();

// const navigationOptions = {
//   headerShown: false,
//   tabBarLabelStyle: styles.tabBarLabelStyle,
//   tabBarStyle: styles.tabBarStyle,
//   tabBarActiveTintColor: THEME.tertiary.light,
//   tabBarInactiveTintColor: COLORS.secondary.dark,
//   tabBarPressColor: COLORS.primary.light,
//   tabBarIndicatorStyle: styles.tabBarIndicatorStyle,
// };

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <>
      {/* <Tab.Navigator>
        {ROUTES.map(({ name, ...rest }, key) => (
          <Tab.Screen key={key} name={name} {...rest} />
        ))}
      </Tab.Navigator> */}
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={AppRoutes.Rewards}>
        {ROUTES.map(({ name, ...rest }, key) => (
          <Stack.Screen key={key} name={name} {...rest} />
        ))}
      </Stack.Navigator>
    </>
  );
};

export default RootNavigator;
