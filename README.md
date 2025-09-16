# GameOn - Amélioration Professionnelle de Landing Page

## Aperçu du Projet

GameOn est une landing page entièrement responsive pour l'inscription à un tournoi de jeux vidéo. Ce projet, initialement un exercice d'étudiant d'OpenClassrooms, a été professionnellement amélioré pour démontrer des compétences avancées en développement front-end. L'objectif principal était de transformer un projet partiellement fonctionnel avec des bugs connus en une application soignée, prête pour la production, avec une expérience utilisateur fluide.

## Fonctionnalités Clés

*   **Design Responsive :** Optimisé pour les ordinateurs de bureau, tablettes et appareils mobiles.
*   **Modale d'Inscription Interactive :** Un formulaire propre et intuitif pour l'inscription des utilisateurs.
*   **Validation Robuste Côté Client :** Des messages d'erreur en temps réel guident l'utilisateur pour remplir correctement le formulaire.
*   **UX Moderne avec Soumission de type AJAX :** Le formulaire se soumet sans rechargement de la page, offrant un retour instantané.
*   **Message de Confirmation Dynamique :** Un message de succès s'affiche dans la modale après une inscription réussie.

## Améliorations Professionnelles Apportées

Pour élever ce projet à un standard professionnel, les améliorations clés suivantes ont été mises en œuvre :

1.  **Refonte de la Logique de Validation du Formulaire :**
    *   La validation JavaScript originale, qui était buggée, a été entièrement réécrite pour être robuste et fiable.
    *   Des vérifications complètes sont maintenant en place pour tous les champs : longueur du nom, format d'email valide, présence de la date de naissance, quantité de tournois (en tant que nombre entier), sélection d'une ville et acceptation des conditions d'utilisation.

2.  **Modernisation de l'Expérience Utilisateur (UX) :**
    *   Implémentation d'une soumission de formulaire de type AJAX avec `event.preventDefault()` pour créer une sensation d'application monopage fluide.
    *   Remplacement du rechargement de page par un message de confirmation dynamique qui apparaît dans la modale, améliorant le retour utilisateur et la fluidité du parcours.

3.  **Nettoyage du Code et Bonnes Pratiques :**
    *   Refactorisation du JavaScript pour une meilleure lisibilité et maintenabilité.
    *   Suppression des attributs HTML inutiles (`action`, `method`) de la balise `<form>`, garantissant que la fonctionnalité est correctement gérée par JavaScript.
    *   Assurance que l'état de la modale et du formulaire se réinitialise correctement lors de la fermeture et de la réouverture, empêchant la persistance de données ou de messages d'erreur.

## Technologies Utilisées

*   HTML5
*   CSS3
*   JavaScript (ES6+)

## Comment Lancer le Projet

1.  **Clonez le dépôt :**
    ```bash
    git clone <votre-url-de-depot>
    ```
2.  **Naviguez vers le répertoire du projet :**
    ```bash
    cd GameOn-website-FR/starterOnly
    ```
3.  **Lancez le projet :**
    Pour une expérience optimale et pour garantir que toutes les fonctionnalités JavaScript fonctionnent correctement, lancez le projet sur un serveur local. Si Python est installé, vous pouvez utiliser :
    ```bash
    python3 -m http.server
    ```
    Ensuite, ouvrez votre navigateur et allez à `http://localhost:8000`.

---

# GameOn - Professional Landing Page Enhancement

## Project Overview

GameOn is a fully responsive landing page for registering for a video game tournament. This project began as a student exercise from OpenClassrooms and has been professionally enhanced to demonstrate advanced front-end development skills. The primary goal was to take a partially functional project with known bugs and transform it into a polished, production-ready application with a seamless user experience.

## Key Features

*   **Responsive Design:** Optimized for desktop, tablet, and mobile devices.
*   **Interactive Registration Modal:** A clean and intuitive form for user registration.
*   **Robust Client-Side Validation:** Real-time error messages guide the user to fill out the form correctly.
*   **Modern UX with AJAX-Style Submission:** The form submits without a page reload, providing instant feedback.
*   **Dynamic Confirmation Message:** A success message is displayed within the modal upon successful registration.

## Professional Enhancements Made

To elevate this project to a professional standard, the following key improvements were implemented:

1.  **Refactored Form Validation Logic:**
    *   The original buggy JavaScript validation was completely rewritten to be robust and reliable.
    *   Comprehensive checks are now in place for all fields: name length, valid email format, birthdate presence, tournament quantity (as an integer), city selection, and acceptance of terms.

2.  **Modernized User Experience (UX):**
    *   Implemented an AJAX-style form submission using `event.preventDefault()` to create a smooth, single-page application feel.
    *   Replaced the jarring page reload with a dynamic confirmation message that appears within the modal, improving user feedback and flow.

3.  **Code Cleanup and Best Practices:**
    *   Refactored the JavaScript for better readability and maintainability.
    *   Removed unnecessary HTML attributes (`action`, `method`) from the `<form>` tag, ensuring that functionality is correctly handled by JavaScript.
    *   Ensured the modal and form state reset properly when closed and reopened, preventing stale data or error messages from persisting.

## Technologies Used

*   HTML5
*   CSS3
*   JavaScript (ES6+)

## How to Run the Project

1.  **Clone the repository:**
    ```bash
    git clone <your-repository-url>
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd GameOn-website-FR/starterOnly
    ```
3.  **Run the project:**
    For the best experience and to ensure all JavaScript features work correctly, run the project on a local server. If you have Python installed, you can use:
    ```bash
    python3 -m http.server
    ```
    Then, open your browser and go to `http://localhost:8000`.