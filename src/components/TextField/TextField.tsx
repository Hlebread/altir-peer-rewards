import { StyleSheet, TextInput, TextInputProps, View } from 'react-native';
import React, { FC } from 'react';

import { Typography } from '../Typography';
import { COLORS, FONT_WEIGHT, SPACING } from '../../constants';

export interface TextFieldProps extends TextInputProps {
  label?: string;
  error?: boolean;
  helperText?: string;
  number?: boolean;
}

const TextField: FC<TextFieldProps> = ({
  label,
  error,
  helperText,
  number,
  onChangeText,
  style,
  ...props
}) => {
  const onTextChangeHandler = (text: string) => {
    let value = text;

    if (number) {
      value = text.replace(/[^0-9]/g, '');
    }

    onChangeText?.(value);
  };

  return (
    <View style={styles.container}>
      {label && (
        <Typography style={[styles.label, error && styles.labelError]}>
          {label}
        </Typography>
      )}
      <View
        style={[
          styles.inputContainer,
          style,
          error && styles.inputContainerError,
        ]}>
        <TextInput
          style={styles.input}
          placeholderTextColor={COLORS.primary.dark}
          onChangeText={onTextChangeHandler}
          {...props}
        />
      </View>
      {helperText && (
        <Typography
          style={[styles.helperText, error && styles.helperTextError]}>
          {helperText}
        </Typography>
      )}
    </View>
  );
};

export default TextField;

const styles = StyleSheet.create({
  container: {
    padding: SPACING.sm,
    borderRadius: 10,
  },
  label: {
    marginLeft: SPACING.sm,
    marginBottom: SPACING.sm,
    fontWeight: FONT_WEIGHT.semibold,
  },
  labelError: {
    color: COLORS.error,
  },
  inputContainer: {
    minHeight: 40,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: COLORS.primary.dark,
  },
  inputContainerError: {
    borderColor: COLORS.error,
  },
  input: {
    flex: 1,
    paddingHorizontal: SPACING.sm,
    color: COLORS.primary.dark,
  },
  helperText: {
    marginLeft: SPACING.sm,
    marginTop: SPACING.sm,
  },
  helperTextError: {
    color: COLORS.error,
  },
});
