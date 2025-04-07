import CardNutri from "./CardNutri";
import LogoEnergy from "../../assets/Logo_energy_cal.svg?react";
import LogoChicken from "../../assets/Logo_chicken_prot.svg?react";
import LogoApple from "../../assets/Logo_apple_gluc.svg?react";
import LogoBurger from "../../assets/Logo_burger_lip.svg?react";
import styles from "./cardNutriContainer.module.scss";

const CardNutriContainer = () => {
  return (
    <div className={styles.cardNutriContainer}>
      <CardNutri icon={LogoEnergy} value={1930} unit="kCal" label="Calories" bgColor="#fbeaea" size="60px" radius="5px" iconSize="32px" />
      <CardNutri icon={LogoChicken} value={155} unit="g" label="Protéines" bgColor="#e9f4fb" size="60px" radius="5px" iconSize="32px" />
      <CardNutri icon={LogoApple} value={290} unit="g" label="Glucides" bgColor="#fbf6e5" size="60px" radius="5px" iconSize="32px" />
      <CardNutri icon={LogoBurger} value={50} unit="g" label="Lipides" bgColor="#fbeaef" size="60px" radius="5px" iconSize="32px" />
    </div>
  );
};

export default CardNutriContainer;