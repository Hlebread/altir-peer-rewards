import React, { FC, PropsWithChildren, useCallback, useState } from 'react';
import {
  LayoutChangeEvent,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';

import { THEME } from '../../constants';

import { Ripple } from '../Ripple';
import { Typography, TypographyProps } from '../Typography';

export interface ButtonProps extends PropsWithChildren {
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  titleStyle?: TypographyProps['style'];
  rippleColor?: string;
}

const Button: FC<ButtonProps> = ({
  children,
  onPress,
  rippleColor,
  style,
  titleStyle,
}) => {
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
    <View onLayout={onLayout} style={[styles.container, style]}>
      <Typography variant="h4" style={[styles.title, titleStyle]}>
        {children}
      </Typography>
      <Ripple
        onTap={onPress}
        color={rippleColor}
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
    borderRadius: THEME.shape,
    overflow: 'hidden',
  },
  title: {
    color: THEME.palette.primary.contrastText,
    textTransform: 'uppercase',
  },
  ripple: {
    position: 'absolute',
  },
});
