import { StyleSheet, TextInput, TextInputProps, View } from 'react-native';
import React, { FC } from 'react';

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
          placeholderTextColor={THEME.palette.primary.dark}
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
    borderRadius: 10,
  },
  label: {
    marginLeft: THEME.spacing.sm,
    marginBottom: THEME.spacing.sm,
    fontWeight: THEME.font.weight.semibold,
  },
  labelError: {
    color: THEME.palette.error,
  },
  inputContainer: {
    minHeight: 40,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: THEME.palette.primary.main,
  },
  inputContainerError: {
    borderColor: THEME.palette.error,
  },
  input: {
    flex: 1,
    paddingHorizontal: THEME.spacing.sm,
    color: THEME.palette.primary.dark,
  },
  helperText: {
    marginLeft: THEME.spacing.sm,
    marginTop: THEME.spacing.sm,
  },
  helperTextError: {
    color: THEME.palette.error,
  },
  fullWidth: {
    width: '100%',
  },
});
