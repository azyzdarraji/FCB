const express = require("express");
const cnx = require("../database/connecter");
const EntraineurRoute = express.Router();
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

function ValidateAddEnchainement(data) {
    let errors = {};
    if (validator.isEmpty(data.id_e)) {
        errors.id = "Required id";
    }
    if (validator.isEmpty(data.description)) {
        errors.description = "Required description";
    }
    return {
        errors,
        isValid: isEmpty(errors),
    };
}

function ValidateMajEnchainement(data) {
    let errors = {};
    if (validator.isEmpty(data.id_e)) {
        errors.id_e = "Required id entraineur";
    }
    if (validator.isEmpty(data.id_en)) {
        errors.id_en = "Required id enchainement";
    }
    if (validator.isEmpty(data.description)) {
        errors.description = "Required description";
    }
    return {
        errors,
        isValid: isEmpty(errors),
    };
}

EntraineurRoute.post("/api/AddEnchainement", async (req, res) => {
    try {
        const { description, id_e } = req.body;
        let checkEntraineur = `select * from entraineur where ID_ENTRAINEUR=${id_e}`;
        let sql = `Insert into enchainement (DESCRIPTION, ID_ENTRAINEUR) Values ("${description}", ${id_e})`;
        validation = ValidateAddEnchainement(req.body);
        if (validation.isValid) {
            cnx.query(checkEntraineur, (err, result) => {
                if (err) {
                    res.status(500).send("erreu dans la base de données");
                    throw err;
                } else {
                    if (result.length == 0) {
                        res.status(400).send("cet entraineur n'existe pas");
                    } else {
                        cnx.query(sql, (err, result) => {
                            if (err) {
                                res.status(500).send("erreu dans la base de données");
                                throw err;
                            } else {
                                if (result.affectedRows < 1) {
                                    res.status(400).send("operation echoué");
                                } else {
                                    res.status(200).send("ajout avec succé");
                                }
                            }
                        });
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

EntraineurRoute.post("/api/MAJenchainement", async (req, res) => {
    try {
        const { description, id_e, id_en } = req.body;
        let sql = `Update enchainement set DESCRIPTION='${description}' where ID_ENCHAINEMENT=${id_en} and ID_ENTRAINEUR=${id_e}`;
        let checkEntraineur = `select * from entraineur where ID_ENTRAINEUR=${id_e}`;
        let checkEnchainement = `select * from enchainement where ID_ENCHAINEMENT=${id_en}`;
        validation = ValidateMajEnchainement(req.body);
        if (validation.isValid) {
            cnx.query(checkEntraineur, (err, result) => {
                if (err) {
                    res.status(500).send("erreu dans la base de données");
                    throw err;
                } else {
                    if (result.length == 0) {
                        res.status(400).send("cet entraineur n'existe pas");
                    } else {
                        cnx.query(checkEnchainement, (err, result) => {
                            if (err) {
                                res.status(500).send("erreu dans la base de données");
                                throw err;
                            } else {
                                if (result.length == 0) {
                                    res.status(400).send("cet enchainement n'existe pas");
                                } else {
                                    cnx.query(sql, (err, result) => {
                                        if (err) {
                                            res.status(500).send("erreu dans la base de données");
                                            throw err;
                                        } else {
                                            if (result.affectedRows < 1) {
                                                res.status(400).send("operation echoué");
                                            } else {
                                                res.status(200).send("mise a jour avec succé");
                                            }
                                        }
                                    });
                                }
                            }
                        });
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

EntraineurRoute.delete("/api/suprimerEnchainement", async (req, res) => {
    try {
        const { id } = req.body;
        let sql = `Delete from enchainement where ID_ENCHAINEMENT=${id} `;
        validation = Validate(req.body);
        if (validation.isValid) {
            cnx.query(sql, (err, result) => {
                if (err) {
                    res.status(500).send("erreur dans la base de données");
                    throw err;
                } else {
                    if (result.affectedRows < 1) {
                        res.status(400).send(
                            "operation echoué: enchainement n'existe pas ou mauvaise requete"
                        );
                    } else {
                        res.status(200).send("supression avec succé");
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

EntraineurRoute.get("/api/informationEntraineur", async (req, res) => {
    try {
        const { id } = req.body;
        let sql = `Select * from entraineur e inner join categorie c on e.ID_ENTRAINEUR	=c.ID_ENTRAINEUR where e.ID_ENTRAINEUR	=${id}`;
        validation = Validate(req.body);
        if (validation.isValid) {
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
        } else {
            res.status(400).send(validation.errors);
        }
    } catch (err) {
        res.status(500).send(err);
        throw err;
    }
});

module.exports = EntraineurRoute;
