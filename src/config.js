export const USE_MOCKS = import.meta.env.VITE_USE_MOCKS === "true";

// On récupère l'URL de l'API si elle existe (mode API)
export const API_URL = import.meta.env.VITE_API_URL || null;

// Id par défaut quand aucun chemin /profil/:id n’est fourni
export const DEFAULT_USER = 12;

if (!USE_MOCKS && !API_URL) {
  throw new Error(
    "❌ API mode selected but VITE_API_URL is missing in .env"
  );
}