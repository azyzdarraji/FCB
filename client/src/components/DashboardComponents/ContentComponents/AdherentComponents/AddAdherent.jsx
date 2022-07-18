import React,{useState} from 'react'
import { Button, FormControl, Grid, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material'

function AddAdherent() {
  
  return (
    <div>
       
    <form >
    <Grid container spacing={2}> 
    <Grid item xs={12} sm={12} md={6}>
    <TextField label="Nom"  required style={{width:"100%"}} />
    </Grid>
    <Grid item xs={12} sm={12} md={6}>
    <TextField label="Prenom"  required style={{width:"100%"}} />
    </Grid>
    <Grid item xs={12} sm={12} md={6}>
    </Grid>
    <Grid item xs={12} sm={12} md={6}>
    <TextField label="Matricule"  required style={{width:"100%"}} />
    </Grid>
    <Grid item xs={12} sm={12} md={6}>
    <TextField label="Mot de passe" type="password"  required style={{width:"100%"}} />
    </Grid>
    <Grid item xs={12} sm={12} md={6}>
    <TextField label="Repeter mot de passe" type="password" required style={{width:"100%"}} />
    </Grid>
    <Grid item xs={12} sm={12} md={6}>
    <TextField label="Poids"   required style={{width:"100%"}} />
    </Grid>
    <Grid item xs={12} sm={12} md={6}>
    <TextField label="Taille"   required style={{width:"100%"}} />
    </Grid>
    <Grid item xs={12} sm={12} md={6}>
    <FormControl sx={{width:"100%" }}>
        <InputLabel id="demo-simple-select-autowidth-label">Categorie</InputLabel>
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
    <FormControl sx={{width:"100%" }}>
        <InputLabel id="demo-simple-select-autowidth-label">Parent</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          autoWidth
          label="Parent"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Nothing here yet!</MenuItem>
        </Select>
        </FormControl>
        </Grid>
        <Grid item xs={12}>
    <center> <Button variant="contained">Enregistrer</Button></center>
    </Grid>
    </Grid>
   
  </form>
 
  </div>
  )
}

export default AddAdherent;