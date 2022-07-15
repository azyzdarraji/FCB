const express = require("express");
const cnx = require("../database/connecter");
const AdherentRoute = express.Router();
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

AdherentRoute.post("/api/informationAdherent", async (req, res) => {
  try {
    const { id } = req.body;
    let sql = `Select * from adherent as a inner join categorie as c on a.ID_CATEGORIE=c.ID_CATEGORIE where a.ID_ADHERANT=${id}`;
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

module.exports = AdherentRoute;
