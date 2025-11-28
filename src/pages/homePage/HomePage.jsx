import { Link } from "react-router-dom";
import styles from "./homePage.module.scss";

export default function Home() {
  return (
    <main className="home-container">
      <h1 className="home-title">Bienvenue sur SportSee</h1>
      <p className="home-subtitle">
        Sélectionnez un utilisateur pour afficher son tableau de bord.
      </p>

      <div className="home-buttons">
        <Link className="home-btn" to="/profil/12">
          Voir le profil de Karl (ID 12)
        </Link>

        <Link className="home-btn" to="/profil/18">
          Voir le profil de Cecilia (ID 18)
        </Link>
      </div>
    </main>
  );
}

