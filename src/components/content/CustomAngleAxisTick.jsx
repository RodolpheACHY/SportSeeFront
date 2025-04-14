import React from 'react';

const CustomAngleAxisTick = (tickProps) => {
  const { x, y, payload } = tickProps;
  let newY = y;
  let newX = x;

  switch (payload.value) {
    case 'Intensité':
      newY = y - 10;
      break;
    case 'Endurance':
      newY = y + 15;
      break;
    case 'Vitesse':
    case 'Force':
      newX = x + 20;
      break;
    case 'Energie':
    case 'Cardio':
      newX = x - 20;
      break;
    default:
      break;
  }

  return (
    <g transform={`translate(${newX},${newY})`}>
      <text
        style={{
          fill: '#FFFFFF',
          fontSize: 12,
          fontWeight: 500,
          fontFamily: 'Roboto',
          textAnchor: 'middle',
        }}
      >
        {payload.value}
      </text>
    </g>
  );
};

export default CustomAngleAxisTick;