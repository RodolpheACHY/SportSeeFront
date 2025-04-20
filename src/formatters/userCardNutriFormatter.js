import LogoEnergy from "../assets/Logo_energy_cal_2.svg?react";
import LogoChicken from "../assets/Logo_chicken_prot_2.svg?react";
import LogoApple from "../assets/Logo_apple_gluc_2.svg?react";
import LogoBurger from "../assets/Logo_burger_lip_2_bis.svg?react";

export const userCardNutriFormatter = (data) => {
    const { calorieCount, proteinCount, carbohydrateCount, lipidCount } = data.keyData;
  
    return [
      {
        icon: LogoEnergy,
        value: calorieCount,
        unit: "kCal",
        label: "Calories",
        bgColor: "#fbeaea",
      },
      {
        icon: LogoChicken,
        value: proteinCount,
        unit: "g",
        label: "Protéines",
        bgColor: "#e9f4fb",
      },
      {
        icon: LogoApple,
        value: carbohydrateCount,
        unit: "g",
        label: "Glucides",
        bgColor: "#fbf6e5",
      },
      {
        icon: LogoBurger,
        value: lipidCount,
        unit: "g",
        label: "Lipides",
        bgColor: "#fbeaef",
      },
    ];
  };