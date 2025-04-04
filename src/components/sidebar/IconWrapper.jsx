import React from "react";
import styles from "./IconWrapper.module.scss";
import PropTypes from "prop-types";

const IconWrapper = ({ IconComponent, size = "64px", bgColor = "#FFFFFF", radius = "10px", onClick }) => {
    const containerStyle = {
        "--size": size,
        "--bg-color": bgColor,
        "--radius": radius,
        cursor: onClick ? 'pointer' : 'default', // Changer le curseur si cliquable
    };

    const handleClick = (event) => {
        if (onClick) {
          onClick(event);
        }
    };

    return (
    <div
      className={styles["iconWrapper__icon-container"]}
      style={containerStyle}
      onClick={handleClick}
      role={onClick ? "button" : undefined} // Ajouter le rôle si cliquable
      tabIndex={onClick ? 0 : undefined} // Ajouter le tabIndex si cliquable
    >
      {/* Assure-toi que l'icône est bien affichée */}
      { IconComponent && <IconComponent className={styles.iconWrapper__icon} />}
    </div>
  );
};

// Définition des PropTypes
IconWrapper.propTypes = {
    IconComponent: PropTypes.elementType.isRequired, // Un composant React (ex: un SVG importé)
    size: PropTypes.string, // Ex: "50px", "3rem"
    bgColor: PropTypes.string, // Ex: "#eee", "red", "rgba(0,0,0,0.5)"
    radius: PropTypes.string, // Ex: "10px", "50%"
    onClick: PropTypes.func, // La prop onClick est optionnelle maintenant
  };
  
// Valeurs par défaut (au cas où elles ne sont pas passées en props)
  IconWrapper.defaultProps = {
    size: "64px",
    bgColor: "#FFFFFF",
    radius: "10px",
  };

export default IconWrapper;