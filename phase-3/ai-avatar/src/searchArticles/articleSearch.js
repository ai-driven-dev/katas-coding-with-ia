const Fuse = require('fuse.js');
const articles = require('../../data/urls.json');

/**
 * Recherche des articles en fonction d'une requête
 * @param {string} query - Le terme de recherche
 * @returns {Array} - Les articles correspondants à la recherche
 */
function searchArticles(query) {
  if (!query) return [];

  console.log('Recherche des articles pour la requête:', query);

  // Diviser la requête en mots-clés individuels et supprimer les mots de liaison
  const stopWords = ['et', 'ou', 'de', 'la', 'le', 'les', 'des', 'un', 'une'];
  const keywords = query
    .toLowerCase()
    .split(/\s+/)
    .filter(word => !stopWords.includes(word));

  const options = {
    keys: ['title', 'keywords'],
    threshold: 0.3 // Ajustez ce seuil selon vos besoins
  };

  const fuse = new Fuse(articles, options);
  let aggregatedResults = [];

  // Effectuer une recherche pour chaque mot-clé et agréger les résultats
  keywords.forEach(keyword => {
    const result = fuse.search(keyword);
    aggregatedResults = aggregatedResults.concat(result.map(resultItem => resultItem.item));
  });

  // Supprimer les doublons
  const uniqueResults = Array.from(new Set(aggregatedResults.map(a => a.url)))
    .map(url => aggregatedResults.find(a => a.url === url));

  return uniqueResults;
}

module.exports = { searchArticles }; 