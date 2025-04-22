import CardNutriContainer from "../../components/content/CardNutriContainer";
import DashboardGraphs from "../../components/content/DashboardGraphs";
import UserFirstName from "../../components/content/UserFirstName";
import styles from "./profilPage.module.scss";
import { useEffect, useState } from "react";
import { getUserFirstNameData } from "../../dataLoaders/getUserFirstNameData";
import { getCardNutriContainerData } from "../../dataLoaders/getCardNutriContainerData"
import { Navigate, useParams } from 'react-router-dom'; 

const ProfilPage = () => {
  const { id } = useParams(); 
  const [firstName, setFirstName] = useState("");
  const [keyData, setKeyData] = useState(null)
  const [error, setError] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchFirstName = async () => {
      try {
        const name = await getUserFirstNameData(id);
        const KeyData = await getCardNutriContainerData(id);
      
        if (!name || !KeyData) {
          // Données introuvables
          setNotFound(true);
          return
        } 
        
        // Données trouvées
        setFirstName(name || '');
        setKeyData(KeyData || {});
      } catch (err) {
        // Erreur technique (fetch planté, etc.)
        console.error("Erreur technique : ", err);
        setError("Une erreur est survenue. Veuillez réessayer.");
      }
    };

    fetchFirstName();
  }, [id]);

  // Redirection si aucune donnée trouvée ou si c’est une erreur technique
  if (notFound || error) {
    return <Navigate to="*" replace={true} />;
  } 

  if (!keyData || !firstName) {   // pour gérer les cas où l'id n'existe pas, si on laisse pas ça, on a la partie FirstName qui s'affiche rapidement avant d'afficher la page 404
    return <p>Chargement des données...</p>;    // ce message s'affiche tout le temps, le temps de charger les datas. 
  } 

  return (
    <div className={styles.profilPage}>
      <UserFirstName firstName={firstName} />
      <div className={styles.profilPage__graphsAndNutriContainer}>
        <DashboardGraphs /> 
        <CardNutriContainer cards={keyData} />
      </div>
    </div>
  );
};

export default ProfilPage;
