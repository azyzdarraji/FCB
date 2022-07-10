const express = require("express");
const bodyPareser = require("body-parser");
const bcrypt = require("bcryptjs");
const cnx = require("../database/connecter");
const util = require("util");
const AdminRoute = express.Router();
//select
AdminRoute.get("/api/ToutAdherents", async (req, res) => {
    let sql = `Select * from adherent`;
    cnx.query(sql, (err, result) => {
        if (err) {
            res.status(400).send("erreu dans la base de données");
            throw err;
        } else {
            res.status(200).send(result);
        }
    });
});
AdminRoute.get("/api/ToutParents", async (req, res) => {
    let sql = `Select * from parent`;
    cnx.query(sql, (err, result) => {
        if (err) {
            res.status(400).send("erreu dans la base de données");
            throw err;
        } else {
            res.status(200).send(result);
        }
    });
});
AdminRoute.get("/api/ToutEntraineur", async (req, res) => {
    let sql = `Select * from entraineur`;
    cnx.query(sql, (err, result) => {
        if (err) {
            res.status(400).send("erreu dans la base de données");
            throw err;
        } else {
            res.status(200).send(result);
        }
    });
});
AdminRoute.get("/api/ToutCategorie", async (req, res) => {
    let sql = `Select * from categorie`;
    cnx.query(sql, (err, result) => {
        if (err) {
            res.status(400).send("erreu dans la base de données");
            throw err;
        } else {
            res.status(200).send(result);
        }
    });
});
AdminRoute.get("/api/ToutPayement", async (req, res) => {
    let sql = `Select * from adherent a inner join payement p on a.ID_ADHERANT=.ID_ADHERANT `;
    cnx.query(sql, (err, result) => {
        if (err) {
            res.status(400).send("erreu dans la base de données");
            throw err;
        } else {
            res.status(200).send(result);
        }
    });
});

//update
AdminRoute.post("/api/ModifAdhérent", async (req, res) => {
    const { nom, prenom, age, poids, taille, id_cat, id } = req.body;
    let sql = `Update adherent set NOM="${nom}",PRENOM="${prenom}",AGE="${age}",POIDS="${poids}",TAILLE="${taille}",ID_CATEGORIE="${id_cat}" ID_ADHERANT=${id}`;
    cnx.query(sql, (err, result) => {
        if (err) {
            res.status(404).send("not found");
            throw err;
        } else {
            res.status(200).send("Mise a jour avec succé");
        }
    });
});
AdminRoute.post("/api/ModifParent", async (req, res) => {
    const { nom, prenom, cin, num, id } = req.body;
    let sql = `Update parent set NOM="${nom}",PRENOM="${prenom}",CIN="${cin}",NUM_TELEPHONE="${num}" where ID_PARENT="${id}"`;
    cnx.query(sql, (err, result) => {
        if (err) {
            res.status(404).send("not found");
            throw err;
        } else {
            res.status(200).send("Mise a jour avec succé");
        }
    });
});
AdminRoute.post("/api/ModifEntraineur", async (req, res) => {
    const { nom, prenom, cin, num, id } = req.body;
    let sql = `Update entraineur set NOM="${nom}",PRENOM="${prenom}",CIN="${cin}",NUM_TELEPHONE="${num}" where ID_ENTRAINEUR="${id}"`;
    cnx.query(sql, (err, result) => {
        if (err) {
            res.status(404).send("not found");
            throw err;
        } else {
            res.status(200).send("Mise a jour avec succé");
        }
    });
});
AdminRoute.post("/api/ModifEntraineurCategorie", async (req, res) => {
    const { id_e, id } = req.body;
    let sql = `Update categorie set ID_ENTRAINEUR="${id_e}" where ID_CATEGORIE="${id}"`;
    cnx.query(sql, (err, result) => {
        if (err) {
            res.status(404).send("not found");
            throw err;
        } else {
            res.status(200).send("Mise a jour avec succé");
        }
    });
});

//suprrimer

AdminRoute.delete("/api/suprimerAdherent", async (req, res) => {
    const { id } = req.body;
    let sql = `Delete from adherent where ID_ADHERENT=${id} `;
    cnx.query(sql, (err, result) => {
        if (err) {
            res.status(404).send("not found");
            throw err;
        } else {
            res.status(200).send("supression avec succé");
        }
    });
});
AdminRoute.delete("/api/suprimerParent", async (req, res) => {
    const { id } = req.body;
    let sql = `Delete from parent where ID_PARENT=${id} `;
    cnx.query(sql, (err, result) => {
        if (err) {
            res.status(404).send("not found");
            throw err;
        } else {
            res.status(200).send("supression avec succé");
        }
    });
});
AdminRoute.delete("/api/suprimerEntraineur", async (req, res) => {
    const { id } = req.body;
    let sql = `Delete from entraineur where ID_ENTRAINEUR=${id} `;
    cnx.query(sql, (err, result) => {
        if (err) {
            res.status(404).send("not found");
            throw err;
        } else {
            res.status(200).send("supression avec succé");
        }
    });
});
module.exports = AdminRoute;
