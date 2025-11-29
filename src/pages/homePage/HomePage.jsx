import { Link } from "react-router-dom";
import styles from "./homePage.module.scss";

export default function Home() {
  return (
    <main className={styles.homePage__homeContainer}>
      <h1 className={styles.homePage__homeTitle}>Bienvenue sur SportSee</h1>
      <p className={styles.homePage__homeSubtitle}>
        Choisissez votre profil pour accéder à vos performances.
      </p>

      <div className={styles.homePage__homeButtons}>
        <Link className={styles.homePage__homeBtn} to="/profil/12">
          Voir le profil de Karl (ID 12)
        </Link>

        <Link className={styles.homePage__homeBtn} to="/profil/18">
          Voir le profil de Cecilia (ID 18)
        </Link>
      </div>
    </main>
  );
}

