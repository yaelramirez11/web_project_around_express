const express = require('express');

const router = express.Router();
const fs = require('fs');
const path = require('path');

const userPath = path.join(__dirname, '../data/users.json');

router.get('/', (req, res) => {
  fs.readFile(userPath, { encoding: 'utf-8' }, (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error del servidor' });
    }
    const users = JSON.parse(data);
    return res.json(users);
  });
});
router.get('/:id', (req, res) => {
  fs.readFile(userPath, { encoding: 'utf-8' }, (err, data) => {
    if (err) {
      return res.status(500).json({ message: 'Error del servidor' });
    }
    const users = JSON.parse(data);
    const user = users.find((u) => u._id === req.params.id);
    if (!user) {
      return res.status(404).json({
        message: 'ID de usuario no encontrado',
      });
    }
    return res.json(user);
  });
});

module.exports = router;
