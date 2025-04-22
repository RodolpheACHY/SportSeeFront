import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <div>
      <footer className={styles.footer}>
        <p className={styles.footer__p}>Copiryght, SportSee 2020</p>
      </footer>
    </div>
  );
};

export default Footer;