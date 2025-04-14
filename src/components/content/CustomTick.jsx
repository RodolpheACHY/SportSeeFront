const CustomTick = ({ payload, x, y, textAnchor }) => {
    const specialLabels = ["Intensité", "Endurance"]; // les labels à décaler
  
    const isSpecial = specialLabels.includes(payload.value);
  
    const offset = isSpecial ? 20 : 0; // distance à ajouter pour ceux qu'on veut éloigner
  
    return (
      <text
        x={x}
        y={y - offset} // décale verticalement (tu peux ajuster X aussi)
        textAnchor={textAnchor}
        fill="#FFF"
        fontSize={12}
      >
        {payload.value}
      </text>
    );
  };

  export default CustomTick;