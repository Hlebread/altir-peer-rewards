import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';

import { THEME } from '../../constants';
import { Reward } from '../../interfaces';
import { getDateDistance } from '../../helpers';

import { Typography } from '../Typography';
import { Avatar } from '../Avatar';

export interface RewardItemProps {
  data: Reward;
}

const RewardItem: FC<RewardItemProps> = ({ data }) => {
  const { sender, recipient, message, dt } = data;

  return (
    <View style={styles.container}>
      <Avatar alt={sender?.displayName} src={{ uri: sender?.imgUrl }} />
      <View style={styles.content}>
        <Typography variant="h5" numberOfLines={4}>
          {message}
        </Typography>
        <View style={styles.details}>
          <Typography variant="subtitle2">
            {recipient?.displayName} rewarded by {sender.displayName}
          </Typography>
          <Typography variant="subtitle2" style={styles.date}>
            {getDateDistance(dt)}
          </Typography>
        </View>
      </View>
    </View>
  );
};

export default RewardItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: THEME.spacing.sm,
    paddingRight: THEME.spacing.lg,
    margin: THEME.spacing.lg,
  },
  content: {
    marginHorizontal: THEME.spacing.md,
    paddingRight: THEME.spacing.lg,
    overflow: 'hidden',
  },
  details: {
    marginTop: THEME.spacing.md,
  },
  date: {
    marginTop: THEME.spacing.sm,
  },
});
