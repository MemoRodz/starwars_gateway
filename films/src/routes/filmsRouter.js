const { Router } = require("express");
const films = require("../data");

filmsRouter.get("/", (req, res) => {
  res.status(200).json(films);
});

filmsRouter.get("/:id", (req, res) => {
  res.status(200).json(films);
})

module.exports = filmsRouter;

