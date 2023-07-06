const { Router } = require("express");
const store = require("../database");
const { validateModel } = require("../middlewares");
//const {response} = require("../utils");

const router = Router();

router.get("/:model", validateModel, async (req, res) => {
    const { model } = req.params;
    const datos = await store[model].list();
    res.status(200).json(datos);
    //response(res, 200, datos);
});

router.get("/:model/:id", validateModel, async (req, res) => {
    //console.log("En obtener dato por Id...");
    const {model, id } = req.params;
    //console.log(`Modelo: ${model} ID: ${id}`);
    const dato = await store[model].get(id);
    //console.log(`Resultado: ${dato}`);
    res.status(200).json(dato);
});

module.exports = router;