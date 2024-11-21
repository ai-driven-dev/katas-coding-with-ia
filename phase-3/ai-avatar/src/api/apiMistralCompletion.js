// src/models/apiModel.js
const axios = require('axios');
const promptManager = require('../features/chatbot/promptManager');

class ApiMistralCompletion {
  constructor(environment) {
    this.environment = environment;
    this.client = axios.create({
      headers: {
        'Authorization': `Bearer ${environment.apiKey}`,
        'Content-Type': 'application/json',
      },
    });
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

module.exports = ApiMistralCompletion;
