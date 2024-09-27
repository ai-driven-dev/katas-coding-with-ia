# Installation et Exécution du Jeu de la Vie

## Prérequis

- PHP 7.4 ou supérieur
- Composer

## Installation

1. **Installer PHP**  
    Téléchargez et installez PHP depuis [php.net](https://www.php.net/downloads).

2. **Installer Composer**  
    Téléchargez et installez Composer depuis [getcomposer.org](https://getcomposer.org/download/).

3. **Installer les dépendances**  
    Utilisez Composer pour installer les dépendances :

        composer install

## Exécution de l'application

Pour exécuter l'application, utilisez la commande suivante :

    composer start

## Exécution des tests

Pour exécuter les tests unitaires, utilisez la commande suivante :

    composer test

## Règles

Le Jeu de la Vie suit ces règles :

1. Toute cellule vivante avec moins de deux voisins vivants meurt, comme par sous-population.
2. Toute cellule vivante avec deux ou trois voisins vivants survit jusqu'à la génération suivante.
3. Toute cellule vivante avec plus de trois voisins vivants meurt, comme par surpopulation.
4. Toute cellule morte avec exactement trois voisins vivants devient une cellule vivante, comme par reproduction.

Ces règles sont appliquées simultanément à chaque cellule de la génération actuelle, créant ainsi la prochaine génération de la grille. Le jeu continue indéfiniment ou jusqu'à ce qu'une condition d'arrêt spécifiée soit atteinte.
