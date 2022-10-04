import React, { useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import { RewardsScreen } from '../screens';
import { AppRoutes } from '../types';
import { THEME } from '../constants';
import { FloatingActionButton } from '../components';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.palette.primary.dark,
  },
  tabBarLabelStyle: {
    fontSize: THEME.spacing.md,
    textTransform: 'capitalize',
    fontWeight: THEME.font.weight.medium,
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

const screenOptions = {
  headerShown: false,
  tabBarLabelStyle: styles.tabBarLabelStyle,
  tabBarStyle: styles.tabBarStyle,
  tabBarActiveTintColor: THEME.palette.tertiary.light,
  tabBarInactiveTintColor: THEME.palette.secondary.dark,
  tabBarPressColor: THEME.palette.primary.light,
  tabBarIndicatorStyle: styles.tabBarIndicatorStyle,
};

const Tab = createMaterialTopTabNavigator();

const RewardsNavigator = () => {
  const { navigate } = useNavigation();

  const navigateToAddRewardsScreen = useCallback(
    () => navigate(AppRoutes.AddReward as never),
    [navigate],
  );

  return (
    <View style={styles.container}>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name={AppRoutes.Feed} component={RewardsScreen} />
        <Tab.Screen name={AppRoutes.MyRewards} component={RewardsScreen} />
      </Tab.Navigator>
      <FloatingActionButton onPress={navigateToAddRewardsScreen}>
        <Icon name="add-outline" size={20} />
      </FloatingActionButton>
    </View>
  );
};

export default RewardsNavigator;
