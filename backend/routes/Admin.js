const express = require("express");
const bodyPareser = require("body-parser");
const bcrypt = require("bcryptjs");
const cnx = require("../database/connecter");
const AdminRoute = express.Router();
const isEmpty = require("../validation/isEmpty");
const validator = require("validator");

function ValidateAddAdherent(data) {
    let errors = {};
    if (validator.isEmpty(data.nom)) {
        errors.nom = "Required nom";
    }
    if (validator.isEmpty(data.prenom)) {
        errors.prenom = "Required prenom";
    }
    if (validator.isEmpty(data.age)) {
        errors.age = "Required age";
    }
    if (validator.isEmpty(data.poids)) {
        errors.poids = "Required poids";
    }
    if (validator.isEmpty(data.taille)) {
        errors.taille = "Required taille";
    }
    if (validator.isEmpty(data.num_insc)) {
        errors.num_insc = "Required num_insc";
    }
    if (validator.isEmpty(data.id_cat)) {
        errors.id_cat = "Required id_cat";
    }
    if (validator.isEmpty(data.id_parent)) {
        errors.id_parent = "Required id_parent";
    }
    if (validator.isEmpty(data.matricule)) {
        errors.matricule = "Required matricule";
    }
    if (validator.isEmpty(data.mdp)) {
        errors.mdp = "Required mdp";
    }
    return {
        errors,
        isValid: isEmpty(errors),
    };
}
function ValidateMajAdherent(data) {
    let errors = {};
    if (validator.isEmpty(data.nom)) {
        errors.nom = "Required nom";
    }
    if (validator.isEmpty(data.prenom)) {
        errors.prenom = "Required prenom";
    }
    if (validator.isEmpty(data.poids)) {
        errors.poids = "Required poids";
    }
    if (validator.isEmpty(data.taille)) {
        errors.taille = "Required taille";
    }
    if (validator.isEmpty(data.id_cat)) {
        errors.id_cat = "Required id_cat";
    }
    if (validator.isEmpty(data.id)) {
        errors.id_cat = "Required id adherent";
    }
    return {
        errors,
        isValid: isEmpty(errors),
    };
}
function ValidateAddParent(data) {
    let errors = {};
    if (validator.isEmpty(data.nom)) {
        errors.nom = "Required nom";
    }
    if (validator.isEmpty(data.prenom)) {
        errors.prenom = "Required prenom";
    }
    if (validator.isEmpty(data.cin)) {
        errors.num_insc = "Required cin";
    }
    if (validator.isEmpty(data.num_tel)) {
        errors.num_tel = "Required phone number";
    }
    if (validator.isEmpty(data.matricule)) {
        errors.matricule = "Required matricule";
    }
    if (validator.isEmpty(data.mdp)) {
        errors.mdp = "Required mdp";
    }
    return {
        errors,
        isValid: isEmpty(errors),
    };
}
function ValidateMajParent(data) {
    let errors = {};
    if (validator.isEmpty(data.nom)) {
        errors.nom = "Required nom";
    }
    if (validator.isEmpty(data.prenom)) {
        errors.prenom = "Required prenom";
    }
    if (validator.isEmpty(data.cin)) {
        errors.num_insc = "Required cin";
    }
    if (validator.isEmpty(data.num_tel)) {
        errors.num_tel = "Required phone number";
    }
    if (validator.isEmpty(data.id)) {
        errors.id = "Required id parent";
    }
    return {
        errors,
        isValid: isEmpty(errors),
    };
}
function ValidateAddEntraineur(data) {
    let errors = {};
    if (validator.isEmpty(data.nom)) {
        errors.nom = "Required nom";
    }
    if (validator.isEmpty(data.prenom)) {
        errors.prenom = "Required prenom";
    }
    if (validator.isEmpty(data.cin)) {
        errors.num_insc = "Required cin";
    }
    if (validator.isEmpty(data.num_tel)) {
        errors.num_tel = "Required phone number";
    }
    if (validator.isEmpty(data.matricule)) {
        errors.matricule = "Required matricule";
    }
    if (validator.isEmpty(data.mdp)) {
        errors.mdp = "Required mdp";
    }
    return {
        errors,
        isValid: isEmpty(errors),
    };
}
function ValidateMajEntraineur(data) {
    let errors = {};
    if (validator.isEmpty(data.nom)) {
        errors.nom = "Required nom";
    }
    if (validator.isEmpty(data.prenom)) {
        errors.prenom = "Required prenom";
    }
    if (validator.isEmpty(data.cin)) {
        errors.num_insc = "Required cin";
    }
    if (validator.isEmpty(data.num_tel)) {
        errors.num_tel = "Required phone number";
    }
    if (validator.isEmpty(data.id)) {
        errors.id = "Required id parent";
    }
    return {
        errors,
        isValid: isEmpty(errors),
    };
}

