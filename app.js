const express = require("express");

const app = express();
const usersRouter = require("./routes/users");
const cardsRouter = require("./routes/cards");

const { PORT = 3000 } = process.env;

// Middleware para parsear JSON
app.use(express.json());

// Rutas específicas PRIMERO
app.use("/users", usersRouter);
app.use("/cards", cardsRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Recurso solicitado no encontrado" });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/aroundb");
