import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Divider, Grid, IconButton, InputAdornment, TextField } from "@mui/material";
import { AiOutlineSearch } from "react-icons/ai";
const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
        field: "nom",
        headerName: "Nom",
        width: 150,
        editable: true,
    },
    {
        field: "prenom",
        headerName: "Prenom",
        width: 150,
        editable: true,
    },
    {
        field: "age",
        headerName: "Age",
        type: "number",
        width: 110,
        editable: true,
    },
];

const rows = [
    { id: 1, nom: "Snow", prenom: "Jon", age: 15 },
    { id: 2, nom: "Lannister", prenom: "Cersei", age: 12 },
];
function DeleteAdherent() {
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
                    <Box sx={{ height: 400, width: "100%" }}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                        />
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
}

export default DeleteAdherent;
