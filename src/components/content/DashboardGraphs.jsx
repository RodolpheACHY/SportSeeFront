import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UserScoreSimpleRadialBarChart from './UserScoreSimpleRadialBarChart';
import AverageSessionsChart from './AverageSessionsChart';
import PerformanceRadarChart from './PerformanceRadarChart';
import ActivitySimpleBarChart from './ActivitySimpleBarChart';
import styles from './dashboardGraphs.module.scss';
import { getPerformanceRadarChartData } from '../../utils/performanceData';

const DashboardGraphs = () => {
  const [performanceData, setPerformanceData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPerformanceRadarChartData(id);
      setPerformanceData(data);
    };
    fetchData();
  }, []);

  return (
    <div className={styles.graphsContainer}>
      <div className={styles.graphTop}>
        <ActivitySimpleBarChart />
      </div>
      <div className={styles.graphBottom}>
        <AverageSessionsChart />
        <PerformanceRadarChart data={performanceData} />
        <UserScoreSimpleRadialBarChart />
      </div>
    </div>
  );
};

export default DashboardGraphs;