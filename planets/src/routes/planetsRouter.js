const { Router, json } = require("express");
const planets = require("../data");

const planetsRouter = Router();

planetsRouter.get("/", (req, res) => {
  res.status(200).json(planets);
});

planetsRouter.get("/:id", (req, res) => {
  res.status(200),json(planets);
});

module.exports = planetsRouter;

