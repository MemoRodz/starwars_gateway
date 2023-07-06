//const characters = require("./characters"); //require("./characters.json");
const axios = require("axios");

module.exports = {
    list: async () => {
        return await axios.get("http://localhost:8004/Character");
    },
    getById: async (_id) => {
        return await axios.get(`http://localhost:8004/Character/${_id}`);
    },
    create: async () => {
        throw Error("Hay un error al momento de crear el personaje.");
    },
};

