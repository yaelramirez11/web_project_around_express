const fs = require('fs');
const path = require('path');
const express = require('express');

const router = express.Router();
const cardsPath = path.join(__dirname, '../data/cards.json');

router.get('/', (req, res) => {
  fs.readFile(cardsPath, { encoding: 'utf-8' }, (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error del servidor' });
    }
    const cards = JSON.parse(data);
    return res.json(cards);
  });
});
module.exports = router;
