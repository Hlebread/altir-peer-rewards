import React, { FC } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { Reward } from '../../interfaces';
import { THEME } from '../../constants';

import RewardItem from './RewardItem';

export interface RewardsListProps {
  data: Reward[];
}

const RewardsList: FC<RewardsListProps> = ({ data }) => (
  <FlatList
    data={data}
    renderItem={({ item }) => <RewardItem key={item.id} data={item} />}
    showsVerticalScrollIndicator={false}
    contentContainerStyle={styles.container}
  />
);

export default RewardsList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.palette.background.light,
  },
});
