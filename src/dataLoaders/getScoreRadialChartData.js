import { fetchUserData } from '../services/userServiceAPI';
import { userScoreFormatter } from '../formatters/userScoreFormatter';

export const getScoreRadialChartData = async (userId) => {
  const { data } = await fetchUserData(userId);
  return userScoreFormatter(data);
};