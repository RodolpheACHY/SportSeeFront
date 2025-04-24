import { Link } from "react-router-dom";
import styles from "./page404.module.scss";
import { DEFAULT_USER } from "../../config";

const Page404 = () => {
  return (
    <div className={styles.page404}> 
      <main className={styles.page404__content}>
        {/* Message principal 404 */}
        <h1 className={styles.page404__title}>404</h1>

        {/* Texte explicatif */}
        <p className={styles.page404__message}>
          Oups ! La page que vous demandez n&apos;existe pas.
        </p>

        {/* Lien vers la page de profil par défaut */}
        <Link to={`/profil/${DEFAULT_USER}`} className={styles.page404__link}>
          Retourner sur la page de profil par défaut
        </Link>
      </main>
    </div>
  );
};

export default Page404;