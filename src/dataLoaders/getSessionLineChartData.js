import { fetchSessionData } from '../services/sessionServiceAPI';
import { sessionFormatter } from '../formatters/sessionFormatter';

export const getSessionLineChartData = async (userId) => {
    const sessions = await fetchSessionData(userId);
    return sessionFormatter(sessions);
};