const characters = require("./characters.json");

module.exports = {
    list: async () => {
        return characters;
    },
    create: async () => {
        throw Error("Hay un error al momento de crear el personaje.");
    },
};

