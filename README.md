# 🏋️ SportSee – Tableau de bord d’analytics

Projet 12 – Formation **Développeur d’Applications JavaScript / React** (OpenClassrooms)  
Objectif : Créer un tableau de bord sportif permettant de visualiser l’activité d’un utilisateur via **React**, **Recharts** et une API dédiée.

---

## 🚀 Démo Backend (API)

Le backend est déployé ici :

👉 https://sportsee-backend-0iuz.onrender.com

ℹ️ Identifiants utilisateurs disponibles : **12** et **18**

---

## 📦 Structure du projet


```
📦 SportSeeFront
├── public/ # Fichiers statiques
├── src/
│ ├── assets/ # Images, icônes
│ ├── components/ # Composants UI réutilisables
│ ├── pages/ # Pages principales (Home, Profil, 404…)
│ ├── mockData/ # Données mockées JSON
│ ├── formatters/ # Transformation des données API
│ ├── services/ # Appels API + services Mock dynamiques
│ ├── dataLoaders/ # useEffect & fonctions de chargement
│ ├── styles/ # SASS : variables, mixins, helpers
│ ├── App.jsx # Composant racine
│ ├── main.jsx # Point d'entrée React
│ ├── Router.jsx # Gestion du routage
│ └── config.js # Configuration (Mock/API)
├── vite.config.js
├── .env.example # Exemple de configuration
└── README.md
```

---

## 🛠️ Prérequis

- Node.js ≥ 12.18 (recommandé : version LTS)
- npm **ou** Yarn
- Vite
- Sass
- Recharts
- (Optionnel) Docker Desktop
- Backend SportSee : https://sportsee-backend-0iuz.onrender.com

---

### Liens utiles

- [Maquette figma](https://www.figma.com/design/BMomGVZqLZb811mDMShpLu/UI-design-Sportify-FR?node-id=0-1)
- [Kanban](https://openclassrooms.notion.site/Tableau-de-bord-SportSee-6686aa4b5f44417881a4884c9af5669e)

---

## 🔧 Configuration des variables d’environnement (Mock ou API)

L’application peut fonctionner selon **2 modes** :

### ✔️ Mode Mock (données locales)  
→ Ne nécessite pas l’API  
→ Idéal pour travailler hors-ligne ou sans backend

### ✔️ Mode API (Backend Render)  
→ Requiert une URL valide  
→ Permet d’utiliser les vraies données renvoyées par l'API

---

1️⃣ Créer le fichier `.env.local`

Depuis le modèle :

```
cp .env.example .env.local
```

2️⃣ Choisir le mode de données

▶️ Mode Mock (par défaut)  
VITE_USE_MOCKS=true

▶️ Mode API  
VITE_USE_MOCKS=false  
VITE_API_URL=https://sportsee-backend-0iuz.onrender.com

---

## 🔌 Fonctionnement du backend

Endpoints disponibles :

- /user/:id  - Récupère les informations d'un utilisateur.
- /user/:id/activity - récupère l'activité d'un utilisateur jour par jour avec les kilogrammes et les calories.
- /user/:id/average-sessions - Récupère la moyenne des sessions d'un utilisateur par jour. La semaine commence le lundi.
- /user/:id/performance - Récupère les performances d'un utilisateur (énergie, endurance, etc.).

**Attention, seuls deux utilisateurs ont été simulés pour le moment. Leurs identifiants sont respectivement 12 et 18.**

Exemples :

```
https://sportsee-backend-0iuz.onrender.com/user/12
https://sportsee-backend-0iuz.onrender.com/user/18/activity
```

---

## 🚀 Installation & Lancement du projet

```
git clone https://github.com/RodolpheACHY/SportSeeFront.git
cd SportSeeFront
yarn
yarn dev
```


L’application sera disponible sur :

👉 http://localhost:5173

---

## 📱 Responsive

✔️ Optimisé pour bureau
❌ Non prévu pour mobile (selon la maquette OpenClassrooms)

## 📊 Fonctionnalités

 - [x] :white_check_mark: Affichage du prénom + message personnalisé

 - [x] Graphiques Recharts : activité, sessions, performance

 - [x] Cartes nutritionnelles (calories, glucides, lipides…)

 - [x] Données dynamiques via API ou fichiers mock

 - [x] Redirection vers page 404 si utilisateur invalide

 - [x] Séparation claire des services Mock/API

 - [x] Formatage des données selon les besoins des composants

---
 
## 📚 Données mockées (mode Mock)

Les JSON se trouvent ici :

```
src/mockData/user/{id}/activity.json
src/mockData/user/{id}/user.json
src/mockData/user/{id}/average-sessions.json
src/mockData/user/{id}/performance.json
```

---

### Auteur

🎓 Projet réalisé dans le cadre d’une formation [OpenClassrooms](https://openclassrooms.com/).  
💻 Codé avec ❤️ par **Rodolphe ACHY**

