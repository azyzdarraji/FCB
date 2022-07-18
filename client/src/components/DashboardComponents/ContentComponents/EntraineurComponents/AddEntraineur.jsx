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
function AddEntraineur() {
  return (
    <div>
    <form>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6}>
          <TextField label="Nom" required style={{ width: "100%" }} />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <TextField label="Prenom" required style={{ width: "100%" }} />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <TextField label="Matricule" required style={{ width: "100%" }} />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <TextField
            label="Mot de passe"
            type="password"
            required
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <TextField
            label="Repeter mot de passe"
            type="password"
            required
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <TextField label="CIN" required style={{ width: "100%" }} />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <TextField
            label="Numero telephone"
            required
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={12}>
          <center>
            {" "}
            <Button variant="contained">Enregistrer</Button>
          </center>
        </Grid>
      </Grid>
    </form>
  </div>
  )
}

export default AddEntraineur