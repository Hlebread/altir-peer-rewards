import React, { useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

import { FloatingActionButton } from '../components';
import { THEME } from '../constants';
import { RewardsScreen } from '../screens';
import { AppRoutes } from '../types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBarLabel: {
    fontSize: THEME.spacing.md,
    textTransform: 'capitalize',
    fontWeight: THEME.font.weight.medium,
  },
  tabBar: {
    width: '100%',
    overflow: 'hidden',
    borderTopLeftRadius: THEME.shape * 2,
    borderTopRightRadius: THEME.shape * 2,
    backgroundColor: THEME.palette.primary.dark,
    elevation: 0,
  },
  tabBarIndicator: {
    height: '100%',
    backgroundColor: THEME.palette.background.light,
  },
});

const screenOptions = {
  headerShown: false,
  tabBarLabelStyle: styles.tabBarLabel,
  tabBarStyle: styles.tabBar,
  tabBarActiveTintColor: THEME.palette.secondary.main,
  tabBarInactiveTintColor: THEME.palette.secondary.contrastText,
  tabBarPressColor: THEME.palette.primary.light,
  tabBarIndicatorStyle: styles.tabBarIndicator,
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
        <Tab.Screen
          name={AppRoutes.MyRewards}
          initialParams={{ onlyUsers: true }}
          children={() => <RewardsScreen onlyUsers />}
        />
      </Tab.Navigator>
      <FloatingActionButton onPress={navigateToAddRewardsScreen}>
        <Icon color="#fff" name="add-outline" size={40} />
      </FloatingActionButton>
    </View>
  );
};

export default RewardsNavigator;
