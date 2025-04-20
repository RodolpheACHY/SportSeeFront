import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UserScoreSimpleRadialBarChart from './UserScoreSimpleRadialBarChart';
import AverageSessionsChart from './AverageSessionsChart';
import PerformanceRadarChart from './PerformanceRadarChart';
import ActivitySimpleBarChart from './ActivitySimpleBarChart';
import styles from './dashboardGraphs.module.scss';
import { getPerformanceRadarChartData } from '../../dataLoaders/getPerformanceRadarChartData';
import { getActivityData } from '../../dataLoaders/getActivityBarChartData';

const DashboardGraphs = () => {
  const [performanceData, setPerformanceData] = useState(null);
  const [activityData, setActivityData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const performanceData = await getPerformanceRadarChartData(id);
      const activityData = await getActivityData(id);

      setPerformanceData(performanceData);
      setActivityData(activityData);
    };
    fetchData();
  }, [id]);

  return (
    <div className={styles.graphsContainer}>
      <div className={styles.graphTop}>
        <ActivitySimpleBarChart data={activityData} />
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