import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const UserFisrtName = ({ userId }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/user/${userId}`)
      .then((res) => res.json())
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.error("Erreur données utilisateur :", err))
      .finally(() => setLoading(false));
  }, [userId]);

  if (loading) return <p>Chargement...</p>;

  const { userInfos } = data;

  return (
    <div>
      <h1>Bonjour, {userInfos.firstName} 👋</h1>
      <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
};

UserFisrtName.propTypes = {
  userId: PropTypes.number.isRequired,
};

export default UserFisrtName;