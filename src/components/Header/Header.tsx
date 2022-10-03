import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';

import { THEME } from '../../constants';
import {
  selectGivenAmount,
  selectRecievedAmount,
  selectUser,
  useAppSelector,
} from '../../store';

import { Avatar } from '../Avatar';
import { Typography } from '../Typography';

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
    padding: THEME.spacing.lg,
    backgroundColor: THEME.palette.background.main,
    paddingTop: Platform.OS === 'ios' ? 50 : THEME.spacing.lg,
  },
  avatar: {
    width: 100,
    height: 100,
  },
  content: {
    justifyContent: 'center',
    marginLeft: THEME.spacing.md,
  },
  contentText: {
    marginTop: THEME.spacing.sm,
    flexDirection: 'row',
  },
});
