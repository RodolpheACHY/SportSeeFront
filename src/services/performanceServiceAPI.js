import { USE_MOCKS } from '../config';

export const fetchPerformanceData = async (userId) => {
  
  if (USE_MOCKS) {
      try {
        // 🪄 Import dynamique basé sur l’ID utilisateur
        const { data: mockPerformanceData } = await import(`../mockData/user/${userId}/performance.json`);
        return {
          data: mockPerformanceData.data,
          kind: mockPerformanceData.kind,
        };
      } catch (error) {
        console.error("❌ Erreur lors de l'import des données mockées :", error);
        return { data: [] };
      }
    }

  const url = `http://localhost:3000/user/${userId}/performance`;     // notre backend docker (ne pas oublier de le lancer ....)
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const apiData = await response.json();
    return {
      data: apiData.data.data,
      kind: apiData.data.kind,
    };
  } catch (error) {
    console.error("Erreur lors de la récupération des données de performance :", error);
    return {
      data: [],
      kind: {},
    };
  }
};