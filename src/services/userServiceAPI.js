import { USE_MOCKS, BASE_URL } from '../config';

export const fetchUserData = async (userId) => {
 
  if (USE_MOCKS) {
    try {
      // 🪄 Import dynamique basé sur l’ID utilisateur
      const { data: mockUserData } = await import(`../mockData/user/${userId}/user.json`);
      return {
        data: mockUserData,
      };
    } catch (error) {
      console.error("❌ Erreur lors de l'import des données mockées :", error);
      return { data: [] };
    }
  }
  

  //const url = `http://localhost:3000/user/${userId}`;  // notre backend docker (ne pas oublier de le lancer ....)
  const url = `http://${BASE_URL}/user/${userId}`;
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