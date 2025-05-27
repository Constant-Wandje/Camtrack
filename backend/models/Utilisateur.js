const mongoose = require('mongoose');

const utilisateurSchema = new mongoose.Schema({
  nom: String,
  ville: String,
  email: String,
  date: Date,
  motDePasse: String,
  matriculeVehicule: String,
  sujet: String
});

module.exports = mongoose.model('Utilisateur', utilisateurSchema);