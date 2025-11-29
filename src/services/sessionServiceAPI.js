import { USE_MOCKS, API_URL } from '../config';

export const fetchSessionData = async (userId) => {

  // ---- MODE MOCK ----
  if (USE_MOCKS) {
    try {
      const { data: mockSessionData } = await import(`../mockData/user/${userId}/average-sessions.json`);
      return {
        data: mockSessionData.sessions,
      };
    } catch (error) {
      console.error("❌ Erreur MOCK session :", error);
      return { data: [] };
    }
  }

  // ---- MODE API ----
  const url = `http://${API_URL}/user/${userId}/average-sessions`;
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
    console.error("❌Erreur API session  :", error);
    return {
      data: [],
    };
  }
};