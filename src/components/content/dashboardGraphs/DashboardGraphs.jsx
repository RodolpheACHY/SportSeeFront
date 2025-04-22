import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UserScoreSimpleRadialBarChart from '../userScoreSimpleRadialBarChart/UserScoreSimpleRadialBarChart';
import AverageSessionsChart from '../averageSessionsChart/AverageSessionsChart';
import PerformanceRadarChart from '../performanceRadarChart/PerformanceRadarChart';
import ActivitySimpleBarChart from '../activitySimpleBarChart/ActivitySimpleBarChart';
import styles from './dashboardGraphs.module.scss';
import { getPerformanceRadarChartData } from '../../../dataLoaders/getPerformanceRadarChartData';
import { getActivityData } from '../../../dataLoaders/getActivityBarChartData';
import { getScoreRadialChartData } from '../../../dataLoaders/getScoreRadialChartData';
import { getSessionLineChartData } from '../../../dataLoaders/getSessionLineChartData';

const DashboardGraphs = () => {
  const [performanceData, setPerformanceData] = useState(null);
  const [activityData, setActivityData] = useState(null);
  const [scoreData, setScoreData] = useState(undefined);
  const [sessionData, setSessionData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const performanceData = await getPerformanceRadarChartData(id);
      const activityData = await getActivityData(id);
      const scoreData = await getScoreRadialChartData(id);
      const sessionData = await getSessionLineChartData(id);

      setPerformanceData(performanceData);
      setActivityData(activityData);
      setScoreData(scoreData);
      setSessionData(sessionData);
    };
    fetchData();
  }, [id]);

  return (
    <div className={styles.graphsContainer}>
      <div className={styles.graphTop}>
        <ActivitySimpleBarChart data={activityData} />
      </div>
      <div className={styles.graphBottom}>
        <AverageSessionsChart data={sessionData} />
        <PerformanceRadarChart data={performanceData} />
        <UserScoreSimpleRadialBarChart data={scoreData}/>
      </div>
    </div>
  );
};

export default DashboardGraphs;