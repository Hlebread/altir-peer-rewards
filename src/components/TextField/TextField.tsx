import React, { FC } from 'react';
import { StyleSheet, TextInput, TextInputProps, View } from 'react-native';

import { Typography } from '../Typography';
import { THEME } from '../../constants';

export interface TextFieldProps extends TextInputProps {
  label?: string;
  error?: boolean;
  helperText?: string;
  number?: boolean;
  fullWidth?: boolean;
}

const TextField: FC<TextFieldProps> = ({
  label,
  error,
  helperText,
  number,
  fullWidth = true,
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
    <View style={[styles.container, fullWidth && styles.fullWidth]}>
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
          textAlignVertical="top"
          placeholderTextColor={THEME.palette.secondary.light}
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
    padding: THEME.spacing.sm,
  },
  label: {
    color: THEME.palette.secondary.dark,
    fontWeight: THEME.font.weight.bold,
    marginLeft: THEME.spacing.sm,
    marginBottom: THEME.spacing.sm,
  },
  labelError: {
    color: THEME.palette.error.light,
  },
  inputContainer: {
    minHeight: 40,
    borderWidth: 2,
    borderColor: THEME.palette.secondary.dark,
    borderRadius: THEME.shape,
  },
  inputContainerError: {
    borderColor: THEME.palette.error.light,
  },
  input: {
    flex: 1,
    paddingHorizontal: THEME.spacing.sm,
    color: THEME.palette.primary.light,
  },
  helperText: {
    marginLeft: THEME.spacing.sm,
    marginTop: THEME.spacing.sm,
  },
  helperTextError: {
    color: THEME.palette.error.light,
  },
  fullWidth: {
    width: '100%',
  },
});
