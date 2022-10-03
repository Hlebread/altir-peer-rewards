import { number, object, string } from 'yup';

export const giveRewardFormValidationSchema = object().shape({
  recipient: string().required('Recipient required'),
  amount: number()
    .required('Amount required')
    .min(1, 'You can not give less than 1'),
  message: string().required('Message required'),
});
