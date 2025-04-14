import CardNutri from "./CardNutri";
import LogoEnergy from "../../assets/Logo_energy_cal_2.svg?react";
import LogoChicken from "../../assets/Logo_chicken_prot_2.svg?react";
import LogoApple from "../../assets/Logo_apple_gluc_2.svg?react";
import LogoBurger from "../../assets/Logo_burger_lip_2_bis.svg?react";
import styles from "./cardNutriContainer.module.scss";

const CardNutriContainer = () => {
  const cards = [
    {
      icon: LogoEnergy,
      value: 1930,
      unit: "kCal",
      label: "Calories",
      bgColor: "#fbeaea",
    },
    {
      icon: LogoChicken,
      value: 155,
      unit: "g",
      label: "Protéines",
      bgColor: "#e9f4fb",
    },
    {
      icon: LogoApple,
      value: 290,
      unit: "g",
      label: "Glucides",
      bgColor: "#fbf6e5",
    },
    {
      icon: LogoBurger,
      value: 50,
      unit: "g",
      label: "Lipides",
      bgColor: "#fbeaef",
    },
  ];

  return (
    <div className={styles.cardNutriContainer}>
      {cards.map((card, index) => (
        <CardNutri
          key={index}
          icon={card.icon}
          value={card.value}
          unit={card.unit}
          label={card.label}
          bgColor={card.bgColor}
        />
      ))}
    </div>
  );
};

export default CardNutriContainer;