import CardNutri from "../cardNutri/CardNutri";
import styles from "./cardNutriContainer.module.scss";

const CardNutriContainer = ({cards}) => {

  return (
    <div className={styles.cardNutriContainer}>
      {cards && cards.map((card, index) => (
        <CardNutri
          key={index}
          icon={card.icon}
          value={card.value}
          unit={card.unit}
          label={card.label}
          bgColor={card.bgColor}
        />
      ))}
    </div>
  );
};

export default CardNutriContainer;