import { USE_MOCKS, BASE_URL } from '../config';

export const fetchSessionData = async (userId) => {

  if (USE_MOCKS) {
    try {
      // 🪄 Import dynamique basé sur l’ID utilisateur
      const { data: mockSessionData } = await import(`../mockData/user/${userId}/average-sessions.json`);
      return {
        data: mockSessionData.sessions,
      };
    } catch (error) {
      console.error("❌ Erreur lors de l'import des données mockées :", error);
      return { data: [] };
    }
  }

  //const url = `http://localhost:3000/user/${userId}/average-sessions`;     // notre backend docker (ne pas oublier de le lancer ....)
  const url = `http://${BASE_URL}/user/${userId}/average-sessions`;
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