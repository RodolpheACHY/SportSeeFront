import styles from './customTooltip.module.scss'
import PropTypes from "prop-types";

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className={styles['customTooltip']}>
        <span className={styles.customTooltip__span}>{`${payload[0].value}Kg`}</span>
        <span className={styles.customTooltip__span}>{`${payload[1].value}Kcal`}</span>
      </div>
    );
  }
  return null;
};

CustomTooltip.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    })
  ),
};

export default CustomTooltip;