import React, { FC } from 'react';
import { Platform, StyleSheet } from 'react-native';

import { THEME } from '../../constants';

import { Button, ButtonProps } from '../Button';

export interface FloatingActionButtonProps extends ButtonProps {}

const FloatingActionButton: FC<FloatingActionButtonProps> = ({
  style,
  ...props
}) => (
  <Button
    rippleColor={THEME.palette.primary.main}
    style={[styles.fab, style]}
    titleStyle={styles.title}
    {...props}
  />
);

export default FloatingActionButton;

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    width: 70,
    height: 50,
    right: THEME.spacing.lg,
    bottom: Platform.OS === 'ios' ? THEME.spacing.lg * 2 : THEME.spacing.lg,
    backgroundColor: THEME.palette.background.dark,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: THEME.palette.primary.light,
  },
});
