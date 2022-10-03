import { FlatList, StyleSheet } from 'react-native';
import React, { FC } from 'react';
import { Reward } from '../../interfaces';
import RewardItem from './RewardItem';
import { COLORS } from '../../constants';

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
    backgroundColor: COLORS.primary.light,
  },
});
