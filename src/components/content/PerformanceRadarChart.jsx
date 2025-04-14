import React, { PureComponent } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import styles from './performanceRadarChart.module.scss'
import CustomAngleAxisTick from './CustomAngleAxisTick'

const data = [
  {
    subject: 'Intensité',
    A: 90,
  },
  {
    subject: 'Vitesse',
    A: 200,
  },
  {
    subject: 'Force',
    A: 50,
  },
  {
    subject: 'Endurance',
    A: 140,
  },
  {
    subject: 'Energie',
    A: 120,
  },
  {
    subject: 'Cardio',
    A: 80,
  }
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/simple-radar-chart-2p5sxm';

  render() {
    return (
      <ResponsiveContainer className={styles.performanceRadarChart} width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="75%" data={data}>
        <PolarGrid radialLines={false} stroke="#FFFFFF" />
          <PolarAngleAxis
            dataKey="subject"
            tick={CustomAngleAxisTick}
          />
          <Radar dataKey="A" fill="#FF0101" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    );
  }
}