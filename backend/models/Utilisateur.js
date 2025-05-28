const mongoose = require('mongoose');

const Status = () => {
  const statuses = ['en cours', 'validé'];
  return statuses[Math.floor(Math.random() * statuses.length)];
};

const utilisateurSchema = new mongoose.Schema({
  nom: String,
  ville: String,
  email: String,
  date: Date,
  motDePasse: String,
  matriculeVehicule: String,
  sujet: String,
  description: String,
  status: { type: String, default: Status}
});

module.exports = mongoose.model('Utilisateur', utilisateurSchema);



