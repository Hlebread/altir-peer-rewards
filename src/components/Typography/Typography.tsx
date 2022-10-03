import { StyleSheet, Text, TextProps, View } from 'react-native';
import React, { FC } from 'react';
import { COLORS, FONT_SIZE, FONT_WEIGHT } from '../../constants';

export interface TypographyProps extends TextProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  error?: boolean;
}

const Typography: FC<TypographyProps> = ({
  children,
  variant,
  error,
  style,
  ...props
}) => (
  <View>
    <Text
      style={[
        styles.text,
        variant && styles[variant],
        error && styles.error,
        style,
      ]}
      {...props}>
      {children}
    </Text>
  </View>
);

export default Typography;

const styles = StyleSheet.create({
  text: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: FONT_SIZE.md,
    color: COLORS.secondary.medium,
    fontWeight: FONT_WEIGHT.light,
  },
  h1: {
    color: COLORS.secondary.dark,
    fontSize: FONT_SIZE.xl,
    fontWeight: FONT_WEIGHT.bold,
  },
  h2: {
    color: COLORS.secondary.dark,
    fontSize: FONT_SIZE.lg,
    fontWeight: FONT_WEIGHT.bold,
  },
  h3: {
    color: COLORS.secondary.dark,
    fontSize: FONT_SIZE.md,
    fontWeight: FONT_WEIGHT.bold,
  },
  h4: {
    color: COLORS.secondary.dark,
    fontSize: FONT_SIZE.md,
    fontWeight: FONT_WEIGHT.medium,
  },
  h5: {
    color: COLORS.secondary.dark,
    fontSize: FONT_SIZE.md,
    fontWeight: FONT_WEIGHT.medium,
  },
  h6: {
    color: COLORS.secondary.dark,
    fontSize: FONT_SIZE.md,
    fontWeight: FONT_WEIGHT.semibold,
  },
  error: {
    color: COLORS.error,
    fontSize: FONT_SIZE.md,
    fontWeight: FONT_WEIGHT.regular,
  },
});
