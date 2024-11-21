// FILE: botBehaviors.js
const ApiMistralSearchArticles = require('./api/apiMistralSearchArticles');
const ApiMistralCompletion = require('./api/apiMistralCompletion');
const promptManager = require('./features/chatbot/promptManager');
const { environment, functionDefinitions } = require('./config/config');

async function searchArticles(userMessage) {
  const apiModel = new ApiMistralSearchArticles(environment, functionDefinitions);
  return await apiModel.processMessage(userMessage);
}

async function chatbot(userMessage) {
  let context = promptManager.getPrompt(userMessage);
  const apiModel = new ApiMistralCompletion(environment, context);
  return await apiModel.getAIResponse(userMessage);
}

module.exports = {
  searchArticles,
  chatbot
};