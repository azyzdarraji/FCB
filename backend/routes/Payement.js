const express = require("express");
const cnx = require("../database/connecter");
const PayementRoute = express.Router();
const isEmpty = require("../validation/isEmpty");
const validator = require("validator");
PayementRoute.post("/api/ConsulterPayements", async (req, res) => {
    try {
        let sql = `Select * from payement as p inner join adherent as a on a.ID_ADHERANT=p.ID_ADHERANT inner join categorie as c on a.ID_CATEGORIE=c.ID_CATEGORIE`;
        cnx.query(sql, (err, result) => {
            if (err) {
                res.status(500).send("erreu dans la base de données");
                throw err;
            } else {
                if (isEmpty(result)) {
                    res.status(404).send("resultat vide");
                } else {
                    res.status(200).send(result);
                }
            }
        });
    } catch (err) {
        res.status(500).send(err);
        throw err;
    }
});
module.exports = PayementRoute;
