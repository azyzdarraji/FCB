const express = require("express");
const bodyPareser = require("body-parser");
const bcrypt = require("bcryptjs");
const cnx = require("../database/connecter");
const util = require("util");
const AdherentRoute = express.Router();

AdherentRoute.get("/api/informationAdherent", async (req, res) => {
    const { id } = req.body;
    console.log("l'id est:" + id);
    let sql = `Select * from adherent as a inner join categorie as c on a.ID_CATEGORIE=c.ID_CATEGORIE where a.ID_ADHERANT=${id}`;
    cnx.query(sql, (err, result) => {
        if (err) {
            res.status(400).send("erreu dans la base de données");
            throw err;
        } else {
            res.status(200).send(result);
        }
    });
});

module.exports = AdherentRoute;
