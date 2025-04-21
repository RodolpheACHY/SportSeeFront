//import { data as mockActivityData } from '../mockData/user/12/activity.json';
import { USE_MOCKS } from '../config';

export const fetchActivityData = async (userId) => {
  /* if (USE_MOCKS) {
    return {
      data: mockActivityData.sessions,
    };
  } */

  if (USE_MOCKS) {
    try {
      // 🪄 Import dynamique basé sur l’ID utilisateur
      const { data: mockActivityData } = await import(`../mockData/user/${userId}/activity.json`);
      return {
        data: mockActivityData.sessions,
      };
    } catch (error) {
      console.error("❌ Erreur lors de l'import des données mockées :", error);
      return { data: [] };
    }
  }

  const url = `http://localhost:3000/user/${userId}/activity`;     // notre backend docker (ne pas oublier de le lancer ....)
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