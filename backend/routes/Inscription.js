const express = require('express');
const router = express.Router();
const Utilisateur = require('../models/Utilisateur');
const bcrypt = require('bcrypt');

router.post('/', async (req, res) => {
  const { nom, ville, email, date, motDePasse, matriculeVehicule, sujet } = req.body;


  const hashedPassword = await bcrypt.hash(motDePasse, 10);
  const utilisateur = new Utilisateur({ nom, ville, email, date, motDePasse: hashedPassword, matriculeVehicule, sujet });
  await utilisateur.save();

  res.status(201).json({ message: 'Query saved successfully !'});
});

router.get('/', async (req, res) => {
  const utilisateurs = await Utilisateur.find();
  res.json(utilisateurs);
});

module.exports = router;