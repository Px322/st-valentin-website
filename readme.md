# ❤️ Valentine's Day Website

## Description

Ce projet est un mini-site web interactif de Saint-Valentin qui pose une question simple... avec un bouton "Non" qui refuse de se laisser cliquer.

Je l'ai créé pour m'amuser avec les interactions en JavaScript notamment la gestion dynamique des positions d'éléments et des événements en fonction de la souris. L'idée du bouton qui s'échappe m'intéressait car c'est une mécanique amusante. J'y ai aussi intégré un easter egg avec mot de passe pour ajouter une couche de découverte. Ce projet m'a pris environ une journée à développer.

## Image

![alt text](/readme_folder/image.png)
![alt text](/readme_folder/image-1.png)
![alt text](/readme_folder/image-2.png)

## Fonctionnement

- L'utilisateur arrive sur la page principale avec la question
- Le bouton "Non" se déplace aléatoirement dès que la souris s'en approche à 80px
- Cliquer sur "Oui" déclenche une page de célébration avec une pluie de coeurs
- Un lien caché `secret` en haut de page donne accès à une page protégée par mot de passe
- Le bon mot de passe redirige vers une page easter egg personnalisable

## Technologies

- **HTML/CSS/JS** — stack classique sans dépendance
- **Événements DOM** — gestion de `mouseenter`, `mousemove`, `keydown`
- **Repositionnement dynamique** — `position: fixed` + coordonnées aléatoires
- **Animations CSS** — pluie de cours grace à `@keyframes fall`
- **Détection de proximité** — calcul de `getBoundingClientRect()` pour détecter l'approche
- **Easter egg** — système de mot de passe simple


## Personnaliser le site

Tout se modifie directement dans `script.js` et les fichiers HTML :

- `secretPassword` dans `script.js` : le mot de passe de l'easter egg
- `easter-egg-page.html` : le message et l'indice de la page secrète (balises `[à compléter]`)
- `main.gif` et `oui.gif` : remplacer par les GIFs de votre choix


⚠️ Le mot de passe est visible en clair dans `script.js` 

## Installation

aucunes dépendances requises

## Ce qui pourrait être ajouté

- Son ou musique au clic sur "Oui"
- Compteur du nombre de fois que le bouton "Non" a été esquivé
- Version mobile avec détection tap to screen 
