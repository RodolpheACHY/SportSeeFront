import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import styles from './performanceRadarChart.module.scss';
import CustomAngleAxisTick from './CustomAngleAxisTick';
import PropTypes from 'prop-types';

const PerformanceRadarChart = ({ data }) => {
  return (
    <ResponsiveContainer className={styles.performanceRadarChart} width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="75%" data={data}>
        <PolarGrid radialLines={false} stroke="#FFFFFF" />
        <PolarAngleAxis
          dataKey="subject"
          tick={CustomAngleAxisTick}
        />
        <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
      </RadarChart>
    </ResponsiveContainer>
  );
};

PerformanceRadarChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      subject: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
export default PerformanceRadarChart;