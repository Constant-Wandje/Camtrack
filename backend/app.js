const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const utilisateursRouter = require('./routes/Inscription');

// Connexion à MongoDB
mongoose.connect('mongodb+srv://Constant:cG87d.swAN56SG.@cluster0.us214iz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(err => console.error('Erreur de connexion à MongoDB :', err));

app.use(bodyParser.json());
app.use(cors());
app.use('/api/utilisateurs', utilisateursRouter);

app.listen(3001, () => {
  console.log('Serveur démarré sur le port 3001');
});
