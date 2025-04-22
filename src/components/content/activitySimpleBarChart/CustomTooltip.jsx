import styles from './customTooltip.module.scss'

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

export default CustomTooltip;