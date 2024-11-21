# Refactoring csharp

## Prérequis

- .NET SDK (version 8.0 ou supérieure)

## Installation

1. Restaurez les dépendances :

    ```bash
    dotnet restore
    ```

2. Compilez et testez le projet :

    ```bash
    dotnet test
    ```

## Rules

- [ ] la couverture de test doit être à 100% et les chemins d'execution vérifiés
- [ ] La lisibilité du code doit être améliorée

## AIDD exercices

- [ ] Génère un plan via un prompt pour refactoriser "AssertionActionService" et "AssertionActionServiceTests", exemple "refactor-001.md"
  - Pour retourner du markdown ajouter "Génère-moi le Markdown correspondant dans un bloc de texte." à la fin du prompt.
- [ ] Executer pas à pas le plan ainsi généré.
