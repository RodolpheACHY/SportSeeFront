import Navbar from "./Navbar";
import LogoHeader from "./LogoHeader";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <div>
      <header className={styles.header}>
        <LogoHeader 
          className={styles.header__logoHeader}
       />
        <Navbar className={styles.header__navigation} />
      </header>
    </div>
  );
};

export default Header;