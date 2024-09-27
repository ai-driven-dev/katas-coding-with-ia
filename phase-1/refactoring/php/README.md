# Refactoring

Ce projet utilise PHPUnit pour les tests unitaires. Suivez les étapes ci-dessous pour installer PHPUnit via Composer et exécuter les tests.

## Prérequis

- PHP (version 7.4 ou supérieure)
- Composer (outil de gestion des dépendances pour PHP) install

## Installation

1. Installez les dépendances :

    ```bash
    composer install
    ```

2. Lancer les tests :

    ```bash
    composer test
    ```

### Run test in terminal

```bash
phpunit
```

## PHP Intelephense

1. Ouvrez Visual Studio Code.

2. Cliquez sur l'icône des extensions dans la barre latérale à gauche (ou utilisez le raccourci `Ctrl+Shift+X`).

3. Dans la barre de recherche des extensions, tapez `PHP Intelephense`.

4. Cliquez sur le bouton `Installer` pour installer l'extension.

## À faire

[] Ajouter les tests manquants dans AssertionActionServiceTest (que se passe-t-il si vous supprimez un "if")
[] Refactoriser validateMandatoryClaims (supprimer la duplication)
[] Refactoriser getAssertionActionResponse
