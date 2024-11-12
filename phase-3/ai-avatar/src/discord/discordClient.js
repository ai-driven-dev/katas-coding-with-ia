// src/discord/discordClient.js
const { Client, GatewayIntentBits } = require('discord.js');
const botBehaviors = require('../botBehaviors');
const config = require('../config/config');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once('ready', () => {
  console.log(`Connecté en tant que ${client.user.tag}!`);
});

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  const userMessage = message.content;

  //AI: when adding a new command, add the guard clause as well can you refactor this to make it more DRY?
  if (!userMessage.startsWith('!searchArticles') 
    && !userMessage.startsWith('!chatbot')) {
    return;
  }

  try {
    let aiResponse;

    if (userMessage.startsWith('!searchArticles')) {
      aiResponse = await botBehaviors.searchArticles(userMessage);
    } else if (userMessage.startsWith('!chatbot')) {
      aiResponse = await botBehaviors.chatbot(userMessage);
    //AI: add a new command here
    } else {
      message.reply('Commande invalide. Veuillez utiliser !searchArticles ou !chatbot.');
      return;
    }

    message.reply(aiResponse);

  } catch (error) {
    console.error('Erreur lors de la réponse du bot IA:', error);
    message.reply("Désolé, il y a eu un problème avec l'IA.");
  }
});

client.login(config.discordToken)
  .then(() => console.log('Bot Discord connecté avec succès'))
  .catch((error) => console.error('Erreur lors de la connexion du bot Discord :', error));

module.exports = client;
