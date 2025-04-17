import { fetchPerformanceData } from './performanceService';
import { formatPerformanceDataForRadar } from './performanceFormatter';

export const getPerformanceRadarChartData = async (userId) => {
  const { data, kind } = await fetchPerformanceData(userId);
  return formatPerformanceDataForRadar(data, kind);
};