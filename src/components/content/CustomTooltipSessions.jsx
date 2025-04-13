import styles from './customTooltipSessions.module.scss'

const CustomTooltipSessions = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const session = payload[0]; // accès à l’unique donnée
    return (
      <div className={styles['customTooltipSessions']}>
        {/* <span className={styles.customTooltipSessions__span}>{`${payload[0].value}mn`}</span> */}
        <span className={styles.customTooltipSessions__span}>{session.value} mn</span>
      </div>
    );
  }
  return null;
};

export default CustomTooltipSessions;