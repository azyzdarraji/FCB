const express = require("express");
const bcrypt = require("bcryptjs");
const cnx = require("../database/connecter");
const AuthRoute = express.Router();
const validator = require("validator");

function Validate(data) {
    let errors = {};
    if (validator.isEmpty(data.matricule)) {
        errors.id = "Required id";
    }
    if (validator.isEmpty(data.mdp)) {
        errors.id = "Required id";
    }
    if (validator.isEmpty(data.type_u)) {
        errors.id = "Required id";
    }
    return {
        errors,
        isValid: isEmpty(errors),
    };
}
AuthRoute.post("/api/Login", async (req, res) => {
    try {
        let { matricule, mdp, type_u } = req.body;
        let sql = `select * from utilisateur where MATRICULE="${matricule}" and TYPE_U="${type_u}"`;
        validation = Validate(req.body);
        if (validation.isValid) {
            cnx.query(sql, (err, result) => {
                if (err) {
                    res.status(500).send("erreur dans la base de données");
                    throw err;
                } else {
                    if (result.length > 0) {
                        bcrypt.compare(mdp, result[0].MOT_DE_PASSE, async (err, reslt) => {
                            if (err || reslt) {
                                res.status(200).send("Logged in successfully");
                            } else {
                                res.status(400).send("Mot de passe incorrecte");
                            }
                        });
                    } else {
                        res.status(400).send("Matricule ou bien type incorrect");
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

module.exports = AuthRoute;
