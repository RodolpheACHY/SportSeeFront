import React from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import styles from './activitySimpleBarChart.module.scss'
import CustomTooltip from './CustomTooltip'
import PropTypes from "prop-types";

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
            <XAxis dataKey="day" dy={15} tickLine={false} />
            <YAxis
              yAxisId="right"
              orientation="right"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
              tickCount={3}
            />
            <YAxis
              yAxisId="left"
              orientation="left"
              axisLine={false}
              tickLine={false}
              tick={false }
              domain={['dataMin - 1', 'dataMax + 1']}
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

ActivitySimpleBarChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      day: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      kilogram: PropTypes.number.isRequired,
      calories: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ActivitySimpleBarChart ;