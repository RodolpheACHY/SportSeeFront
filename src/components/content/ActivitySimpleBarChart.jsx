import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styles from './activitySimpleBarChart.module.scss'
import CustomTooltip from './CustomTooltip'

const data = [
  {
    name: '1',
    "Poids (kg)": 4000,
    "Calories brûlées (kCal)": 2400,
    amt: 2400,
  },
  {
    name: '2',
    "Poids (kg)": 3000,
    "Calories brûlées (kCal)": 1398,
    amt: 2210,
  },
  {
    name: '3',
    "Poids (kg)": 2000,
    "Calories brûlées (kCal)": 9800,
    amt: 2290,
  },
  {
    name: '4',
    "Poids (kg)": 2780,
    "Calories brûlées (kCal)": 3908,
    amt: 2000,
  },
  {
    name: '5',
    "Poids (kg)": 1890,
    "Calories brûlées (kCal)": 4800,
    amt: 2181,
  },
  {
    name: '6',
    "Poids (kg)": 2390,
    "Calories brûlées (kCal)": 3800,
    amt: 2500,
  },
  {
    name: '7',
    "Poids (kg)": 3490,
    "Calories brûlées (kCal)": 4300,
    amt: 2100,
  },
  {
    name: '8',
    "Poids (kg)": 3490,
    "Calories brûlées (kCal)": 4300,
    amt: 2100,
  },
  {
    name: '9',
    "Poids (kg)": 3490,
    "Calories brûlées (kCal)": 4300,
    amt: 2100,
  },
  {
    name: '10',
    "Poids (kg)": 3490,
    "Calories brûlées (kCal)": 4300,
    amt: 2100,
  },
];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/simple-bar-chart-72d7y5';

  render() {
    return (
      <div className={styles.activitySimpleBarChart} style={{ height: "300px" }}>
        <h2 className={styles.activitySimpleBarChart__Title}>Activité quotidienne</h2>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            barGap={10}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="1 3" vertical={false} horizontal={true} />
            <XAxis dataKey="name" dy={15} tickLine={false}/>
            {/* <YAxis /> */}
            {/* Axe Y gauche pour le poids */}
            <YAxis
              yAxisId="left"
              orientation="left"
              // dataKey="Calories brûlées (kCal)"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
              domain={['dataMin - 1', 'dataMax + 1']}
            />
            {/* Axe Y droit pour les calories */}
            <YAxis
              yAxisId="right"
              orientation="right"
              // dataKey="Poids (kg)"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend verticalAlign="top" align="right" iconType="circle" height={64} formatter={(value) => ( <span style={{ marginLeft: 10, marginRight: 32, color: "#74798C" }}>{value}</span>)} wrapperStyle={{ marginTop: -20 }}/>
            <Bar dataKey="Poids (kg)" fill="#282D30" barSize={10} yAxisId="right" radius={[5, 5, 0, 0]} activeBar={<Rectangle fill="#282D30" />} />
            <Bar dataKey="Calories brûlées (kCal)" fill="#E60000" barSize={10} yAxisId="left" radius={[5, 5, 0, 0]} activeBar={<Rectangle fill="#E60000" />} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}