// On récupère l'URL de l'API si elle existe (mode API)
export const API_URL = import.meta.env.VITE_API_URL || null;

// Si l'API n'existe pas → on passe automatiquement en mocks
export const USE_MOCKS = !API_URL;

// Id par défaut quand aucun chemin /profil/:id n’est fourni
export const DEFAULT_USER = 12;