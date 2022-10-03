import React, { FC, useCallback, useState } from 'react';
import { LayoutChangeEvent, StyleSheet, View } from 'react-native';

import { THEME } from '../../constants';

import { Ripple } from '../Ripple';
import { Typography } from '../Typography';

export interface ButtonProps {
  title?: string;
  onPress?: () => void;
}

const Button: FC<ButtonProps> = ({ title, onPress }) => {
  const [rippleSize, setRippleSize] = useState(0);

  const onLayout = useCallback(
    ({
      nativeEvent: {
        layout: { width, height },
      },
    }: LayoutChangeEvent) => setRippleSize(width > height ? width : height),
    [],
  );

  return (
    <View onLayout={onLayout} style={styles.container}>
      <Typography variant="h4" style={styles.title}>
        {title}
      </Typography>
      <Ripple
        onTap={onPress}
        style={[styles.ripple, { width: rippleSize, height: rippleSize }]}
        opacity={0.4}
      />
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.palette.background.light,
    padding: THEME.spacing.md,
    width: '100%',
    alignItems: 'center',
    borderRadius: 10,
  },
  title: {
    color: THEME.palette.common.black,
    textTransform: 'uppercase',
  },
  ripple: {
    position: 'absolute',
  },
});
