const express = require("express");
const cnx = require("../database/connecter");
const ParentRoute = express.Router();
const isEmpty = require("../validation/isEmpty");
const validator = require("validator");

function Validate(data) {
    let errors = {};
    if (validator.isEmpty(data.id)) {
        errors.id = "Required id";
    }
    return {
        errors,
        isValid: isEmpty(errors),
    };
}

ParentRoute.get("/api/informationParent", async (req, res) => {
    try {
        const { id } = req.body;
        let sql = `Select * from Parent where ID_PARENT=${id}`;
        let validation = Validate(req.body);
        if (validation.isValid) {
            cnx.query(sql, (err, result) => {
                if (err) {
                    res.status(500).send("erreur  dans la base de données");
                    throw err;
                } else {
                    if (isEmpty(result)) {
                        res.status(404).send("resultat vide");
                    } else {
                        res.status(200).send(result);
                    }
                }
            });
        } else {
            res.status(400).send(validation.errors);
        }
    } catch (err) {
        res.status(500).send(err);
        throw err;
    }
});

ParentRoute.get("/api/informationAdherentParent", async (req, res) => {
    try {
        const { id } = req.body;
        let sql = `Select * from adherent a inner join categorie c on a.ID_CATEGORIE=c.ID_CATEGORIE where a.ID_PARENT=${id}`;
        let validation = Validate(req.body);
        if (validation.isValid) {
            cnx.query(sql, (err, result) => {
                if (err) {
                    res.status(500).send("erreur dans la base de données");
                    throw err;
                } else {
                    if (isEmpty(result)) {
                        res.status(404).send("resultat vide");
                    } else {
                        res.status(200).send(result);
                    }
                }
            });
        } else {
            res.status(400).send(validation.errors);
        }
    } catch (err) {
        res.status(500).send(err);
        throw err;
    }
});

ParentRoute.get("/api/informationAdherentPayement", async (req, res) => {
    try {
        const { id } = req.body;
        let sql = `Select DISTINCT * from adherent a join payement p on a.ID_ADHERANT=p.ID_ADHERANT where a.ID_PARENT=${id} `;
        let validation = Validate(req.body);
        if (validation.isValid) {
            cnx.query(sql, (err, result) => {
                if (err) {
                    res.status(500).send("erreur dans la base de données");
                    throw err;
                } else {
                    if (isEmpty(result)) {
                        res.status(404).send("resultat vide");
                    } else {
                        res.status(200).send(result);
                    }
                }
            });
        } else {
            res.status(400).send(validation.errors);
        }
    } catch (err) {
        res.status(500).send(err);
        throw err;
    }
});
module.exports = ParentRoute;
