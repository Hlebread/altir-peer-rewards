import { StyleSheet, Text, TextProps, View } from 'react-native';
import React, { FC } from 'react';
import { THEME } from '../../constants';

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
    fontSize: THEME.font.size.md,
    color: THEME.palette.secondary.main,
    fontWeight: THEME.font.weight.light,
  },
  h1: {
    color: THEME.palette.secondary.dark,
    fontSize: THEME.font.size.xl,
    fontWeight: THEME.font.weight.bold,
  },
  h2: {
    color: THEME.palette.secondary.dark,
    fontSize: THEME.font.size.lg,
    fontWeight: THEME.font.weight.bold,
  },
  h3: {
    color: THEME.palette.secondary.dark,
    fontSize: THEME.font.size.md,
    fontWeight: THEME.font.weight.bold,
  },
  h4: {
    color: THEME.palette.secondary.dark,
    fontSize: THEME.font.size.md,
    fontWeight: THEME.font.weight.medium,
  },
  h5: {
    color: THEME.palette.secondary.dark,
    fontSize: THEME.font.size.md,
    fontWeight: THEME.font.weight.medium,
  },
  h6: {
    color: THEME.palette.secondary.dark,
    fontSize: THEME.font.size.md,
    fontWeight: THEME.font.weight.semibold,
  },
  error: {
    color: THEME.palette.error,
    fontSize: THEME.font.size.md,
    fontWeight: THEME.font.weight.regular,
  },
});
