export const activityFormatter = (data) => {
    return data.map((session, index) => ({
        day: (index + 1),
        kilogram: session.kilogram,
        calories: session.calories,
      }));
};