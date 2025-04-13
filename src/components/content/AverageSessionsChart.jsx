import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceArea } from 'recharts';
import styles from './averageSessionsChart.module.scss'
import CustomTooltipSessions from './CustomTooltipSessions'
import CustomCursor from './CustomCursor';

const AverageSessionsChart = () => {

  const data = [
    {
      name: 'L',
      uv: 30,
    },
    {
      name: 'M',
      uv: 23,
    },
    {
      name: 'M',
      uv: 45,
    },
    {
      name: 'J',
      uv: 50,
    },
    {
      name: 'V',
      uv: 0,
    },
    {
      name: 'S',
      uv: 0,
    },
    {
      name: 'D',
      uv: 60,
    },
  ];

  return (
    <div className={styles.averageSessionsChart}>
      <h2 className={styles.averageSessionsChart__Title}>Durée moyenne des sessions</h2>
      <ResponsiveContainer className={styles.averageSessionsChart__reponsiveContainer} width="100%" height="100%">
        <LineChart 
          //width={300} 
          height={200} 
          data={data}
          margin={{left: 20, right: 20, top: 20, bottom: 20}}
          /*onMouseLeave={() => setActiveX(null)}
          onMouseMove={(state) => {
            if (state && state.activeLabel) {
              setActiveX(state.activeLabel);
            }
          }}*/
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
            dataKey="uv" 
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
          <XAxis dataKey="name" dy={15} tickLine={false} tick={{ fill: "#FFFFFF", opacity: 0.5, fontSize: 12 }} axisLine={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

AverageSessionsChart.demoUrl = 'https://codesandbox.io/p/sandbox/tiny-line-chart-5f5vq6';

export default AverageSessionsChart;
