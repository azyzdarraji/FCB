import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Divider, Grid, IconButton, InputAdornment, TextField } from "@mui/material";
import { AiOutlineSearch } from "react-icons/ai";
const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
        field: "nom",
        headerName: "Nom",
        width: 200,
        editable: true,
    },
    {
        field: "prenom",
        headerName: "Prenom",
        width: 200,
        editable: true,
    },
    {
        field: "categorie",
        headerName: "Categorie",

        width: 200,
        editable: false,
    },
    {
        field: "etat",
        headerName: "Etat de payement",

        width: 240,
        editable: false,
    },
    {
        field: "type",
        headerName: "Type de payement",

        width: 240,
        editable: false,
    },
];

const rows = [
    { id: 1, nom: "Atef", prenom: "Dkhili", categorie: "ecole", etat: "Active", type: "mensuel" },
    {
        id: 2,
        nom: "Issam",
        prenom: "Yahya",
        categorie: "junior",
        etat: "inActive",
        type: "mensuel",
    },
    {
        id: 3,
        nom: "Saleh",
        prenom: "El majri",
        categorie: "cadet",
        etat: "Active",
        type: "mensuel",
    },
    {
        id: 4,
        nom: "Karim",
        prenom: "Ben ltayef",
        categorie: "ecole",
        etat: "Active",
        type: "mensuel",
    },
    {
        id: 5,
        nom: "Wajdi",
        prenom: "Bou chrida",
        categorie: "junior",
        etat: "Active",
        type: "mensuel",
    },
    {
        id: 6,
        nom: "Koussay",
        prenom: "El mezni",
        categorie: "cadet",
        etat: "inActive",
        type: "mensuel",
    },
    {
        id: 7,
        nom: "Riadh",
        prenom: "El mezni",
        categorie: "junior",
        etat: "Active",
        type: "mensuel",
    },
];
function ConsulterPayements() {
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <center>
                        <TextField
                            label="Rechercher"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment>
                                        <IconButton>
                                            <AiOutlineSearch />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </center>
                </Grid>
                <hr />
                <Grid item xs={12}>
                    <center>
                        <Box sx={{ height: 400, width: "95%" }}>
                            <DataGrid
                                rows={rows}
                                columns={columns}
                                pageSize={5}
                                rowsPerPageOptions={[5]}
                            />
                        </Box>
                    </center>
                </Grid>
            </Grid>
        </div>
    );
}

export default ConsulterPayements;
