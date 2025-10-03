# OpenClassrooms – Project 11 Kasa

> [README en français](./README_FR.md)

## 📌 Description

Source code of **Project 11 – Build a Web Application with React and React Router**, completed as part of the **OpenClassrooms JavaScript React Developer path**.

This project consisted of **implementing the front-end of a modern web application** for apartment rentals between individuals, using **React**, **React Router**, and **SASS**.
The goal was to **translate Figma mockups into a functional application**, including CSS animations and multi-page routing.

Planned pages:

* Home page and apartment listings
* Apartment detail page
* Static pages: About, Contact
* Modular components: Gallery, Collapse, Header, Footer

⚠️ **Educational project:** This repository was created for learning purposes and is **not intended for production**.

---

## 🎯 Learning Objectives

* Build components with **React**
* Develop routes in a web application with **React Router**
* Initialize and configure a modern web application with **Vite**
* Integrate **CSS animations** and styles using **SASS**
* Organize a front-end project according to mockups and UX/UI standards

---

## 📦 Deliverables & Project Structure

* **Figma Mockups**: reference for responsive design and components
* **React Components**: modular and reusable, located in `src/components/`
* **Pages and Layout**: located in `src/pages/`, organized with a **global layout**
* **React Router Routing**: handled in `src/Router.jsx`
* **Mock Data**: JSON file used as the front-end data source
* **CSS and SASS Animations**: included in `src/assets/styles/`

---

## 🏗 Application Architecture

### 1. Entry Point

* `src/main.jsx`: initializes React and mounts the application
* `src/Router.jsx`: defines routes and handles multi-page routing

### 2. Page Structure

* `src/pages/root.jsx`: global layout containing header, footer, and page rendering
* `src/pages/`: main application pages
* `src/components/`: reusable components (Gallery, Collapse, Header, Footer, etc.)

---

## 🛠 Tools & Methodologies

### 📦 Main Dependencies

* react
* react-dom
* react-router-dom

### 🛠 Development Dependencies

* vite
* @vitejs/plugin-react
* eslint + React plugins
* prettier
* @types/react
* @types/react-dom

### Other Tools

* **SASS** for styling and CSS animations
* **Vite** for building and development environment
* **Node.js** for dependency management and running JavaScript

---

## 🚀 Usage

To start the application in development mode:

```bash
npm install
npm run dev
```

To build the application for production:

```bash
npm run build
```

The build will be generated in the `dist` folder.

To preview the build:

```bash
npm run preview
```

---

## ⚠️ Disclaimer

This project is a **mocked front-end application** developed for learning purposes.
It is not connected to a real back-end and **is not intended for production**.
The goal is to demonstrate proficiency in **React, React Router, and SASS**, and the ability to translate a **Figma design into a functional web application**.