import { fetchUserData } from '../services/userServiceAPI';
import { userFormatter } from '../formatters/userFormatter';

export const getUserFirstNameData = async (userId) => {
  const { data } = await fetchUserData(userId);
  return userFormatter(data);
}; 