import CardNutriContainer from "../../components/content/CardNutriContainer";
import DashboardGraphs from "../../components/content/DashboardGraphs";
import UserFirstName from "../../components/content/UserFirstName";
import styles from "./profilPage.module.scss";
import { useEffect, useState } from "react";
import { getUserFirstNameData } from "../../dataLoaders/getUserFirstNameData";
import { useParams } from 'react-router-dom'; 

const ProfilPage = () => {
  const { id } = useParams(); 
  const [firstName, setFirstName] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFirstName = async () => {
      try {
        const name = await getUserFirstNameData(id);
        setFirstName(name || '');
      } catch (err) {
        setError(err.message);
      }
    };

    fetchFirstName();
  }, [id]);

  if (error) {
    return <div>Erreur lors de la récupération du nom : {error}</div>;
  }

  return (
    <div className={styles.profilPage}>
      <UserFirstName firstName={firstName} />
      <div className={styles.profilPage__graphsAndNutriContainer}>
        <DashboardGraphs /> 
        <CardNutriContainer />
      </div>
    </div>
  );
};

export default ProfilPage;
