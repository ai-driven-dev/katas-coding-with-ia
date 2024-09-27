# Projet TypeScript

## Prérequis

- Node.js (version 14.x ou supérieure)
- npm (version 6.x ou supérieure)

## Installation

1. Installez les dépendances :

    ```bash
    npm install
    ```

2. Installez les dépendances :

    ```bash
    npm run build
    ```

3. Installez les dépendances :

    ```bash
    npm start
    ```

4. lancez les tests :

    ``` bash
    npm run test -- --watch
    ```

## Règles

Le Jeu de la Vie suit ces règles :

1. Toute cellule vivante avec moins de deux voisins vivants meurt, comme par sous-population.
2. Toute cellule vivante avec deux ou trois voisins vivants survit jusqu'à la génération suivante.
3. Toute cellule vivante avec plus de trois voisins vivants meurt, comme par surpopulation.
4. Toute cellule morte avec exactement trois voisins vivants devient une cellule vivante, comme par reproduction.

Ces règles sont appliquées simultanément à chaque cellule de la génération actuelle, créant ainsi la prochaine génération de la grille. Le jeu continue indéfiniment ou jusqu'à ce qu'une condition d'arrêt spécifiée soit atteinte.
