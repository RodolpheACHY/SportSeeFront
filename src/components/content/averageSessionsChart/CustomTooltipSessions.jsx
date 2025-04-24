import styles from './customTooltipSessions.module.scss'
import PropTypes from "prop-types";

const CustomTooltipSessions = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const session = payload[0]; // accès à l’unique donnée
    return (
      <div className={styles['customTooltipSessions']}>
        <span className={styles.customTooltipSessions__span}>{session.value} mn</span>
      </div>
    );
  }
  return null;
};

CustomTooltipSessions.propTypes = {
  active: PropTypes.bool,
  payload: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    })
  ),
};

export default CustomTooltipSessions;