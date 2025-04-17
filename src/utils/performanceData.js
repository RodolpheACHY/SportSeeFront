import { data } from '../mockData/user/12/performance.json';

const mockData = data.data; 

const kindTranslation = { 
  1: "Cardio", 
  2: "Energie", 
  3: "Endurance", 
  4: "Force", 
  5: "Vitesse", 
  6: "Intensité" 
}; 

const kindOrder = [6, 5, 4, 3, 2, 1]; 

export const getPerformanceRadarChartData = () => { 
  const mixedData = mockData.map(mock => ({ 
    ...mock, 
    subject: kindTranslation[mock.kind] 
  })); 
  return [...mixedData].sort((a, b) => kindOrder.indexOf(a.kind) - 
kindOrder.indexOf(b.kind)); 
}; 