const express = require("express");
const cnx = require("../database/connecter");
const CategorieRoute = express.Router();
const isEmpty = require("../validation/isEmpty");
const validator = require("validator");

function ValidateAddCategorie(data) {
    let errors = {};
    if (validator.isEmpty(data.id_e)) {
        errors.id = "Required id";
    }
    if (validator.isEmpty(data.nom)) {
        errors.description = "Required description";
    }
    if (validator.isEmpty(data.age_min)) {
        errors.description = "Required description";
    }
    if (validator.isEmpty(data.nage_maxom)) {
        errors.description = "Required description";
    }
    if (validator.isEmpty(data.frais)) {
        errors.description = "Required description";
    }
    return {
        errors,
        isValid: isEmpty(errors),
    };
}

function ValidateMajCategorie(data) {
    let errors = {};
    if (validator.isEmpty(data.id_e)) {
        errors.id = "Required id";
    }
    if (validator.isEmpty(data.id_cat)) {
        errors.id = "Required id";
    }
    if (validator.isEmpty(data.nom)) {
        errors.description = "Required description";
    }
    if (validator.isEmpty(data.age_min)) {
        errors.description = "Required description";
    }
    if (validator.isEmpty(data.nage_maxom)) {
        errors.description = "Required description";
    }
    if (validator.isEmpty(data.frais)) {
        errors.description = "Required description";
    }
    return {
        errors,
        isValid: isEmpty(errors),
    };
}
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
CategorieRoute.post("/api/AddCategorie", async (req, res) => {
    try {
        const { nom, age_min, age_max, frais, id_e } = req.body;
        let checkEntraineur = `select * from entraineur where ID_ENTRAINEUR=${id_e}`;
        let sql = `Insert into categorie (NOM_CATEGORIE,	AGE_MIN,	AGE_MAX,	FRAIS,	ID_ENTRAINEUR) Values ("${nom}","${age_min}","${age_max}","${frais}", ${id_e})`;
        let validation = ValidateAddCategorie(req.body);
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

CategorieRoute.post("/api/MAJenchainement", async (req, res) => {
    try {
        const { nom, age_min, age_max, frais, id_e, id_cat } = req.body;
        let sql = `Update categorie set NOM_CATEGORIE="${nom}",	AGE_MIN=${age_min},	AGE_MAX=${age_max},	FRAIS=${frais},	ID_ENTRAINEUR=${id_e} where ID_CATEGORIE=${id_cat}`;
        let checkEntraineur = `select * from entraineur where ID_ENTRAINEUR=${id_e}`;
        let checkCategorie = `select * from categorie where ID_CATEGORIE=${id_cat}`;
        let validation = ValidateMajCategorie(req.body);
        if (validation.isValid) {
            cnx.query(checkEntraineur, (err, result) => {
                if (err) {
                    res.status(500).send("erreu dans la base de données");
                    throw err;
                } else {
                    if (result.length == 0) {
                        res.status(400).send("cet entraineur n'existe pas");
                    } else {
                        cnx.query(checkCategorie, (err, result) => {
                            if (err) {
                                res.status(500).send("erreu dans la base de données");
                                throw err;
                            } else {
                                if (result.length == 0) {
                                    res.status(400).send("cette categorie n'existe pas");
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
CategorieRoute.post("/api/suprimerCategorie", async (req, res) => {
    try {
        const { id } = req.body;
        let sql = `Delete from categorie where ID_CATEGORIE=${id} `;
        let validation = Validate(req.body);
        if (validation.isValid) {
            cnx.query(sql, (err, result) => {
                if (err) {
                    res.status(500).send("erreur dans la base de données");
                    throw err;
                } else {
                    if (result.affectedRows < 1) {
                        res.status(400).send(
                            "operation echoué: categorie n'existe pas ou mauvaise requete"
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
module.exports = CategorieRoute;
