import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';
import styles from './UserScoreSimpleRadialBarChart.module.scss'

const data = [
  {
        "id": 12,
        "userInfos": {
            "firstName": "Karl",
            "lastName": "Dovineau",
            "age": 31
        },
        "todayScore": 0.12,
        "value": 12,
        "keyData": {
            "calorieCount": 1930,
            "proteinCount": 155,
            "carbohydrateCount": 290,
            "lipidCount": 50
        }
    }
];

const style = {
  top: '50%',
  right: 0,
  transform: 'translate(0, -50%)',
  lineHeight: '24px',
};

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/simple-radial-bar-chart-gnwjjg';

  render() {
    return (
      <div className={styles.UserScoreSimpleRadialBarChart}>
        <h2 className={styles.UserScoreSimpleRadialBarChart__Title}>Score</h2>
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart cx="50%" cy="42%" innerRadius="100" outerRadius="200" barSize={10} data={data} startAngle={80}
            endAngle={220}>
            <RadialBar
              minAngle={15}
              //label={{ fill: '#fff', position: 'middle', fontWeight: 'bold', formatter: (value) => `${value}%` }}
              background
              clockWise
              cornerRadius={10}
              fill="#FF0000" 
              dataKey="value"
              barSize={13}
            />
            {/* Texte centré */}
            <text
              x="50%"
              y="40%"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#282D30"
              fontSize="30"
              fontWeight="bold"
            >
              12%
            </text>

            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#74798C"
              fontSize="16"
            >
              <tspan x="50%" dy={6}>de votre</tspan>
              <tspan x="50%" dy={25}>objectif</tspan>
            </text>
            {/* <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} />  */}
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
    );
  }
}
