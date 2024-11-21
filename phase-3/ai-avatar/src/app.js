const app = require('express')();
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const readline = require('readline');
const botBehaviors = require('./botBehaviors');

// Créer une application Express
const server = http.createServer(app);
const io = socketIo(server);

// Servir les fichiers statiques (HTML, CSS, JS)
app.use(express.static('public'));

// Gérer les connexions Socket.IO
io.on('connection', (socket) => {
  console.log('Nouvelle connexion client');

  socket.on('userMessage', async ({ message, mode }) => {
    if (message === 'exit') {
      socket.emit('botMessage', 'Au revoir!');
      return;
    }

    try {
      let aiResponse;
      if (mode === 'searchArticles') {
        aiResponse = await botBehaviors.searchArticles(message);
      } else if (mode === 'chatbot') {
        aiResponse = await botBehaviors.chatbot(message);
      }
      socket.emit('botMessage', aiResponse);
    } catch (error) {
      console.error('Erreur lors de la réponse du bot IA:', error);
      socket.emit('botMessage', "Désolé, il y a eu un problème avec l'IA.");
    }
  });
});

// Créer une interface readline pour lire les entrées de l'utilisateur
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Fonction pour poser une question et traiter la réponse
async function handleUserInput(behavior) {
  rl.question('Entrez votre message (ou tapez "exit" pour quitter): ', async (userMessage) => {
    if (userMessage.toLowerCase() === 'exit') {
      console.log('Au revoir!');
      rl.close();
      return;
    }

    try {
      const aiResponse = await behavior(userMessage);
      console.log('Réponse de l\'IA:', aiResponse);
    } catch (error) {
      console.error('Erreur lors de la réponse du bot IA:', error);
      console.log("Désolé, il y a eu un problème avec l'IA.");
    }

    // Poser une autre question
    handleUserInput(behavior);
  });
}

// Fonction principale pour initialiser l'application
async function startAppConsole() {
  console.log('Bienvenue dans l\'application AI-Avatar!');

  rl.question('Choisissez un comportement (1: Recherche d\'articles, 2: Chatbot): ', (choice) => {
    if (choice === '1') {
      console.log('Mode Recherche d\'articles sélectionné.');
      handleUserInput(botBehaviors.searchArticles);
    } else if (choice === '2') {
      console.log('Mode Chatbot sélectionné.');
      handleUserInput(botBehaviors.chatbot);
    } else {
      console.log('Choix invalide. Veuillez sélectionner 1 ou 2.');
      startAppConsole();
    }
  });
}

// Fonction principale pour initialiser l'application en mode HTTP
async function startAppHttp() {
  const PORT = 4000;
  server.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
  });
}

// Lancer l'application en fonction du paramètre
const mode = process.argv[2];

if (mode === '--http') {
  startAppHttp();
} else {
  startAppConsole();
}