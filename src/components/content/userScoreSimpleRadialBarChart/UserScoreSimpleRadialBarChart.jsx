import React from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';
import styles from './UserScoreSimpleRadialBarChart.module.scss';

const UserScoreSimpleRadialBarChart = ({ data }) => {
  return (
    <div className={styles.UserScoreSimpleRadialBarChart}>
      <h2 className={styles.UserScoreSimpleRadialBarChart__Title}>Score</h2>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          cx="50%"
          cy="50%"
          innerRadius="100"
          outerRadius="120"
          barSize={10}
          data={[{ value: data === undefined ? 0 : data }]}
          startAngle={90}
          endAngle={90 + (( data === undefined) ? 0 : (data * (360/100)))}
          clockWise={false}
        >
          <RadialBar
            cornerRadius={10}
            fill="#FF0000"
            barSize={13}
            dataKey="value"
          />
          <circle
            cx="50%"
            cy="50%"
            r="34%"
            fill="white"
            opacity="0.9"
          />
          {/* Texte centré */}
          {data !== undefined && (
            <text
              x="50%"
              y="42%"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#282D30"
              fontSize="30"
              fontWeight="bold"
            >
              {data}%
            </text>
          )}
          {data !== undefined && (
            <text
              x="50%"
              y="51%"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#74798C"
              fontSize="16"
            >
              <tspan x="50%" dy={6}>de votre</tspan>
              <tspan x="50%" dy={25}>objectif</tspan>
            </text>
          )}
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserScoreSimpleRadialBarChart;