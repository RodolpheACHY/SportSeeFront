import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import styles from './averageSessionsChart.module.scss'
import CustomTooltipSessions from './CustomTooltipSessions'
import CustomCursor from './CustomCursor';
import PropTypes from "prop-types";

const AverageSessionsChart = ({data}) => {
  return (
    <div className={styles.averageSessionsChart}>
      <h2 className={styles.averageSessionsChart__Title}>Durée moyenne des sessions</h2>
      <ResponsiveContainer className={styles.averageSessionsChart__reponsiveContainer} width="100%" height="100%">
        <LineChart 
          height={200} 
          data={data}
          margin={{left: 20, right: 20, top: 20, bottom: 20}}
        >
          <defs>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="white" stopOpacity={0.4} />
              <stop offset="60%" stopColor="#FFFFFF" stopOpacity={0.6} />
              <stop offset="100%" stopColor="white" stopOpacity={1} />
            </linearGradient>
          </defs>
          <Tooltip 
            content={<CustomTooltipSessions />} 
            cursor={<CustomCursor />}
            wrapperStyle={{ outline: "none" }}
          />
          <YAxis hide domain={['dataMin - 15', 'dataMax + 15']} />
          <Line 
            type="natural" 
            dataKey="sessionLength" 
            stroke="url(#lineGradient)" 
            strokeWidth={2} dot={false}
            // Point blanc de la souris
            activeDot={({ cx, cy }) => (
              <>
                <circle
                  cx={cx}
                  cy={cy}
                  r={5}
                  fill="#FFFFFF"
                  stroke="#FFF"
                  strokeWidth={2}
                />
                <circle
                  cx={cx}
                  cy={cy}
                  r={8}
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.3)"
                  strokeWidth={8}
                />
              </>
            )}

          />
          <XAxis dataKey="day" dy={15} tickLine={false} tick={{ fill: "#FFFFFF", opacity: 0.5, fontSize: 12 }} axisLine={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

AverageSessionsChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      sessionLength: PropTypes.number.isRequired,
    })
  ).isRequired,
}

export default AverageSessionsChart;