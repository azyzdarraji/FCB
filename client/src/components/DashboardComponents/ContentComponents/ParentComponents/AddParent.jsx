import React, { useState } from "react";
import {
    Button,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    Stack,
    TextField,
} from "@mui/material";
import axios from "axios";
function AddParent() {
    const [Nom, setNom] = useState("");
    const [Prenom, setPrenom] = useState("");
    const [Mat, setMat] = useState("");
    const [mdp1, setMdp1] = useState("");
    const [mdp2, setMdp2] = useState("");
    const [Cin, setCin] = useState("");
    const [Num, setNum] = useState("");
    console.log(Nom + "," + Prenom + "," + Mat + "," + mdp1 + "," + mdp2 + "," + Cin + "," + Num);
    const addNewParent = async (Nom, Prenom, Mat, mdp1, Cin, Num) => {
        const result = await axios.post("http://localhost:3001/api/AddParent", {
            nom: Nom,
            prenom: Prenom,
            cin: Cin,
            num_tel: Num,
            matricule: Mat,
            mdp: mdp1,
        });

        return result;
    };
    function isEmpty(v) {
        if (v == "") {
            return true;
        } else return false;
    }
    function isSame(v1, v2) {
        if (v1 == v2) {
            return true;
        } else return false;
    }
    function Submit(e) {
        e.preventDefault();
        if (
            isEmpty(Nom) ||
            isEmpty(Prenom) ||
            isEmpty(Mat) ||
            isEmpty(mdp1) ||
            isEmpty(mdp2) ||
            isEmpty(Cin) ||
            isEmpty(Num)
        ) {
            console.log("one of them is not valid");
        } else {
            if (!isSame(mdp1, mdp2)) {
                console.log("not the same");
            } else {
                if (isNaN(Cin) || isNaN(Num)) {
                    console.log("Cin et num tel must be numbers only!");
                } else {
                    console.log("saving...)");
                    let rslt = addNewParent(Nom, Prenom, Mat, mdp1, Cin, Num);
                    console.log(rslt);
                }
            }
        }
    }
    return (
        <div>
            <form>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={6}>
                        <TextField
                            label="Nom"
                            required
                            style={{ width: "100%" }}
                            onChange={(e) => setNom(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <TextField
                            label="Prenom"
                            required
                            style={{ width: "100%" }}
                            onChange={(e) => setPrenom(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <TextField
                            label="Matricule"
                            required
                            style={{ width: "100%" }}
                            onChange={(e) => setMat(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <TextField
                            label="Mot de passe"
                            type="password"
                            required
                            style={{ width: "100%" }}
                            onChange={(e) => setMdp1(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <TextField
                            label="Repeter mot de passe"
                            type="password"
                            required
                            style={{ width: "100%" }}
                            onChange={(e) => setMdp2(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <TextField
                            label="CIN"
                            required
                            style={{ width: "100%" }}
                            onChange={(e) => setCin(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <TextField
                            label="Numero telephone"
                            required
                            style={{ width: "100%" }}
                            onChange={(e) => setNum(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <center>
                            {" "}
                            <Button variant="contained" onClick={(e) => Submit(e)}>
                                Enregistrer
                            </Button>
                        </center>
                    </Grid>
                </Grid>
            </form>
        </div>
    );
}

export default AddParent;
