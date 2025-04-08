import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const UserFisrtName = () => {

  return (
    <div>
      <h1>Bonjour, Jean 👋</h1>
      <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
};

UserFisrtName.propTypes = {
  userId: PropTypes.number.isRequired,
};

export default UserFisrtName;