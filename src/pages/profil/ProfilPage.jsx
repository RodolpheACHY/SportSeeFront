import CardNutriContainer from "../../components/content/CardNutriContainer";
import DashboardGraphs from "../../components/content/DashboardGraphs";
import UserFirstName from "../../components/content/UserFirstName";
import styles from "./profilPage.module.scss";

const ProfilPage= () => {
  return (
    <div className={styles.profilPage}>
      <UserFirstName />
      <div className={styles.profilPage__graphsAndNutriContainer}>
        <DashboardGraphs />
        <CardNutriContainer />
      </div>
    </div>
  );
};

export default ProfilPage;
