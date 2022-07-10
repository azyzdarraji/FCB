const express = require("express");
const bodyPareser = require("body-parser");
const bcrypt = require("bcryptjs");
const cnx = require("../database/connecter");
const util = require("util");
const EntraineurRoute = express.Router();

EntraineurRoute.post("/api/AddEnchainement", async (req, res) => {
    const { description, id_e } = req.body;
    let sql = `Insert into enchainement (DESCRIPTION, ID_ENTRAINEUR) Values ("${description}", ${id_e})`;
    cnx.query(sql, (err, result) => {
        if (err) {
            res.status(400).send("erreu dans la base de données");
            throw err;
        } else {
            res.status(200).send("ajout d'enchainement avec succé");
        }
    });
});
EntraineurRoute.post("/api/MAJenchainement", async (req, res) => {
    const { description, id_e, id_en } = req.body;
    let sql = `Update enchainement set DESCRIPTION='${description}' where ID_ENCHAINEMENT=${id_en} and ID_ENTRAINEUR=${id_e}`;
    cnx.query(sql, (err, result) => {
        if (err) {
            res.status(404).send("not found");
            throw err;
        } else {
            res.status(200).send("Mise a jour avec succé");
        }
    });
});
EntraineurRoute.delete("/api/suprimerEnchainement", async (req, res) => {
    const { id } = req.body;
    let sql = `Delete from enchainement where ID_ENCHAINEMENT=${id} `;
    cnx.query(sql, (err, result) => {
        if (err) {
            res.status(404).send("not found");
            throw err;
        } else {
            res.status(200).send("supression avec succé");
        }
    });
});
EntraineurRoute.get("/api/informationEntraineur", async (req, res) => {
    const { id } = req.body;
    let sql = `Select * from entraineur e inner join categorie c on e.ID_ENTRAINEUR	=c.ID_ENTRAINEUR where e.ID_ENTRAINEUR	=${id}`;
    cnx.query(sql, (err, result) => {
        if (err) {
            res.status(400).send("erreu dans la base de données");
            throw err;
        } else {
            res.status(200).send(result);
        }
    });
});
module.exports = EntraineurRoute;
