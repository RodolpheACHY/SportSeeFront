import UserScoreSimpleRadialBarChart from './UserScoreSimpleRadialBarChart';
import AverageSessionsChart from './AverageSessionsChart';
import PerformanceRadarChart from './PerformanceRadarChart';
import ActivitySimpleBarChart from './ActivitySimpleBarChart';
import styles from './DashboardGraphs.module.scss';

const DashboardGraphs = () => {
  return (
    <div className={styles.graphsContainer}>
      <div className={styles.graphTop}>
        <ActivitySimpleBarChart />
      </div>
      <div className={styles.graphBottom}>
        <AverageSessionsChart />
        <PerformanceRadarChart />
        <UserScoreSimpleRadialBarChart />
      </div>
    </div>
  );
};

export default DashboardGraphs;