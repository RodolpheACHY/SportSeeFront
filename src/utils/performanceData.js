import { fetchPerformanceData } from '../services/performanceServiceAPI';
import { formatPerformanceDataForRadar } from '../formatters/performanceFormatter';

export const getPerformanceRadarChartData = async (userId) => {
  const { data, kind } = await fetchPerformanceData(userId);
  return formatPerformanceDataForRadar(data, kind);
};