const express = require("express");
const bodyPareser = require("body-parser");
const bcrypt = require("bcryptjs");
const cnx = require("../database/connecter");
const util = require("util");
const AuthRoute = express.Router();

AuthRoute.post("/api/Login", async (req, res) => {
    try {
        let { matricule, mdp, type_u } = req.body;
        let sql = `select * from utilisateur where MATRICULE="${matricule}" and TYPE_U="${type_u}"`;
        cnx.query(sql, (err, result) => {
            if (err) {
                res.status(400).send("erreu dans la base de données");
                throw err;
            } else {
                console.log(result);
                if (result.length > 0) {
                    bcrypt.compare(mdp, result[0].MOT_DE_PASSE, async (err, reslt) => {
                        if (err || reslt) {
                            res.status(400).send("Mot de passe incorrecte");
                        } else {
                            res.status(200).send("Logged in successfully");
                        }
                    });
                } else {
                    res.status(400).send("Matricule ou bien type incorrect");
                }
            }
        });
    } catch (err) {
        throw err;
        res.status(500).send(err);
    }
});
AuthRoute.post("/api/AddAdherent", async (req, res) => {
    try {
        const { nom, prenom, age, poids, taille, num_insc, id_cat, id_parent, matricule, mdp } =
            req.body;
        const date_insc = new Date();
        const type_u = "d";
        const hash = await bcrypt.hash(mdp, 5);
        let sqlUser = `Insert into utilisateur (MATRICULE, MOT_DE_PASSE,TYPE_U) Values ("${matricule}","${hash}","${type_u}")`;
        cnx.query(sqlUser, (err, result) => {
            if (err) {
                throw err;
            } else {
                let sqlAd = `Insert into adherent (NOM,PRENOM,AGE,POIDS,TAILLE,NUM_INSCRIPTION,DATE_INSCRIPTION,ID_CATEGORIE,ID_PARENT,ID_U) Values ("${nom}","${prenom}","${age}","${poids}","${taille}","${num_insc}","${date_insc}","${id_cat}","${id_parent}","${result.insertId}")`;
                cnx.query(sqlAd, (err, result) => {
                    if (err) {
                        throw err;
                    } else {
                        res.status(200).send("Added adherent successfully !");
                    }
                });
            }
        });
    } catch (err) {
        throw err;
        res.status(500).send(err);
    }
});
AuthRoute.post("/api/AddParent", async (req, res) => {
    try {
        const { nom, prenom, cin, num_tel, matricule, mdp } = req.body;

        const type_u = "p";
        const hash = await bcrypt.hash(mdp, 5);
        let sqlUser = `Insert into utilisateur (MATRICULE, MOT_DE_PASSE,TYPE_U) Values ("${matricule}","${hash}","${type_u}")`;
        cnx.query(sqlUser, (err, result) => {
            if (err) {
                throw err;
            } else {
                let sqlParent = `Insert into parent (NOM,PRENOM,CIN,NUM_TELEPHONE,ID_U) Values ("${nom}","${prenom}","${cin}","${num_tel}","${result.insertId}")`;
                cnx.query(sqlParent, (err, result) => {
                    if (err) {
                        throw err;
                    } else {
                        res.status(200).send("Added parent successfully !");
                    }
                });
            }
        });
    } catch (err) {
        throw err;
        res.status(500).send(err);
    }
});
AuthRoute.post("/api/AddEntraineur", async (req, res) => {
    try {
        const { nom, prenom, cin, num_tel, matricule, mdp } = req.body;

        const type_u = "e";
        const hash = await bcrypt.hash(mdp, 5);
        let sqlUser = `Insert into utilisateur (MATRICULE, MOT_DE_PASSE,TYPE_U) Values ("${matricule}","${hash}","${type_u}")`;
        cnx.query(sqlUser, (err, result) => {
            if (err) {
                throw err;
            } else {
                let sqlEnt = `Insert into entraineur (NOM,PRENOM,CIN,NUM_TELEPHONE,ID_U) Values ("${nom}","${prenom}","${cin}","${num_tel}","${result.insertId}")`;
                cnx.query(sqlEnt, (err, result) => {
                    if (err) {
                        throw err;
                    } else {
                        res.status(200).send("Added entraineur successfully !");
                    }
                });
            }
        });
    } catch (err) {
        throw err;
        res.status(500).send(err);
    }
});
AuthRoute.post("/api/AddAdminstrateur", async (req, res) => {
    try {
        const { nom, prenom, cin, num_tel, matricule, mdp } = req.body;

        const type_u = "a";
        const hash = await bcrypt.hash(mdp, 5);
        let sqlUser = `Insert into utilisateur (MATRICULE, MOT_DE_PASSE,TYPE_U) Values ("${matricule}","${hash}","${type_u}")`;
        cnx.query(sqlUser, (err, result) => {
            if (err) {
                throw err;
            } else {
                let sqlAdmin = `Insert into administrateur (NOM,PRENOM,CIN,NUM_TELEPHONE,ID_U) Values ("${nom}","${prenom}","${cin}","${num_tel}","${result.insertId}")`;
                cnx.query(sqlParent, (err, result) => {
                    if (err) {
                        throw err;
                    } else {
                        res.status(200).send("Added admin successfully !");
                    }
                });
            }
        });
    } catch (err) {
        throw err;
        res.status(500).send(err);
    }
});

module.exports = AuthRoute;
