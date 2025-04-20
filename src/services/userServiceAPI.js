import { data as mockUserData } from '../mockData/user/12/user.json';
import { USE_MOCKS } from '../config';

export const fetchUserData = async (userId) => {
  if (USE_MOCKS) {
    return {
      data: mockUserData,
    };
  }

  const url = `http://localhost:3000/user/${userId}`;  // notre backend docker (ne pas oublier de le lancer ....)
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const apiData = await response.json();
    return {
      data: apiData.data,
    };
  } catch (error) {
    console.error("Erreur lors de la récupération des données de user :", error);
    return {
      data: [],
    };
  }
};