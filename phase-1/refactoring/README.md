# Guide pour les exercices de refactorisation

L'objectif de ces exercices de refactorisation est de :

1. Observer comment l'IDE gère les tests, la refactorisation et le formatage
2. Utiliser des outils d'analyse statique
3. Apprendre et pratiquer les raccourcis clavier pour les opérations de refactorisation comme le renommage
4. Exploiter l'IA pour générer des tests supplémentaires et refactoriser le code

## Exercices

1. Gestion des tests :
    - Que se passe-t-il si vous supprimez une condition dans le code ? les tests passent-ils toujours ?
    - Comment l'IDE réagit-il aux changements de couverture de test ?

2. Tests de mutation :
    - Mettre en œuvre des tests de mutation pour évaluer la qualité de votre suite de tests

3. codes smell :
    - Identifier et refactoriser les "codes smell"
    - S'exercer à éviter l'utilisation de "not ou !" dans les instructions conditionnelles

4. Fonctionnalités de l'IDE :
    - Explorer les options de formatage automatique
    - Utiliser des outils d'analyse statique pour identifier les problèmes potentiels

5. Techniques de refactorisation :
    - S'exercer à utiliser des raccourcis pour les opérations courantes de refactorisation (par exemple, renommer, extraire une méthode)
    - Essayer des refactorisations plus complexes et observer comment l'IDE vous assiste

6. Développement assisté par l'IA :
    - Utiliser des outils d'IA pour générer des cas de test supplémentaires
    - Expérimenter avec des refactorisations suggérées par l'IA et évaluer leur efficacité

7. Gestion des commits :
    - Faire des commits réguliers pour faciliter la relecture de code et comprendre l'approche utilisée
    - Utiliser des noms de commits explicites

N'oubliez pas d'exécuter fréquemment les tests et d'utiliser le contrôle de version pour suivre vos modifications tout au long du processus de refactorisation.

Exemples de noms de commits explicites :

- "Refactor: Extrait la méthode calculateTotal pour améliorer la lisibilité"
- "Fix: Corrige la condition dans la boucle for pour éviter les index out of bounds"
- "Test: Ajoute des tests de mutation pour la classe UserService"
- "Perf: Optimise la requête SQL dans la méthode getUsersByRole"
- "Docs: Met à jour la documentation de l'API REST"
- "Style: Applique le formatage automatique sur le module de paiement"

Ces commits explicites permettent de suivre facilement l'évolution du code et de comprendre les modifications apportées à chaque étape du processus de refactorisation.
