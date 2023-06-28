const Film = require("../data");
const {response} = require("../utils");

module.exports = async (req, res) => {
    const newFilm = await Film.create();
    res.status(200).send("Creando Filme...");
    response(res,201,newFilm);
}