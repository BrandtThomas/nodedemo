const mysql = require('mysql');
const cors = require('cors');
// Importer les modules nécessaires
const express = require('express');

// Initialiser l'application Express
const app = express();
app.use(cors());
const port = 3000; // Port sur lequel l'application écoutera

app.use((req, res, next) => {
   
    next();
});
// Définir une route sur l'index
app.get('/', (req, res) => {
  res.send('Bienvenue sur l\'index de mon API !');
});

app.get('/afci', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    // Configuration de la connexion à la base de données
const connection = mysql.createConnection({
    host: 'localhost', // Adresse de la base de données
    port: 3851,
    user: 'root', // Nom d'utilisateur
    password: 'root', // Mot de passe
    database: 'afci' // Nom de la base de données
  });
  
  // Connexion à la base de données
  connection.connect((err) => {
    if (err) {
      console.error('Erreur de connexion à la base de données :', err);
      return;
    }
    console.log('Connecté à la base de données MySQL');
  });
  
  // Une fois connecté, tu peux exécuter des requêtes SQL
  // Par exemple :
  connection.query('SELECT * FROM role', (err, rows) => {
    if (err) {
      console.error('Erreur lors de l\'exécution de la requête :', err);
      return;
    }
    console.log(rows);
    res.send(rows);
  });
  
  // N'oublie pas de fermer la connexion lorsque tu as terminé
  connection.end((err) => {
    if (err) {
      console.error('Erreur lors de la fermeture de la connexion à la base de données :', err);
      return;
    }
    console.log('Connexion à la base de données fermée');
  });
  
  
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
