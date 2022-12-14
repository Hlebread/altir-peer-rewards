import React, { useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from '@codler/react-native-keyboard-aware-scroll-view';

import { THEME } from '../../constants';
import { giveRewardFormValidationSchema } from '../../validations';
import { Reward, RewardEntry, User } from '../../interfaces';
import {
  addReward,
  selectAllUsers,
  selectUser,
  useAppDispatch,
  useAppSelector,
} from '../../store';

import { Typography } from '../Typography';
import { TextField } from '../TextField';
import { Button } from '../Button';

const defaultValues: RewardEntry = {
  recipient: '',
  amount: 0,
  message: '',
};

const GiveRewardForm = () => {
  const dispatch = useAppDispatch();
  const sender = useAppSelector(selectUser) as User;
  const users = useAppSelector(selectAllUsers);

  const { goBack } = useNavigation();

  const {
    control,
    reset,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(giveRewardFormValidationSchema),
    defaultValues,
  });

  const onSubmit = useCallback(
    ({ recipient, amount, message }: RewardEntry) => {
      const rewardRecipient = users.filter(
        user => user.displayName === recipient,
      )[0];

      if (!rewardRecipient) {
        setError('recipient', { message: 'Recipient does not exist' });
        return;
      }

      if (rewardRecipient.displayName === sender.displayName) {
        setError('recipient', {
          message: 'You can not give a reward to yourself',
        });
        return;
      }

      const newRewardEntry: Reward = {
        id: '',
        sender,
        recipient: rewardRecipient,
        amount,
        message,
        dt: Date.now(),
      };

      dispatch(addReward(newRewardEntry));
      reset();
      goBack();
    },
    [dispatch, goBack, reset, sender, setError, users],
  );

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <Typography variant="h2" style={styles.title}>
        Give reward
      </Typography>

      <View style={styles.inputContainer}>
        <Controller
          control={control}
          name="recipient"
          render={({ field: { onChange, value } }) => (
            <TextField
              autoFocus
              value={value}
              onChangeText={onChange}
              error={!!errors.recipient}
              helperText={errors.recipient?.message}
              label="To"
              placeholder="Type a recipient name..."
            />
          )}
        />
      </View>

      <View style={styles.inputContainer}>
        <Controller
          control={control}
          name="amount"
          render={({ field: { onChange, value } }) => (
            <TextField
              number
              value={String(value)}
              onChangeText={text => {
                const entry = Number(text) > 0 ? text : 0;
                onChange(Number(entry));
              }}
              error={!!errors.amount}
              helperText={errors.amount?.message}
              label="Amount"
              placeholder="Reward amount..."
            />
          )}
        />
      </View>

      <View style={styles.inputContainer}>
        <Controller
          control={control}
          name="message"
          render={({ field: { onChange, value } }) => (
            <TextField
              multiline
              value={value}
              onChangeText={onChange}
              error={!!errors.message}
              helperText={errors.message?.message}
              label="Message"
              placeholder="Type your message..."
              textAlignVertical="top"
              style={styles.messageInput}
            />
          )}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button onPress={handleSubmit(onSubmit)}>Give</Button>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default GiveRewardForm;

const styles = StyleSheet.create({
  container: {
    padding: THEME.spacing.lg,
  },
  title: {
    textAlign: 'center',
    color: THEME.palette.primary.light,
  },
  inputContainer: {
    marginVertical: THEME.spacing.xs,
  },
  messageInput: {
    minHeight: 100,
    paddingVertical: THEME.spacing.sm,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: THEME.spacing.lg,
    paddingHorizontal: THEME.spacing.sm,
  },
});
