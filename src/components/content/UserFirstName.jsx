import PropTypes from "prop-types";
import styles from "./userFirstName.module.scss";

const UserFisrtName = ({ firstName }) => {

  return (
    <div>
      <h1 className={styles.userFirstName__h1}>Bonjour <span className={styles.userFirstName__span}>{firstName}</span></h1>
      <p className={styles.userFirstName__p}>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
};

UserFisrtName.propTypes = {
  firstName: PropTypes.string.isRequired,
};

export default UserFisrtName;