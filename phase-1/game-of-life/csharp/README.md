# Jeu de la Vie

Ceci est une implémentation en C# du Jeu de la Vie de Conway.

## Installation

1. Assurez-vous d'avoir le SDK .NET installé sur votre machine. Vous pouvez le télécharger [ici](https://dotnet.microsoft.com/download).

2. Clonez ce dépôt ou téléchargez le code source.

3. Ouvrez un terminal ou une invite de commande et naviguez vers le répertoire du projet.

4. Exécutez la commande suivante pour compiler le projet :

    dotnet build

5. Une fois la compilation terminée, vous pouvez exécuter l'application en utilisant :

    dotnet run

## Règles

Le Jeu de la Vie suit ces règles :

1. Toute cellule vivante avec moins de deux voisins vivants meurt, comme par sous-population.
2. Toute cellule vivante avec deux ou trois voisins vivants survit jusqu'à la génération suivante.
3. Toute cellule vivante avec plus de trois voisins vivants meurt, comme par surpopulation.
4. Toute cellule morte avec exactement trois voisins vivants devient une cellule vivante, comme par reproduction.

Ces règles sont appliquées simultanément à chaque cellule de la génération actuelle, créant ainsi la prochaine génération de la grille. Le jeu continue indéfiniment ou jusqu'à ce qu'une condition d'arrêt spécifiée soit atteinte.
