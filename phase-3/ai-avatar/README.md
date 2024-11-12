# AI-Avatar

``` sh
ai-avatar/
├── src/
│   ├── api/
│   │   ├── apiMistralCompletion.js  # API pour les complétions avec Mistral
│   │   └── apiMistralSearchArticles.js  # API pour la recherche d'articles en utilisant Mistral function calling
│   ├── config/
│   │   └── config.js         # Configuration des paramètres (API, Discord token, etc.)
│   ├── data/
│   │   └── urls.json         # Données des URLs d'articles
│   ├── discord/
│   │   └── discordClient.js  # Client Discord pour gérer les interactions avec Discord
│   ├── features/
│   │   ├── chatbot/
│   │   │   ├── contextualizeMessage.js  # Gestion de la contextualisation des messages
│   │   │   └── promptManager.js  # Gestion du prompt engineering (construction, ajustements, etc.)
│   │   └── searchArticles/
│   │       └── articleSearch.js  # Recherche d'articles
│   ├── app.js                # Fichier principal pour l'application console
│   └── botBehaviors.js       # Comportements du bot (recherche d'articles, chatbot)
├── plans/
│   └── blueprint_to_rename.md  # Plan d'implémentation du 'nouveau use case'
├── README.md                 # Documentation du projet
├── .env                      # Variables d'environnement pour les tokens et les API keys
├── .env.example              # Exemple de fichier de variables d'environnement
├── .gitignore                # Ignorer les fichiers sensibles (comme .env) et les fichiers générés
└── package.json              # Dépendances et scripts du projet
```

## Initialisation du projet

Pour initialiser le projet, suivez les étapes suivantes :

1. Installez les dépendances :

   ```bash
   npm install
   ```

2. Démarrez l'application en mode console :

   ```bash
   npm run start
   ```

3. Démarrez l'application en mode HTTP :

   ```bash
   npm run start-http
   ```

4. Démarrez le client Discord :

   ```bash
   npm run discord
   ```

## Utilisation de Docker

Pour exécuter l'application avec Docker, suivez les étapes suivantes :

1. Construisez et démarrez les conteneurs Docker :

    ```bash
    docker-compose up --build
    ```

2. Accédez à l'application via votre navigateur à l'adresse `http://localhost:4000`.

3. Pour arrêter les conteneurs, utilisez la commande :

    ```bash
    docker-compose down
    ```

## Documentation de l'API Mistral

L'API Mistral est utilisée pour les complétions et la recherche d'articles. Voici les fichiers principaux :

- [apiMistralCompletion.js](src/api/apiMistralCompletion.js) : Gère les complétions avec Mistral.
- [apiMistralSearchArticles.js](src/api/apiMistralSearchArticles.js) : Gère la recherche d'articles en utilisant [Mistral function calling](https://docs.mistral.ai/capabilities/function_calling/).

### Configuration

Les paramètres de l'API Mistral sont configurés dans le fichier [config.js](src/config/config.js). Assurez-vous de définir les variables d'environnement appropriées dans le fichier `.env` :

```env
DISCORD_TOKEN=your_discord_token
API_KEY=your_api_key
MODEL_ENDPOINT=your_model_endpoint
MODEL_MISTRAL=your_model_mistral
```

#### Mistral

example :

- MODEL_ENDPOINT=<https://api.mistral.ai/v1/chat/completions>
- MODEL=open-mixtral-8x22b

[Voir tous les modèles disponible gratuitement](https://docs.mistral.ai/getting-started/models/models_overview/#free-models)

#### Discord

Le token Discord peut être généré dans la section "bot" après avoir [créé une application](https://discord.com/developers/applications).

1. Bot -> Reset Token -> récupérer le token et le mettre dans le fichier `.env`.
2. Installation -> Guild Install -> ajouter le scope "Bot".
3. Bot -> Privileged Gateway Intents -> sélectionner toutes les "intents".

Pour l'API Discord, le [Postman public API](https://www.postman.com/discord-api/discord-api/collection/0d7xls9/discord-rest-api) est un bon moyen de découvrir l'API.

20 minutes de documentation peuvent sauver 5 heures de débogage, [documentation Discord application](https://discord.com/developers/docs/intro).

### Utilisation

Pour utiliser l'API Mistral, vous pouvez appeler les méthodes `processMessage` et `getAIResponse` des classes `ApiMistralSearchArticles` et `ApiMistralCompletion`.

```js
const ApiMistralSearchArticles = require('./api/apiMistralSearchArticles');
const ApiMistralCompletion = require('./api/apiMistralCompletion');

// Exemple d'utilisation pour la recherche d'articles
const apiSearch = new ApiMistralSearchArticles(environment, functionDefinitions);
const searchResults = await apiSearch.processMessage('votre requête');

// Exemple d'utilisation pour les complétions
const apiCompletion = new ApiMistralCompletion(environment);
const completionResult = await apiCompletion.getAIResponse('votre message', 'context');
```

## Exercice

### Objectif

L'objectif de cet exercice est d'explorer et de comprendre le dépôt, puis d'ajouter une nouvelle commande en créant un plan d'implémentation dans `blueprint_to_rename.md`, de renommer ce fichier en conséquence, puis d'exécuter le plan d'implémentation.

### Étapes

1. Explorez le dépôt et comprenez la structure des fichiers et des dossiers.
2. Créez un plan d'implémentation pour ajouter une nouvelle commande dans le fichier `blueprint_to_rename.md`.
3. Renommez le fichier `blueprint_to_rename.md` en un nom approprié décrivant le plan d'implémentation.
4. Suivez le plan d'implémentation pour ajouter la nouvelle commande.

### Exemple de plan d'implémentation

```md
# Plan d'implémentation pour ajouter la commande !newCommand

1. Ajouter une nouvelle fonction dans [`src/botBehaviors.js`](src/botBehaviors.js ) pour gérer la nouvelle commande.
2. Mettre à jour [`src/discord/discordClient.js`](src/discord/discordClient.js ) pour inclure la nouvelle commande.
3. Ajouter des tests unitaires pour la nouvelle commande.
4. Mettre à jour la documentation pour inclure la nouvelle commande.
```

## Informations sur cursorrules et cursorignore

Ce projet utilise `cursorrules` et `cursorignore` pour aider à se concentrer uniquement sur le code pertinent.

- [cursorrules](https://github.com/PatrickJS/awesome-cursorrules) : Un ensemble de règles pour aider à naviguer et à éditer le code de manière plus efficace.
- [cursorignore](https://docs.cursor.com/context/ignore-files) : Un fichier pour ignorer certains dossiers ou fichiers lors de l'utilisation de `cursorrules`. Dans ce projet, le dossier `plans` est ignoré pour se concentrer uniquement sur le code.
