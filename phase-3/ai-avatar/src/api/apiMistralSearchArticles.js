// src/models/apiModel.js
const axios = require('axios');
const promptManager = require('../features/chatbot/promptManager');
const { searchArticles } = require('../features/searchArticles/articleSearch');

class ApiMistralSearchArticles {
  constructor(environment, functionDefinitions) {
    this.environment = environment;
    this.functionDefinitions = functionDefinitions;
    this.client = axios.create({
      headers: {
        'Authorization': `Bearer ${environment.apiKey}`,
        'Content-Type': 'application/json',
      },
    });
  }

  async processMessage(message) {
    try {
      // Premier appel à l'API
      const response = await this.client.post(this.environment.modelEndpoint, {
        model: this.environment.model,
        messages: [
          { role: "user", content: message }
        ],
        tools: [{
          type: "function",
          function: this.functionDefinitions.searchArticles
        }],
        tool_choice: "auto"
      });

      // Vérifier si l'API a appelé la fonction
      if (response.data.choices[0].message.tool_calls) {
        const toolCall = response.data.choices[0].message.tool_calls[0];
        if (toolCall.function.name === 'searchArticles') {
          const args = JSON.parse(toolCall.function.arguments);
          const searchResults = searchArticles(args.query);
          
          // Deuxième appel à l'API avec les résultats
          const finalResponse = await this.client.post(this.environment.modelEndpoint, {
            model: this.environment.model,
            messages: [
              { role: "user", content: message },
              response.data.choices[0].message,
              { 
                role: "tool",
                tool_call_id: toolCall.id,
                name: "searchArticles", 
                content: JSON.stringify(searchResults) 
              }
            ]
          });

          return finalResponse.data.choices[0].message.content;
        }

        //TODO: Gérer d'autres fonctions ici
      }

      return response.data.choices[0].message.content;
    } catch (error) {
      console.error('Erreur lors du traitement du message:', error);
      if (error.response) {
        console.error('Réponse d\'erreur:', error.response.data);
      }
      throw error;
    }
  }

  async getAIResponse(userMessage, context) {
    try {
      const prompt = promptManager.getPrompt(context, userMessage);
      const response = await this.client.post(this.environment.modelEndpoint, {
        model: this.environment.model,
        messages: [{role: 'user', content: prompt}],
        max_tokens: 250,
        temperature: 0.5,
      });

      return response.data.choices[0].message.content.trim();
    } catch (error) {
      console.error('Erreur lors de la requête à l\'API du modèle IA :', error);
      return 'Désolé, il y a eu un problème avec l\'IA.';
    }
  }
}

module.exports = ApiMistralSearchArticles;
