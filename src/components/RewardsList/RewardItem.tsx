import { StyleSheet, Text, View } from 'react-native';
import React, { FC } from 'react';
import { Avatar } from '../Avatar';
import { SPACING } from '../../constants';
import { Typography } from '../Typography';
import { Reward } from '../../interfaces';

export interface RewardItemProps {
  data: Reward;
}

const RewardItem: FC<RewardItemProps> = ({ data }) => {
  const { sender, recipient, message } = data;

  return (
    <View style={styles.container}>
      <Avatar alt={sender?.displayName} src={{ uri: sender?.imgUrl }} />
      <View style={styles.content}>
        <Typography variant="h6" numberOfLines={4}>
          {message}
        </Typography>
        <View style={styles.details}>
          <Typography>
            {recipient?.displayName} rewarded by {sender.displayName}
          </Typography>
          <Typography>Feb 1, 2021</Typography>
        </View>
      </View>
    </View>
  );
};

export default RewardItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: SPACING.sm,
    paddingRight: SPACING.lg,
    margin: SPACING.lg,
    // backgroundColor: 'red',
  },
  content: {
    marginHorizontal: SPACING.md,
    paddingRight: SPACING.lg,
    overflow: 'hidden',
  },
  details: {
    marginTop: SPACING.md,
  },
});
