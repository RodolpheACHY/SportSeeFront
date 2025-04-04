import styles from "./IconWrapper.module.scss";
import PropTypes from "prop-types";

const IconWrapper = ({ IconComponent, size = "64px", bgColor = "#FFFFFF", radius = "10px" }) => {
  return (
    <div
      className={styles["icon-container"]}
      style={{
        "--size": size,
        "--bg-color": bgColor,
        "--radius": radius,
      }}
    >
      {/* Assure-toi que l'icône est bien affichée */}
      { IconComponent && <IconComponent className={styles.icon} />}
    </div>
  );
};

// Définition des PropTypes
IconWrapper.propTypes = {
    IconComponent: PropTypes.elementType.isRequired, // Un composant React (ex: un SVG importé)
    size: PropTypes.string, // Ex: "50px", "3rem"
    bgColor: PropTypes.string, // Ex: "#eee", "red", "rgba(0,0,0,0.5)"
    radius: PropTypes.string, // Ex: "10px", "50%"
  };
  
// Valeurs par défaut (au cas où elles ne sont pas passées en props)
  IconWrapper.defaultProps = {
    size: "50px",
    bgColor: "#eee",
    radius: "10px",
  };

export default IconWrapper;