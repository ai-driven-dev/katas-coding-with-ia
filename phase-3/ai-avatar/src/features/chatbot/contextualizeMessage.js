function contextualize(message){
      // Déterminer le contexte en fonction du contenu du message
  let context = 'default';
  
  if (message.includes('aide') || message.includes('explication')) {
    context = 'educational';
  } else if (message.includes('technique') || message.includes('détail')) {
    context = 'technical';
  } else if (message.includes('blague') || message.includes('rigole')) {
    context = 'humorous';
  } else if (message.includes('salut') || message.includes('bonjour')) {
    context = 'friendly';
  }
  return context;
}

module.exports = { contextualize };