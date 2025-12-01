import { USE_MOCKS, API_URL } from '../config';

export const fetchUserData = async (userId) => {
  // ---- MODE MOCK ---- 
  if (USE_MOCKS) {
    try {
      const { data: mockUserData } = await import(`../mockData/user/${userId}/user.json`);
      return {
        data: mockUserData,
      };
    } catch (error) {
      console.error("❌ Erreur MOCK user :", error);
      return { data: [] };
    }
  }
  

   // ---- MODE API ----
  const url = `${API_URL}/user/${userId}`;
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
    console.error("❌ Erreur API user :", error);
    return {
      data: [],
    };
  }
};