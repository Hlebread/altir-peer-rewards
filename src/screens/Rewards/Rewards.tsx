import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';

import { RewardsList } from '../../components';
import { THEME } from '../../constants';
import {
  selectAllRewards,
  selectUserRewards,
  useAppSelector,
} from '../../store';

export interface RewardsScreenProps {
  onlyUsers?: boolean;
}

const RewardsScreen: FC<RewardsScreenProps> = ({ onlyUsers }) => {
  const userRewards = useAppSelector(selectUserRewards);
  const rewards = useAppSelector(selectAllRewards);

  return (
    <View style={styles.container}>
      <RewardsList data={onlyUsers ? userRewards : rewards} />
    </View>
  );
};

export default RewardsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.palette.background.light,
  },
});
