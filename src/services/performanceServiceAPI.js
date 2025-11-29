import { USE_MOCKS, API_URL } from '../config';

export const fetchPerformanceData = async (userId) => {
  
  // ---- MODE MOCK ----
  if (USE_MOCKS) {
      try {
        const { data: mockPerformanceData } = await import(`../mockData/user/${userId}/performance.json`);
        return {
          data: mockPerformanceData.data,
          kind: mockPerformanceData.kind,
        };
      } catch (error) {
        console.error("❌ Erreur mock performance :", error);
        return { data: [] };
      }
    }

  // ---- MODE API ----
  const url = `http://${API_URL}/user/${userId}/performance`;
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
    console.error("Erreur API performance :", error);
    return {
      data: [],
      kind: {},
    };
  }
};