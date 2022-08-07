import React from "react";
import { Grid, TextField, Autocomplete, Button } from "@mui/material";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
function UpdateCatEntraineur() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <center>
                    <Autocomplete
                        disablePortal
                        options={Categories}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Categories" />}
                    />
                </center>
            </Grid>
            <Grid item xs={12}>
                <center>
                    <BsFillArrowDownCircleFill style={{ width: "2em", height: "2em" }} />
                </center>
            </Grid>
            <Grid item xs={12}>
                <center>
                    <Autocomplete
                        disablePortal
                        options={Entraineurs}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Entraineur" />}
                    />
                </center>
            </Grid>
            <Grid item xs={12}>
                <Grid item xs={12}>
                    <center>
                        {" "}
                        <Button variant="contained">Enregistrer</Button>
                    </center>
                </Grid>
            </Grid>
        </Grid>
    );
}
const Categories = [{ label: "Minim" }, { label: "Ecole" }, { label: "Cadets" }];
const Entraineurs = [{ label: "Ali" }, { label: "Saed" }, { label: "Nour" }];

export default UpdateCatEntraineur;
