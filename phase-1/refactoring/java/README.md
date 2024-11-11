# Java Console Application

## Prérequis

- Java Development Kit (JDK) 22 ou supérieur
- Apache Maven

## Installation

1. Installez les dépendances Maven :

```sh
mvn clean install
```

## Exécution des tests

Pour exécuter les tests

```sh
mvn test
```

## à faire

- [ ] Faire l'analyse de AssertionActionService et ajouter les tests manquants
- [ ] Refactoriser la duplication dans la méthode validateMandatoryClaims
- [ ] Refactoriser getAssertionActionResponse la condition !validateMandatoryClaims -> anyMandatoryClaimsRequired et adapter les retours dans validateMandatoryClaims.

## AIDD exercices

- [ ] Génère un plan via un prompt pour refactoriser "AssertionActionService.java" et "AssertionActionServiceTests.java", exemple "refactor-001.md"
  - Tips : pour retourner le plan en markdown ajouter cette consigne à la fin de votre prompt. "Génère-moi le Markdown correspondant dans un bloc de texte.".
- [ ] Executer pas à pas le plan ainsi généré.
