export const userScoreFormatter = (data) => {
    const { todayScore, score } = data;
    const preScore = todayScore ?? score;  // pour gérer les 2 cas
    const finalScore = Math.round(preScore * 100);
    return `${finalScore}%`;
};