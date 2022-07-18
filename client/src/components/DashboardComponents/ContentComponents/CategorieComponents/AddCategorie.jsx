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
function AddCategorie() {
  return (
    <div>
    <form>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6}>
          <TextField label="Nom" required style={{ width: "100%" }} />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
        <FormControl sx={{width:"100%" }}>
        <InputLabel id="demo-simple-select-autowidth-label">Entraineur</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          autoWidth
          label="Categorie"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Nothing here yet!</MenuItem>
        </Select>
        </FormControl>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <TextField label="Age minimum" type="number" required style={{ width: "100%" }} />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <TextField
            label="Age maximum"
            type="number"
            required
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <TextField label="Frais d'inscription" required style={{ width: "100%" }} />
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

export default AddCategorie