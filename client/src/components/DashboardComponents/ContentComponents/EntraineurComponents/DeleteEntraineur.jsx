import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Divider, Grid, IconButton, InputAdornment, TextField } from "@mui/material";
import { AiOutlineSearch, AiFillDelete } from "react-icons/ai";
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
        field: "num",
        headerName: "Numero de telephone",

        width: 350,
        editable: true,
    },
    {
        field: "actions",
        headerName: "",
        sortable: false,
        width: 300,
        disableClickEventBubbling: true,
        renderCell: (params) => {
            return (
                <div
                    className="d-flex justify-content-between align-items-center"
                    style={{ cursor: "pointer", color: "#ba000d", marginTop: "1em" }}
                >
                    <AiFillDelete style={{ marginBottom: "1em" }} />
                    <p>Suprimer</p>
                </div>
            );
        },
    },
];

const rows = [
    { id: 1, nom: "Ali", prenom: "Ben salah", num: 25105001 },
    { id: 2, nom: "Montasar", prenom: "Karoui", num: 21475879 },
];
function DeleteEntraineur() {
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

export default DeleteEntraineur;
