# Jeu de la Vie

Ceci est une implémentation simple du Jeu de la Vie de Conway en Elixir.

## Table des matières

- [Introduction](#introduction)
- [Installation](#installation)
- [Exécution de l'application](#exécution-de-lapplication)
- [Exécution des tests](#exécution-des-tests)
- [Règles](#règles)

## Introduction

Le Jeu de la Vie de Conway est un automate cellulaire conçu par le mathématicien John Horton Conway. Cette implémentation initialise une grille et fournit un cadre pour ajouter les règles du jeu.

## Installation

Pour commencer avec ce projet, vous devez avoir Elixir installé sur votre système. Si vous n'avez pas Elixir installé, suivez les instructions sur le [site officiel d'Elixir](https://elixir-lang.org/install.html).

Installez les dépendances :

    mix deps.get

## Exécution de l'application

Pour démarrer le Jeu de la Vie avec une grille de 5x5, exécutez la commande suivante dans votre terminal :

    mix run --no-halt

## Exécution des tests

    mix test

## Règles

Le Jeu de la Vie suit ces règles :

1. Toute cellule vivante avec moins de deux voisins vivants meurt, comme par sous-population.
2. Toute cellule vivante avec deux ou trois voisins vivants survit jusqu'à la génération suivante.
3. Toute cellule vivante avec plus de trois voisins vivants meurt, comme par surpopulation.
4. Toute cellule morte avec exactement trois voisins vivants devient une cellule vivante, comme par reproduction.

Ces règles sont appliquées simultanément à chaque cellule de la génération actuelle, créant ainsi la prochaine génération de la grille. Le jeu continue indéfiniment ou jusqu'à ce qu'une condition d'arrêt spécifiée soit atteinte.
