import IconWrapper from "../sidebar/IconWrapper";
import styles from "./cardNutri.module.scss";
import PropTypes from "prop-types";

const CardNutri = ({ icon, value, unit, label, bgColor, size, radius, iconSize, iconNutriSize }) => {
  return (
    <div className={styles.cardNutri}>
        <div className={styles['cardNutri__icon-container']}>
            <IconWrapper IconComponent={icon} bgColor={bgColor} size={size} radius={radius} iconSize={iconSize} iconNutriSize={iconNutriSize}/>
        </div>
        <div className={styles["cardNutri__info-container"]}>
            <h2 className={styles.cardNutri__h2}>{value}<span>{unit}</span></h2>
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
    bgColor: PropTypes.string, // Pour personnaliser la couleur du fond de l'icône
    size: PropTypes.string,
    radius: PropTypes.string,
    iconSize: PropTypes.string,
    iconNutriSize: PropTypes.string,
  };
export default CardNutri;