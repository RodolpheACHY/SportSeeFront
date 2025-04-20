import { fetchUserData } from '../services/userServiceAPI';
import { userCardNutriFormatter } from '../formatters/userCardNutriFormatter'; 

export const getCardNutriContainerData = async (userId) => {
  try {
    const { data } = await fetchUserData(userId);
    return userCardNutriFormatter(data);
  } catch (error) {
    console.error('Erreur:', error);
    throw error; 
  }
};