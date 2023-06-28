const { Router } = require("express");
const films = require("../data/films.json");

filmsRouter.get("/", (req, res) => {
  res.status(200).json(films);
});

module.exports = filmsRouter;

