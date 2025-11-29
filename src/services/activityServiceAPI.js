import { USE_MOCKS, API_URL } from '../config';

export const fetchActivityData = async (userId) => {

  // ---- MODE MOCK ----
  if (USE_MOCKS) {
    try {
      const { data: mockActivityData } = await import(`../mockData/user/${userId}/activity.json`);
      return {
        data: mockActivityData.sessions,
      };
    } catch (error) {
      console.error("❌ Erreur MOCK Activity :", error);
      return { data: [] };
    }
  }

  // ---- MODE API ----
  const url = `http://${API_URL}/user/${userId}/activity`;
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
    console.error("Erreur API Activity :", error);
    return {
      data: [],
    };
  }
};