const Character = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
    const newCharacter = await Character.create();
    console.log("En nuevo personaje...");
    response(res, 201, newCharacter);
};