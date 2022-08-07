import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Divider, Grid, IconButton, InputAdornment, TextField } from "@mui/material";
import { AiOutlineSearch, AiFillEdit } from "react-icons/ai";
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
                    style={{ cursor: "pointer", color: "#3f51b5", marginTop: "1em" }}
                >
                    <AiFillEdit style={{ marginBottom: "1em" }} />
                    <p>Modifier</p>
                </div>
            );
        },
    },
];

const rows = [
    { id: 1, nom: "Massoud", prenom: "Hafsaoui", num: 24501788 },
    { id: 2, nom: "Raouf", prenom: "Kadhi", num: 98507888 },
    { id: 3, nom: "Abd el baset", prenom: "Ben mansour", num: 71455875 },
    { id: 4, nom: "Chedli", prenom: "Ben saraf", num: 20147258 },
];
function UpdateParent() {
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

export default UpdateParent;
