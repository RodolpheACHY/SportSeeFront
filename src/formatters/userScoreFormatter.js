export const userScoreFormatter = (data) => {
    const { todayScore, score } = data;
    const preScore = todayScore ?? score;  // pour gérer les 2 cas
    const finalScore = preScore ? Math.round(preScore * 100) : 0;
    return finalScore;
};