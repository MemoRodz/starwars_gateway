const {Router} =require("express");
const characters = require("../data");

const characterRouter = Router();

characterRouter.get("/", (req,res) => {
    res.status(200).json(characters);
});

characterRouter.get("/:id", (req,res) => {
    res.status(200).json(characters);
});

module.exports = characterRouter;

