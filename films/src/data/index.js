//const films = require("./films.json");
const axios = require("axios");


module.exports = {
    list: async () => {
        //return films;
        return await axios.get("http://localhost:8004/Film");
    },
    getById: async(_id) => {
        return await axios.get(`http://localhost:8004/Film/${_id}`)
    },
    create: async () => {
        throw Error("Hay un error al momento de crear el filme.");
    },
};

