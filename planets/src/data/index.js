//const planets = require("./planets.json");
const axios = require("axios");

module.exports = {
    list: async () => {
        return await axios.get("http://database:8004/Planet");;
    },
    getById: async (_id) => {
        return await axios.get(`http://database:8004/Planet/${_id}`);
    },
    create: async () => {
        throw Error("Hay un error al momento de crear el planeta.");
    },
};

