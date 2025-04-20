const formatDayLabel = (dayNumber) => {
  const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
  return days[dayNumber - 1] || '';
};

export const sessionFormatter = (data) => {
  return data.data.map(session => ({
    day: formatDayLabel(session.day),
    sessionLength: session.sessionLength
  }));
};