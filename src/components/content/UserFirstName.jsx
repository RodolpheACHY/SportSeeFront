import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./userFirstName.module.scss";

const UserFisrtName = () => {

  return (
    <div>
      <h1 className={styles.userFirstName__h1}>Bonjour <span className={styles.userFirstName__span}>Jean</span></h1>
      <p className={styles.userFirstName__p}>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
};

UserFisrtName.propTypes = {
  userId: PropTypes.number.isRequired,
};

export default UserFisrtName;