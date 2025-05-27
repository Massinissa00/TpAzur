const express = require('express'); // Importe le module Express
const app = express(); // Crée une instance de l'application Express

// Définit une route pour la page d'accueil (quand quelqu'un accède à '/')
app.get('/', (req, res) => {
  res.send('<h1>Bienvenue sur WebUnity App !</h1><p>Cette application est déployée sur Azure.</p>');
});

// Définit le port d'écoute de l'application
// process.env.PORT est important pour Azure, qui assigne un port dynamique
const port = process.env.PORT || 3000;

// Lance le serveur Express
app.listen(port, () => {
  console.log(`WebUnity App listening on port ${port}`);
});