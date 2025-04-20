import { data as mockSessionData } from '../mockData/user/12/average-sessions.json';
import { USE_MOCKS } from '../config';

export const fetchSessionData = async (userId) => {
  if (USE_MOCKS) {
    return {
      data: mockSessionData.data.sessions,
    };
  }

  const url = `http://localhost:3000/user/${userId}/average-sessions`;     // notre backend docker (ne pas oublier de le lancer ....)
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const apiData = await response.json();
    return {
      data: apiData.data.sessions,
    };
  } catch (error) {
    console.error("Erreur lors de la récupération des données de performance :", error);
    return {
      data: [],
    };
  }
};