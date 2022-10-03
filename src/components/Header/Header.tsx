import { Platform, StyleSheet, View } from 'react-native';
import React from 'react';
import { COLORS, SPACING } from '../../constants';
import { Avatar } from '../Avatar';
import Typography from '../Typography/Typography';
import {
  selectGivenAmount,
  selectRecievedAmount,
  selectUser,
  useAppSelector,
} from '../../store';

const Header = () => {
  const user = useAppSelector(selectUser);
  const given = useAppSelector(selectGivenAmount);
  const recieved = useAppSelector(selectRecievedAmount);

  return (
    <View style={styles.container}>
      <Avatar
        alt={user?.displayName}
        src={{
          uri: user?.imgUrl,
        }}
        size={80}
      />
      <View style={styles.content}>
        <Typography variant="h2">{user?.displayName}</Typography>
        <View style={styles.contentText}>
          <Typography>Given </Typography>
          <Typography variant="h6">${given}</Typography>
          <Typography> / Recieved </Typography>
          <Typography variant="h6">${recieved}</Typography>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: SPACING.lg,
    backgroundColor: COLORS.primary.dark,
    paddingTop: Platform.OS === 'ios' ? 50 : SPACING.lg,
  },
  avatar: {
    width: 100,
    height: 100,
  },
  content: {
    justifyContent: 'center',
    marginLeft: SPACING.md,
  },
  contentText: {
    marginTop: SPACING.sm,
    flexDirection: 'row',
  },
});
