const kindTranslation = {
    cardio: "Cardio",
    energy: "Energie",
    endurance: "Endurance",
    strength: "Force",
    speed: "Vitesse",
    intensity: "Intensité"
  };
  
  const kindOrder = ["Intensité", "Vitesse", "Force", "Endurance", "Energie", "Cardio"];
  
  export const formatPerformanceDataForRadar = (data, kind) => {
    const translated = data.map((item) => {
      const kindLabel = kindTranslation[kind[item.kind]];
      return {
        value: item.value,
        subject: kindLabel,
      };
    });
  
    return translated.sort((a, b) =>
      kindOrder.indexOf(a.subject) - kindOrder.indexOf(b.subject)
    );
  };
  