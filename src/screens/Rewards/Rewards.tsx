import { StyleSheet, View } from 'react-native';
import React, { useCallback } from 'react';
import RewardsList from '../../components/RewardsList/RewardsList';
import { useAppSelector } from '../../store';
import { selectAllRewards } from '../../store/slices/rewards/selectors';
import Icon from 'react-native-vector-icons/Ionicons';

import { FloatingActionButton } from '../../components/FloatingActionButton';
import { useNavigation } from '@react-navigation/native';
import { AppRoutes } from '../../types';

const RewardsScreen = () => {
  const { navigate } = useNavigation();

  const rewardsData = useAppSelector(selectAllRewards);

  const navigateToAddRewardsScreen = useCallback(
    () => navigate(AppRoutes.AddReward as never),
    [navigate],
  );

  return (
    <View style={styles.container}>
      <RewardsList data={rewardsData} />
      <FloatingActionButton onPress={navigateToAddRewardsScreen}>
        <Icon name="add-outline" size={20} />
      </FloatingActionButton>
    </View>
  );
};

export default RewardsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
