import UserScoreSimpleRadialBarChart from './UserScoreSimpleRadialBarChart';
import AverageSessionsChart from './AverageSessionsChart';
import PerformanceRadarChart from './PerformanceRadarChart';
import ActivitySimpleBarChart from './ActivitySimpleBarChart';
import styles from './dashboardGraphs.module.scss';
import { getPerformanceRadarChartData } from '../../utils/performanceData';

const DashboardGraphs = () => {
  const performanceData = getPerformanceRadarChartData();
  return (
    <div className={styles.graphsContainer}>
      <div className={styles.graphTop}>
        <ActivitySimpleBarChart />
      </div>
      <div className={styles.graphBottom}>
        <AverageSessionsChart />
        <PerformanceRadarChart data={performanceData}/>
        <UserScoreSimpleRadialBarChart />
      </div>
    </div>
  );
};

export default DashboardGraphs;