import PropTypes from "prop-types";
import styles from "./cardNutri.module.scss";

const CardNutri = ({ icon: Icon, value, unit, label, bgColor }) => {
  return (
    <div className={styles.cardNutri}>
      <div
        className={styles["cardNutri__icon-container"]}
        style={{ backgroundColor: bgColor }}
      >
        <Icon className={styles.cardNutri__icon} />
      </div>
      <div className={styles["cardNutri__info-container"]}>
        <h2 className={styles.cardNutri__h2}>
          {value}
          <span>{unit}</span>
        </h2>
        <p className={styles.cardNutri__p}>{label}</p>
      </div>
    </div>
  );
};

CardNutri.propTypes = {
  icon: PropTypes.elementType.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  unit: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
};

export default CardNutri;