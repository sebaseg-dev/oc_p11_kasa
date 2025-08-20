# OpenClassrooms - Projet 11 Kasa

## Description

Code source du projet 11 - Développez une application Web avec React et React Router du parcours Développeur d'application JavaScrip React.

Objectifs pédagogiques:

- Créer des composants avec React
- Développer les routes d'une application web avec React Router
- Initialiser une application web avec un framework

Projet à développer sur la base d'une [maquette Figma](https://www.figma.com/design/2BZEoBhyxt5IwZgRn0wGsL/Kasa_FR?node-id=0-1) fournie avec Vite, React et React Router sans bibliothèque externe. Utilisation de Sass pour le style et les animations.

[Live preview](https://oc-p11-kasa.vercel.app/) - site en version mockée hébergée sur Vercel

## Utilisation

Pour lancer l'application React, exécutez la commande suivante :

    npm run dev

Cette commande utilisera Vite pour démarrer une application de développement

Pour compiler votre projet en production, utilisez la commande suivante :

    npm run build

Cette commande générera un dossier dist contenant les fichiers compilés.

## Architecture de l'application

### 1. Point d'entrée

- `src/main.jsx` : initialise React et monte l’application dans le DOM via le router:
- `src/Router.jsx` : contient la logique de routing de l'ensemble de l'application

### 2. Structure des pages

Un layout (`src/pages/root.jsx`) organise la structure de base des pages, au sein duquel les pages son représentées en fonction de la logique de routing (autres éléments du répertoire `src/pages/`).

Le répertoire `src/components/` contient des composants React, modulaires et réutilisables.

## 🛠️ Technologies utilisées

### 📦 Dépendances de production

- React ^19.1.0
- React DOM ^19.1.0
- React Router DOM ^7.6.0
- npm (gestionnaire de paquets Node.js)

### 🛠️ Dépendances de développement

#### 🔧 Build & Plugins

- Vite ^6.3.5
- @vitejs/plugin-react ^4.4.1

#### ✨ Typages

- @types/react ^19.1.2
- @types/react-dom ^19.1.2

#### 🧹 Linting / Qualité de code

- ESLint ^9.25.0
- @eslint/js ^9.25.0
- eslint-plugin-react-hooks ^5.2.0
- eslint-plugin-react-refresh ^0.4.19
- globals ^16.0.0
- Prettier 3.6.2