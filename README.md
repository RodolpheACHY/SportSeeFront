# SportSee

Projet 12 - de la formation Openclassrooms - Développeur d'applications JS/React -

Objectif : Développez un tableau de bord d'analytics avec React

## Pré-requis

- [React+Vite](https://vitejs.fr/guide/)
- [Recharts](https://recharts.org/en-US/guide)
- [SASS](https://sass-lang.com/install/)
- [Docker Desktop - optionnel](https://www.docker.com/products/docker-desktop)
- [Yarn](https://sass-lang.com/install/) ou [npm](https://nodejs.org/en/learn/getting-started/an-introduction-to-the-npm-package-manager)
- [NodeJS (version 12.18) or higher (tested up to Node 20.0)](https://nodejs.org/en/)

## Structure du projet

📦 SportSeeFront  
├── public/ # Fichiers statiques  
├── src/  
│ ├── assets/ # Images et icônes  
│ ├── components/ # Composants réutilisables  
│ ├── pages/ # Pages principales (Home, Profil, About, 404…)  
│ ├── mockData/ # Données mockées pour chaque utilisateur  
│ ├── formatters/ # Traitement des données pour les rendre au format attendu par le composant  
│ ├── services/ # Appels API & mocks dynamiques  
│ ├── dataLoaders/ # Fonctions de récupération des données via useEffect  
│ ├── styles/ # Variables, mixins, reset CSS…  
│ ├── App.jsx # Composant racine  
│ ├── main.jsx # Point d'entrée React  
│ ├── Router.jsx # Composant chargé du routage  
│ └── config.js # Fichier de configuration  
├── README.md # Présentation du projet, guide, et infos importantes pour prendre en main le projet  
└── vite.config.js  # Fichier de configuration de Vite  


## Description

Cette application va permettre aux utilisateurs de suivre le nombre de sessions réalisées ainsi que le nombre de calories brûlées.

### Liens utiles

- [Maquette figma](https://www.figma.com/design/BMomGVZqLZb811mDMShpLu/UI-design-Sportify-FR?node-id=0-1)
- [Backend](https://github.com/OpenClassrooms-Student-Center/SportSee)
- [Kanban](https://openclassrooms.notion.site/Tableau-de-bord-SportSee-6686aa4b5f44417881a4884c9af5669e)

### Installation

#### Configuration du fichier `config.js`

Dans ce projet, on peut basculer entre les données simulées (mockées) et les données de l'API en fonction de la valeur de la variable USE_MOCKS dans le fichier config.js.

1. Créez un fichier config.js à la racine du dossier src avec cette variable : export const USE_MOCKS = false ;

2. Choisir le mode de données à utiliser :

- Pour utiliser les données mockées, il faut spécifier cette variable à true 

- Pour utiliser les données provenant de l'API , il faut spécifier cette variable à false

#### Installer & Lancer le Backend

Suivre les intructions sur ce lien  : https://github.com/OpenClassrooms-Student-Center/SportSee

#### Installer & Lancer le Frontend

```bash
git clone https://github.com/RodolpheACHY/SportSeeFront.git
cd my-react-app
yarn
yarn dev
```

### Changer d'utilisateur via l'URL:

- [User 12](http://localhost:5173/profil/12) - http://localhost:5173/profil/12  
- [User 18](http://localhost:5173/profil/18) - http://localhost:5173/profil/18

### Responsive

Le projet est lisible à partir de 1024x768 

### Fontionnalités

- [x] Affichage du prénom et messages personnalisés
- [x] Graphiques : activité, performance, sessions
- [x] Données nutritionnelles : calories, protéines, etc.
- [x] Récupération dynamique des données (API ou mock)
- [x] Redirection automatique vers la page 404 si l’ID utilisateur n’existe pas

### Donnnées mockées dispos dans

SportSeeFront\src\mockData\user\\{id}\activity.json  
SportSeeFront\src\mockData\user\\{id}\user.json  
SportSeeFront\src\mockData\user\\{id}\average-sessions.json  
SportSeeFront\src\mockData\user\\{id}\performance.json  

### Endpoints

- http://localhost:3000/user/${userId} - Récupère les informations d'un utilisateur. Ce premier point de terminaison comprend l'identifiant utilisateur, ses informations (prénom, nom et âge), son score du jour (todayScore) et des données clés (calories, macronutriments, etc.).
- http://localhost:3000/user/${userId}/activity - récupère l'activité d'un utilisateur jour par jour avec les kilogrammes et les calories.
- http://localhost:3000/user/${userId}/average-sessions - Récupère la moyenne des sessions d'un utilisateur par jour. La semaine commence le lundi.
- http://localhost:3000/user/${userId}/performance - Récupère les performances d'un utilisateur (énergie, endurance, etc.).

**Attention, seuls deux utilisateurs ont été simulés pour le moment. Leurs identifiants sont respectivement 12 et 18.**

### Exemples de requêtes

- http://localhost:3000/user/12/performance - Récupère les performances de l'utilisateur avec l'id 12 
- http://localhost:3000/user/18 - Récupère les informations principales du user 18.

### Auteur

🎓 Projet réalisé dans le cadre d’une formation [OpenClassrooms](https://openclassrooms.com/).  
💻 Codé avec ❤️ par **Rodolphe / RodolpheACHY**