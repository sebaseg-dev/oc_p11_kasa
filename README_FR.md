# OpenClassrooms – Projet 11 Kasa

## 📌 Description

Source code du **Projet 11 – Développez une application Web avec React et React Router**, complété dans le cadre du **parcours Développeur d'application JavaScript React**.

Ce projet a consisté à **implémenter le front-end d’une application web moderne** pour la location d’appartements entre particuliers, en utilisant **React**, **React Router** et **SASS**.
L’objectif était de **traduire des maquettes Figma en application fonctionnelle**, avec des animations CSS et un routage multi-pages.

Pages prévues :

* Page d’accueil et liste des logements
* Page détail d’un logement
* Pages statiques : À propos, Contact
* Composants modulaires : Gallery, Collapse, Header, Footer

⚠️ **Projet éducatif :** Ce dépôt a été créé dans un contexte de formation. Il **n’est pas destiné à la production**.

---

## 🎯 Objectifs pédagogiques

* Créer des composants avec **React**
* Développer les routes d’une application web avec **React Router**
* Initialiser et configurer une application web moderne avec **Vite**
* Intégrer des **animations CSS** et styles avec **SASS**
* Organiser un projet front-end selon les maquettes et les standards UX/UI

---

## 📦 Livrables & Structure du projet

* **Maquettes Figma** : référence pour le design responsive et les composants
* **Composants React** : modulaires et réutilisables, stockés dans `src/components/`
* **Pages et layout** : situés dans `src/pages/`, organisés avec un **layout global**
* **Routing React Router** : géré dans `src/Router.jsx`
* **Données simulées** : fichier JSON utilisé comme source de données pour le front-end
* **Animations CSS et SASS** : intégrées dans `src/assets/styles/`

---

## 🏗 Architecture de l’application

### 1. Point d’entrée

* `src/main.jsx` : initialisation de React et montage de l’application
* `src/Router.jsx` : définition des routes et gestion du routing multi-pages

### 2. Structure des pages

* `src/pages/root.jsx` : layout global contenant l’entête, le footer et le rendu des pages
* `src/pages/` : pages principales de l’application
* `src/components/` : composants réutilisables (Gallery, Collapse, Header, Footer, etc.)

---

## 🛠 Outils & Méthodologies

### 📦 Dépendances principales

* react
* react-dom
* react-router-dom

### 🛠 Dépendances de développement

* vite
* @vitejs/plugin-react
* eslint + plugins React
* prettier
* @types/react
* @types/react-dom

### Autres outils

* **SASS** pour le style et les animations CSS
* **Vite** pour le build et l’environnement de développement
* **Node.js** pour la gestion des dépendances et l’exécution JavaScript

---

## 🚀 Utilisation

Pour lancer l’application en mode développement :

```bash
npm install
npm run dev
```

Pour compiler l’application en production :

```bash
npm run build
```

Le build est généré dans le dossier `dist`.

Pour prévisualiser le build :

```bash
npm run preview
```

---

## ⚠️ Disclaimer

Ce projet est une **application front-end mockée** développée dans le cadre d’un apprentissage.
Il n’est pas relié à un back-end réel et **n’est pas destiné à la production**.
Le but est de démontrer la maîtrise de **React, React Router, SASS** et la capacité à traduire un **design Figma en application web fonctionnelle**.