function ValidateModifCatEntraineur(data) {
    let errors = {};
    if (validator.isEmpty(data.id_e)) {
        errors.id_e = "Required id entraineur";
    }
    if (validator.isEmpty(data.id)) {
        errors.id = "Required id categorie";
    }

    return {
        errors,
        isValid: isEmpty(errors),
    };
}

function ValidateSuprime(data) {
    let errors = {};

    if (validator.isEmpty(data.id)) {
        errors.id = "Required id";
    }

    return {
        errors,
        isValid: isEmpty(errors),
    };
}
//select
AdminRoute.get("/api/ToutAdherents", async (req, res) => {
    try {
        let sql = `Select * from adherent`;
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
AdminRoute.get("/api/ToutParents", async (req, res) => {
    try {
        let sql = `Select * from parent`;
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
AdminRoute.get("/api/ToutEntraineur", async (req, res) => {
    try {
        let sql = `Select * from entraineur`;
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
AdminRoute.get("/api/ToutCategorie", async (req, res) => {
    try {
        let sql = `Select * from categorie`;
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
AdminRoute.get("/api/ToutPayement", async (req, res) => {
    try {
        let sql = `Select * from adherent a inner join payement p on a.ID_ADHERANT=.ID_ADHERANT `;
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
//Ajout
AdminRoute.post("/api/AddAdherent", async (req, res) => {
    try {
        const { nom, prenom, poids, taille, date_naissance, id_cat, id_parent, matricule, mdp } =
            req.body;
        const date_insc = new Date().toISOString().slice(0, 10);
        const type_u = "d";
        let checkCat = `select * from categorie where ID_CATEGORIE=${id_cat}`;
        let checkParent = `select * from parent where ID_PARENT=${id_parent}`;
        let cHeckAdherent = `select * from adherent where NOM="${nom}" and PRENOM="${prenom}" and ID_PARENT=${id_parent}`;

        const hash = await bcrypt.hash(mdp, 5);
        let sqlUser = `Insert into utilisateur (MATRICULE, MOT_DE_PASSE,TYPE_U) Values ("${matricule}","${hash}","${type_u}")`;

        validation = ValidateAddAdherent(req.body);
        if (validation.isValid) {
            cnx.query(checkCat, (err, result) => {
                if (err) {
                    res.status(500).send("erreur dans la base de données");
                    throw err;
                } else {
                    if (result.length == 0) {
                        res.status(400).send("ce categorie n'existe pas");
                    } else {
                        cnx.query(checkParent, (err, result) => {
                            if (err) {
                                res.status(500).send("erreur dans la base de données");
                                throw err;
                            } else {
                                if (result.length == 0) {
                                    res.status(400).send("ce parent n'existe pas");
                                } else {
                                    cnx.query(cHeckAdherent, (err, result) => {
                                        if (err) {
                                            res.status(500).send("erreur dans la base de données");
                                            throw err;
                                        } else {
                                            if (result.length > 0) {
                                                res.status(400).send("cet adhérent existe deja");
                                            } else {
                                                let sql = `select * from utilisateur where MATRICULE="${matricule}" and TYPE_U="${type_u}"`;
                                                cnx.query(sql, (err, result) => {
                                                    if (err) {
                                                        res.status(500).send(
                                                            "erreur dans la base de données"
                                                        );
                                                        throw err;
                                                    } else {
                                                        if (result.length == 0) {
                                                            cnx.query(sqlUser, (err, result) => {
                                                                if (err) {
                                                                    res.status(500).send(
                                                                        "erreur dans la base de données"
                                                                    );
                                                                    throw err;
                                                                } else {
                                                                    let sqlAd = `Insert into adherent (NOM,PRENOM,DATE_NAISSANCE,POIDS,TAILLE,NUM_INSCRIPTION,DATE_INSCRIPTION,ID_CATEGORIE,ID_PARENT,ID_U) Values ("${nom}","${prenom}","${date_naissance}","${poids}","${taille}","${date_insc}","${id_cat}","${id_parent}","${result.insertId}")`;
                                                                    cnx.query(
                                                                        sqlAd,
                                                                        (err, result) => {
                                                                            if (err) {
                                                                                res.status(
                                                                                    500
                                                                                ).send(
                                                                                    "erreur dans la base de données"
                                                                                );
                                                                                throw err;
                                                                            } else {
                                                                                let addPayement = `insert into payement (TYPE_PAYEMENT,ETAT_PAYEMENT,ID_ADHERANT) VALUES("mensuel",1,${result.insertId}})`;
                                                                                cnx.query(
                                                                                    addPayement,
                                                                                    (
                                                                                        err,
                                                                                        result
                                                                                    ) => {
                                                                                        if (err) {
                                                                                            res.status(
                                                                                                500
                                                                                            ).send(
                                                                                                "erreur dans la base de données"
                                                                                            );
                                                                                            throw err;
                                                                                        } else {
                                                                                            res.status(
                                                                                                200
                                                                                            ).send(
                                                                                                "Added adherent successfully !"
                                                                                            );
                                                                                        }
                                                                                    }
                                                                                );
                                                                            }
                                                                        }
                                                                    );
                                                                }
                                                            });
                                                        } else {
                                                            res.status(400).send(
                                                                "matricule adherent existe déja"
                                                            );
                                                        }
                                                    }
                                                });
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

AdminRoute.post("/api/AddParent", async (req, res) => {
    try {
        const { nom, prenom, cin, num_tel, matricule, mdp } = req.body;

        const type_u = "p";
        const hash = await bcrypt.hash(mdp, 5);
        let sql = `select * from utilisateur where MATRICULE="${matricule}" and TYPE_U="${type_u}"`;
        let sqlUser = `Insert into utilisateur (MATRICULE, MOT_DE_PASSE,TYPE_U) Values ("${matricule}","${hash}","${type_u}")`;
        let checkParent = `select * from parent where CIN=${cin}`;
        validation = ValidateAddParent(req.body);

        if (validation.isValid) {
            cnx.query(checkParent, (err, result) => {
                if (err) {
                    res.status(500).send("erreur dans la base de données");
                    throw err;
                } else {
                    if (result.length > 0) {
                        res.status(400).send("ce parent existe deja");
                    } else {
                        cnx.query(sql, (err, result) => {
                            if (err) {
                                res.status(500).send("erreur dans la base de données");
                                throw err;
                            } else {
                                console.log(result);
                                if (result.length == 0) {
                                    cnx.query(sqlUser, (err, result) => {
                                        if (err) {
                                            throw err;
                                        } else {
                                            let sqlParent = `Insert into parent (NOM,PRENOM,CIN,NUM_TELEPHONE,ID_U) Values ("${nom}","${prenom}","${cin}","${num_tel}","${result.insertId}")`;
                                            cnx.query(sqlParent, (err, result) => {
                                                if (err) {
                                                    res.status(500).send(
                                                        "erreur dans la base de données"
                                                    );
                                                    throw err;
                                                } else {
                                                    res.status(200).send(
                                                        "Added parent successfully !"
                                                    );
                                                }
                                            });
                                        }
                                    });
                                } else {
                                    res.status(400).send("matricule parent existe déja");
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

AdminRoute.post("/api/AddEntraineur", async (req, res) => {
    try {
        const { nom, prenom, cin, num_tel, matricule, mdp } = req.body;

        const type_u = "e";
        const hash = await bcrypt.hash(mdp, 5);
        let sql = `select * from utilisateur where MATRICULE="${matricule}" and TYPE_U="${type_u}"`;
        let sqlUser = `Insert into utilisateur (MATRICULE, MOT_DE_PASSE,TYPE_U) Values ("${matricule}","${hash}","${type_u}")`;
        let checkParent = `select * from entraineur where CIN=${cin}`;
        validation = ValidateAddEntraineur(req.body);

        if (validation.isValid) {
            cnx.query(checkEntraineur, (err, result) => {
                if (err) {
                    res.status(500).send("erreur dans la base de données");
                    throw err;
                } else {
                    if (result.length > 0) {
                        res.status(400).send("cet entraineur existe deja");
                    } else {
                        cnx.query(sql, (err, result) => {
                            if (err) {
                                throw err;
                            } else {
                                if (result.length == 0) {
                                    cnx.query(sqlUser, (err, result) => {
                                        if (err) {
                                            res.status(500).send("erreur dans la base de données");
                                            throw err;
                                        } else {
                                            let sqlEnt = `Insert into entraineur (NOM,PRENOM,CIN,NUM_TELEPHONE,ID_U) Values ("${nom}","${prenom}","${cin}","${num_tel}","${result.insertId}")`;
                                            cnx.query(sqlEnt, (err, result) => {
                                                if (err) {
                                                    res.status(500).send(
                                                        "erreur dans la base de données"
                                                    );
                                                    throw err;
                                                } else {
                                                    res.status(200).send(
                                                        "Added entraineur successfully !"
                                                    );
                                                }
                                            });
                                        }
                                    });
                                } else {
                                    res.status(400).send("matricule entraineur existe déja");
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
AdminRoute.post("/api/AddAdminstrateur", async (req, res) => {
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
        res.status(500).send(err);
        throw err;
    }
});

//update
AdminRoute.post("/api/ModifAdherent", async (req, res) => {
    try {
        const { nom, prenom, poids, taille, id_cat, id } = req.body;
        let sql = `Update adherent set NOM="${nom}",PRENOM="${prenom}",POIDS="${poids}",TAILLE="${taille}",ID_CATEGORIE="${id_cat}" ID_ADHERANT=${id}`;
        let checkCat = `select * from categorie where ID_CATEGORIE=${id_cat}`;
        let cHeckAdherent = `select * from adherent where ID_ADHERENT=${id}`;

        validation = ValidateMajAdherent(req.body);
        if (validation.isValid) {
            cnx.query(checkCat, (err, result) => {
                if (err) {
                    res.status(500).send("erreur dans la base de données");
                    throw err;
                } else {
                    if (result.length == 0) {
                        res.status(400).send("ce categorie n'existe pas");
                    } else {
                        cnx.query(cHeckAdherent, (err, result) => {
                            if (err) {
                                res.status(500).send("erreur dans la base de données");
                                throw err;
                            } else {
                                if (result.length == 0) {
                                    res.status(400).send("cet adherent n'existe pas");
                                } else {
                                    cnx.query(sql, (err, result) => {
                                        if (err) {
                                            res.status(500).send("erreur dans la base de données");
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
AdminRoute.post("/api/ModifParent", async (req, res) => {
    try {
        const { nom, prenom, cin, num, id } = req.body;
        let sql = `Update parent set NOM="${nom}",PRENOM="${prenom}",CIN="${cin}",NUM_TELEPHONE="${num}" where ID_PARENT="${id}"`;
        let checkParent = `select * from parent where ID_PARENT=${id_parent}`;
        validation = ValidateMajParent(req.body);
        if (validation.isValid) {
            cnx.query(checkParent, (err, result) => {
                if (err) {
                    res.status(500).send("erreur dans la base de données");
                    throw err;
                } else {
                    if (result.length == 0) {
                        res.status(400).send("ce parent n'existe pas");
                    } else {
                        cnx.query(sql, (err, result) => {
                            if (err) {
                                res.status(500).send("erreur dans la base de données");
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
        } else {
            res.status(400).send(validation.errors);
        }
    } catch (err) {
        res.status(500).send(err);
        throw err;
    }
});
AdminRoute.post("/api/ModifEntraineur", async (req, res) => {
    try {
        const { nom, prenom, cin, num, id } = req.body;
        let sql = `Update entraineur set NOM="${nom}",PRENOM="${prenom}",CIN="${cin}",NUM_TELEPHONE="${num}" where ID_ENTRAINEUR="${id}"`;
        let checkEntraineur = `select * from entraineur where ID_ENTRAINEUR=${id}`;
        validation = ValidateMajEntraineur(req.body);
        if (validation.isValid) {
            cnx.query(checkEntraineur, (err, result) => {
                if (err) {
                    res.status(500).send("erreur dans la base de données");
                    throw err;
                } else {
                    if (result.length == 0) {
                        res.status(400).send("cet entraineur n'existe pas");
                    } else {
                        cnx.query(sql, (err, result) => {
                            if (err) {
                                res.status(500).send("erreur dans la base de données");
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
        } else {
            res.status(400).send(validation.errors);
        }
    } catch (err) {
        res.status(500).send(err);
        throw err;
    }
});
AdminRoute.post("/api/ModifEntraineurCategorie", async (req, res) => {
    try {
        const { id_e, id } = req.body;
        let sql = `Update categorie set ID_ENTRAINEUR="${id_e}" where ID_CATEGORIE="${id}"`;
        let checkCat = `select * from categorie where ID_CATEGORIE=${id_cat}`;
        let checkEntraineur = `select * from entraineur where ID_ENTRAINEUR=${id}`;
        validation = ValidateModifCatEntraineur(req.body);
        if (validation.isValid) {
            cnx.query(checkCat, (err, result) => {
                if (err) {
                    res.status(500).send("erreur dans la base de données");
                    throw err;
                } else {
                    if (result.length == 0) {
                        res.status(400).send("ce categorie n'existe pas");
                    } else {
                        cnx.query(checkEntraineur, (err, result) => {
                            if (err) {
                                res.status(500).send("erreur dans la base de données");
                                throw err;
                            } else {
                                if (result.length == 0) {
                                    res.status(400).send("cet entraineur n'existe pas");
                                } else {
                                    cnx.query(sql, (err, result) => {
                                        if (err) {
                                            res.status(500).send("erreur dans la base de données");
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

//suprrimer

AdminRoute.delete("/api/suprimerAdherent", async (req, res) => {
    try {
        const { id } = req.body;
        let DesactivatePayement = `Update payement set ETAT_PAYEMENT=0`;
        let sql = `Delete from adherent where ID_ADHERENT=${id} `;
        validation = ValidateSuprime(req.body);
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
                        cnx.query(DesactivatePayement, (err, result) => {
                            if (err) {
                                res.status(500).send("erreur dans la base de données");
                                throw err;
                            } else {
                                res.status(200).send("supression avec succé");
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
AdminRoute.delete("/api/suprimerParent", async (req, res) => {
    try {
        const { id } = req.body;
        let sql = `Delete from parent where ID_PARENT=${id} `;
        validation = ValidateSuprime(req.body);
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
AdminRoute.delete("/api/suprimerEntraineur", async (req, res) => {
    try {
        const { id } = req.body;
        let sql = `Delete from entraineur where ID_ENTRAINEUR=${id} `;
        let validation = ValidateSuprime(req.body);
        if (validation.isValid) {
            cnx.query(sql, (err, result) => {
                if (err) {
                    res.status(500).send("erreur dans la base de données");
                    throw err;
                } else {
                    if (result.affectedRows < 1) {
                        res.status(400).send(
                            "operation echoué: Entraineur n'existe pas ou mauvaise requete"
                        );
                    } else {
                        let deleteEnchqinement = `Delete from enchainement where ID_ENTRAINEUR=${id} `;
                        cnx.query(deleteEnchqinement, (err, result) => {
                            if (err) {
                                res.status(500).send("erreur dans la base de données");
                                throw err;
                            } else {
                                if (result.affectedRows < 1) {
                                    res.status(400).send(
                                        "Entraineur ne possède pas des enchainement"
                                    );
                                } else {
                                    res.status(200).send("supression avec succé");
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
module.exports = AdminRoute;
