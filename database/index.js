const server = require("./src/server");

const {Character, Film, Planet } = require("./src/database");
/*
console.log("En Server esperando a Character");
Character.list().then((res) => console.log(res));
console.log("Buscando por id");
Character.get(2).then((res) => console.log(res)); 

console.log("En server esperando la información de Character 4, Film 2 y Planet 7");

Character.get(4).then((res) => console.log(res));
Film.get(2).then((res) => console.log(res));
Planet.get(7).then((res) => console.log(res));
*/


server.listen(8004, () => {
    console.log("Database service on PORT 8004");
});