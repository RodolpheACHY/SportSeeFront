import { fetchActivityData } from '../services/activityServiceAPI';
import { activityFormatter } from '../formatters/activityFormatter';

export const getActivityData = async (userId) => {
  const { data } = await fetchActivityData(userId);
  return activityFormatter(data);
};