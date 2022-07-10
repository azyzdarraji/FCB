const express = require("express");
const bodyPareser = require("body-parser");
const bcrypt = require("bcryptjs");
const cnx = require("../database/connecter");
const util = require("util");
const ParentRoute = express.Router();

ParentRoute.get("/api/informationParent", async (req, res) => {
    const { id } = req.body;
    let sql = `Select * from Parent where ID_PARENT=${id}`;
    cnx.query(sql, (err, result) => {
        if (err) {
            res.status(400).send("erreu dans la base de données");
            throw err;
        } else {
            res.status(200).send(result);
        }
    });
});
ParentRoute.get("/api/informationAdherentParent", async (req, res) => {
    const { id } = req.body;
    let sql = `Select * from adherent a inner join categorie c on a.ID_CATEGORIE=c.ID_CATEGORIE where a.ID_PARENT=${id}`;
    cnx.query(sql, (err, result) => {
        if (err) {
            res.status(400).send("erreu dans la base de données");
            throw err;
        } else {
            res.status(200).send(result);
        }
    });
});
ParentRoute.get("/api/informationAdherentPayement", async (req, res) => {
    const { id } = req.body;
    let sql = `Select * from adherent a inner join payement p on a.ID_ADHERANT=.ID_ADHERANT where a.ID_PARENT=${id}`;
    cnx.query(sql, (err, result) => {
        if (err) {
            res.status(400).send("erreu dans la base de données");
            throw err;
        } else {
            res.status(200).send(result);
        }
    });
});
module.exports = ParentRoute;
