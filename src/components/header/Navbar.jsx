import { NavLink } from "react-router-dom";
import styles from "./header.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.header__navigation}>
      <ul className={styles.header__list}>
        <li className={styles.header__item}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? `${styles.header__link} ${styles["header__link--active"]}`
                : styles.header__link
            }
          >
            Accueil
          </NavLink>
        </li>
        <li className={styles.header__item}>
          <NavLink
            to="/profil"
            className={({ isActive }) =>
              isActive
                ? `${styles.header__link} ${styles["header__link--active"]}`
                : styles.header__link
            }
          >
            Profil
          </NavLink>
        </li>
        <li className={styles.header__item}>
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              isActive
                ? `${styles.header__link} ${styles["header__link--active"]}`
                : styles.header__link
            }
          >
            Réglage
          </NavLink>
        </li>
        <li className={styles.header__item}>
          <NavLink
            to="/communauty"
            className={({ isActive }) =>
              isActive
                ? `${styles.header__link} ${styles["header__link--active"]}`
                : styles.header__link
            }
          >
            Communauté
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
