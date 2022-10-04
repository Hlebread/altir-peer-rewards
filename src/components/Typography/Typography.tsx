import React, { FC } from 'react';
import { StyleSheet, Text, TextProps, View } from 'react-native';

import { THEME } from '../../constants';

export interface TypographyProps extends TextProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'subtitle1' | 'subtitle2';
}

const Typography: FC<TypographyProps> = ({
  children,
  variant,
  style,
  ...props
}) => (
  <View>
    <Text style={[styles.text, variant && styles[variant], style]} {...props}>
      {children}
    </Text>
  </View>
);

export default Typography;

const styles = StyleSheet.create({
  text: {
    color: THEME.palette.primary.contrastText,
    fontSize: THEME.font.size.md,
    fontWeight: THEME.font.weight.light,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  h1: {
    fontSize: THEME.font.size.xl,
    fontWeight: THEME.font.weight.extraBold,
  },
  h2: {
    fontSize: THEME.font.size.xl,
    fontWeight: THEME.font.weight.bold,
  },
  h3: {
    fontSize: THEME.font.size.lg,
    fontWeight: THEME.font.weight.bold,
  },
  h4: {
    fontSize: THEME.font.size.md,
    fontWeight: THEME.font.weight.semiBold,
  },
  h5: {
    fontSize: THEME.font.size.md,
    fontWeight: THEME.font.weight.medium,
  },
  h6: {
    fontSize: THEME.font.size.sm,
    fontWeight: THEME.font.weight.medium,
  },
  subtitle1: {
    color: THEME.palette.secondary.light,
    fontSize: THEME.font.size.md,
    fontWeight: THEME.font.weight.light,
  },
  subtitle2: {
    color: THEME.palette.secondary.light,
    fontSize: THEME.font.size.sm,
    fontWeight: THEME.font.weight.light,
  },
});
