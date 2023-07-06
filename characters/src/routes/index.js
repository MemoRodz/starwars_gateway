const { Router } = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares");

const router = Router();

router.get("/", controllers.getCharacters);

router.get("/:id", controllers.getCharacterById);

router.post("/", middlewares.characterValidation, controllers.createCharacter);

module.exports = router;

