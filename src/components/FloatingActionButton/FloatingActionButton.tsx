import { StyleSheet } from 'react-native';
import React, { FC } from 'react';

import { Button, ButtonProps } from '../Button';
import { THEME } from '../../constants';

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
    width: 50,
    height: 50,
    right: THEME.spacing.lg,
    bottom: THEME.spacing.lg,
    backgroundColor: THEME.palette.background.dark,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: THEME.palette.primary.light,
  },
});
