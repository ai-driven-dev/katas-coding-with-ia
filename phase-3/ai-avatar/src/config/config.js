// src/config/config.js
require('dotenv').config();  // Charge les variables d'environnement depuis .env

const environment = {
  discordToken: process.env.DISCORD_TOKEN,      // Token pour le bot Discord
  apiKey: process.env.API_KEY,                  // Clé API pour le modèle distant
  modelEndpoint: process.env.MODEL_ENDPOINT || 'http://localhost:5000',  // Endpoint par défaut pour le modèle
  model: process.env.MODEL
};

const functionDefinitions = {
  searchArticles: {
    name: "searchArticles",
    description: "Recherche des articles pertinents dans la base de données",
    parameters: {
      type: "object",
      properties: {
        query: {
          type: "string",
          description: "Le terme de recherche pour trouver des articles"
        }
      },
      required: ["query"]
    }
  }
};

module.exports = {
  environment,
  functionDefinitions
};
