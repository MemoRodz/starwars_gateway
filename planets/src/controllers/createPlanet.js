const Planet = require("../data");
const {response} = require("../utils");

module.exports = async (req, res) => {
    const newPlanet = await Planet.create();
    console.log("Creando Planeta...");
    response(res, 201, newPlanet);
};

