//import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer, } from 'recharts';
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

const UserScoreSimpleRadialBarChart = () => {
    return (
      <div className={styles.UserScoreSimpleRadialBarChart}>
        <h2 className={styles.UserScoreSimpleRadialBarChart__Title}>Score</h2>
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart cx="50%" cy="42%" innerRadius="100" outerRadius="200" barSize={10} data={data} startAngle={80}
            endAngle={220}>
            <RadialBar
              minAngle={15}
              background
              clockWise
              cornerRadius={10}
              fill="#FF0000" 
              dataKey="value"
              barSize={13}
            />
            <circle
              cx="52%"
              cy="43%"
              r="34%"         // rayon du cercle intérieur
              fill="white"  // couleur de l’intérieur
              opacity="0.9"
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
          </RadialBarChart>
        </ResponsiveContainer>
      </div>
    );
}

export default UserScoreSimpleRadialBarChart;