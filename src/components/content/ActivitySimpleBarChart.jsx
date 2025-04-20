import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styles from './activitySimpleBarChart.module.scss'
import CustomTooltip from './CustomTooltip'
//import { data } from '../../mockData/user/12/activity.json'

// const mockData = data.sessions;

/*
const mockData = [
  {
      "day": "2020-07-01",
      "kilogram": 80,
      "calories": 240
  },
  {
      "day": "2020-07-02",
      "kilogram": 80,
      "calories": 220
  },
  {
      "day": "2020-07-03",
      "kilogram": 81,
      "calories": 280
  },
  {
      "day": "2020-07-04",
      "kilogram": 81,
      "calories": 290
  },
  {
      "day": "2020-07-05",
      "kilogram": 80,
      "calories": 160
  },
  {
      "day": "2020-07-06",
      "kilogram": 78,
      "calories": 162
  },
  {
      "day": "2020-07-07",
      "kilogram": 76,
      "calories": 390
  }
] */

const formatDayIndex = (value, index) => {
  return (index + 1).toString();
}

const ActivitySimpleBarChart = ( {data} ) => {
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
            <XAxis dataKey="day" dy={15} tickLine={false} tickFormatter={formatDayIndex}/>
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
            <Bar dataKey="kilogram" name="Poids (kg)" fill="#282D30" barSize={10} yAxisId="right" radius={[5, 5, 0, 0]} activeBar={<Rectangle fill="#282D30" />} />
            <Bar dataKey="calories" name="Calories brûlées (kCal)" fill="#E60000" barSize={10} yAxisId="left" radius={[5, 5, 0, 0]} activeBar={<Rectangle fill="#E60000" />} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
}

export default ActivitySimpleBarChart ;