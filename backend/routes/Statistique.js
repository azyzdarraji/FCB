const express = require("express");
const cnx = require("../database/connecter");
const StatistiquetRoute = express.Router();
const isEmpty = require("../validation/isEmpty");
const validator = require("validator");

StatistiquetRoute.get("/api/EstimationProfits", async (req, res) => {
    try {
        let sql = `Select SUM(c.frais) as estimation from payement as p inner join adherent as a on a.ID_ADHERANT=p.ID_ADHERANT inner join categorie as c on a.ID_CATEGORIE=c.ID_CATEGORIE where p.ETAT_PAYEMENT=1 and p.TYPE_PAYEMENT="mensuel"`;
        cnx.query(sql, (err, result) => {
            if (err) {
                res.status(500).send("erreur dans la base de données");
                throw err;
            } else {
                if (result.length < 0) res.status(400).send("resultat vide");
                else res.status(200).send(result);
            }
        });
    } catch (err) {
        res.status(500).send(err);
        throw err;
    }
});
StatistiquetRoute.get("/api/ActivePayement", async (req, res) => {
    try {
        let sql = `Select * from payement as p inner join adherent as a on a.ID_ADHERANT=p.ID_ADHERANT inner join categorie as c on a.ID_CATEGORIE=c.ID_CATEGORIE where p.ETAT_PAYEMENT=1`;
        cnx.query(sql, (err, result) => {
            if (err) {
                res.status(500).send("erreur dans la base de données");
                throw err;
            } else {
                if (result.length < 0) res.status(400).send("resultat vide");
                else res.status(200).send(result);
            }
        });
    } catch (err) {
        res.status(500).send(err);
        throw err;
    }
});
StatistiquetRoute.get("/api/InactivePayement", async (req, res) => {
    try {
        let sql = `Select * from payement as p inner join adherent as a on a.ID_ADHERANT=p.ID_ADHERANT inner join categorie as c on a.ID_CATEGORIE=c.ID_CATEGORIE where p.ETAT_PAYEMENT=0`;
        cnx.query(sql, (err, result) => {
            if (err) {
                res.status(500).send("erreur dans la base de données");
                throw err;
            } else {
                if (result.length < 0) res.status(400).send("resultat vide");
                else res.status(200).send(result);
            }
        });
    } catch (err) {
        res.status(500).send(err);
        throw err;
    }
});
StatistiquetRoute.get("/api/NombreAdherents", async (req, res) => {
    try {
        let sql = `Select count(*) nombre_adherent from adherent`;
        cnx.query(sql, (err, result) => {
            if (err) {
                res.status(500).send("erreur dans la base de données");
                throw err;
            } else {
                if (result.length < 0) res.status(400).send("resultat vide");
                else res.status(200).send(result);
            }
        });
    } catch (err) {
        res.status(500).send(err);
        throw err;
    }
});
StatistiquetRoute.get("/api/NombreParents", async (req, res) => {
    try {
        let sql = `Select count(*) as nombre_parent from parent`;
        cnx.query(sql, (err, result) => {
            if (err) {
                res.status(500).send("erreur dans la base de données");
                throw err;
            } else {
                if (result.length < 0) res.status(400).send("resultat vide");
                else res.status(200).send(result);
            }
        });
    } catch (err) {
        res.status(500).send(err);
        throw err;
    }
});
StatistiquetRoute.get("/api/ToutEntraineur", async (req, res) => {
    try {
        let sql = `Select count(*) as nombre_entraineur from entraineur`;
        cnx.query(sql, (err, result) => {
            if (err) {
                res.status(500).send("erreur dans la base de données");
                throw err;
            } else {
                if (result.length < 0) res.status(400).send("resultat vide");
                else res.status(200).send(result);
            }
        });
    } catch (err) {
        res.status(500).send(err);
        throw err;
    }
});

StatistiquetRoute.get("/api/AdherentsParRapportAuxCategories", async (req, res) => {
    try {
        let sql = `Select count(a.ID_Adherent),ID_CATEGORIE,c.NOM_CATEGORIE from adherent  inner join categorie as c on a.ID_CATEGORIE=c.ID_CATEGORIE groupe by ID_CATEGORIE`;
        cnx.query(sql, (err, result) => {
            if (err) {
                res.status(500).send("erreur dans la base de données");
                throw err;
            } else {
                if (result.length < 0) res.status(400).send("resultat vide");
                else res.status(200).send(result);
            }
        });
    } catch (err) {
        res.status(500).send(err);
        throw err;
    }
});
module.exports = StatistiquetRoute;
