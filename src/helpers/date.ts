import { formatDistance } from 'date-fns';

export const getDateDistance = (timestamp: number) =>
  formatDistance(new Date(timestamp), new Date(), { addSuffix: true });
