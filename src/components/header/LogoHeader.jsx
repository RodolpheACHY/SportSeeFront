import styles from "./header.module.scss";
import PropTypes from "prop-types"; // Import PropTypes

const LogoHeader = () => {
  return (
    <div 
      className={styles.header__logoHeader}
    >
      {/* les images importées depuis la balise <img> sont accessibles dans « public ». */}
      <img src="./logo+text.svg" alt="logo SportSee" className={styles.header__logoHeader} />
    </div>
  );
};

export default LogoHeader;
