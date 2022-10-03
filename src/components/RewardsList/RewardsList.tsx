import React, { FC, useCallback, useMemo } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { Reward } from '../../interfaces';
import { THEME } from '../../constants';

import RewardItem from './RewardItem';

export interface RewardsListProps {
  data: Reward[];
}

const RewardsList: FC<RewardsListProps> = ({ data }) => {
  const extractKey = useCallback(({ id }: Reward) => id, []);

  const sortedData = useMemo(
    () => [...data].sort((a, b) => (a.dt > b.dt ? -1 : 1)),
    [data],
  );

  return (
    <FlatList
      data={sortedData}
      renderItem={({ item }) => <RewardItem data={item} />}
      showsVerticalScrollIndicator={false}
      keyExtractor={extractKey}
      contentContainerStyle={styles.container}
    />
  );
};

export default RewardsList;

const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.palette.background.light,
    paddingBottom: THEME.spacing.lg * 2,
  },
});
