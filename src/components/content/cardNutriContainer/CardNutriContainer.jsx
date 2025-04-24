import CardNutri from "../cardNutri/CardNutri";
import styles from "./cardNutriContainer.module.scss";
import PropTypes from "prop-types";

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

CardNutriContainer.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.elementType.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      unit: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      bgColor: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default CardNutriContainer;