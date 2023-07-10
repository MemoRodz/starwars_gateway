//Ejemplo nomás
const axios = require("axios");

module.exports = async () => {
    //console.log("En axios...");
    return await axios.get("http://localhost:8004/Character")
}