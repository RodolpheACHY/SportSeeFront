import CardNutriContainer from "../../components/content/CardNutriContainer";
import DashboardGraphs from "../../components/content/DashboardGraphs";
import styles from "./profilPage.module.scss";

const ProfilPage= () => {
  return (
    <div>
      <div className={styles.profilPage__graphsAndNutriContainer}>
        <DashboardGraphs />
        <CardNutriContainer />
      </div>
    </div>
  );
};

export default ProfilPage;
