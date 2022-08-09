import React, { useState, useEffect } from "react";

import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Divider, Grid, IconButton, InputAdornment, TextField } from "@mui/material";
import { AiOutlineSearch, AiFillEdit } from "react-icons/ai";
function UpdateParent() {
    const columns = [
        { field: "id", headerName: "ID", width: 90 },

        {
            field: "NOM",
            headerName: "Nom",
            width: 150,
            editable: true,
        },
        {
            field: "PRENOM",
            headerName: "Prenom",
            width: 150,
            editable: true,
        },
        {
            field: "CIN",
            headerName: "CIN",

            width: 110,
            editable: true,
        },
        {
            field: "NUM_TELEPHONE",
            headerName: "Numéro de télèphone",

            width: 110,
            editable: true,
        },
        {
            field: "actions",
            headerName: "",
            sortable: false,
            width: 100,
            disableClickEventBubbling: true,
            renderCell: (cellValues) => {
                return (
                    <div
                        className="d-flex justify-content-between align-items-center"
                        style={{ cursor: "pointer", color: "#3f51b5", marginTop: "1em" }}
                        onClick={(e) => {
                            handleUpdate(e, cellValues);
                        }}
                    >
                        <AiFillEdit style={{ marginBottom: "1em" }} />
                        <p>modifier</p>
                    </div>
                );
            },
        },
    ];

    const [data, setData] = useState([{}]);
    const fetchData = async () => {
        await axios.get("http://localhost:3001/api/ToutParents").then((res) => {
            setData(res.data);
        });
    };
    const UpdateParent = async (data) => {
        console.log(data.NUM_TELEPHONE);
        let rslt = await axios.post("http://localhost:3001/api/ModifParent", {
            nom: "" + data.NOM,
            prenom: "" + data.PRENOM,
            cin: "" + data.CIN,
            num_tel: "" + data.NUM_TELEPHONE,
            id: "" + data.id,
        });
        return rslt;
    };
    function handleUpdate(e, cellValues) {
        let res = UpdateParent(cellValues.row);
        console.log(res);
        console.log(cellValues.row);
    }
    useEffect(() => {
        fetchData();
    }, []);

    const rows = data.map((element) => ({
        id: parseInt(element.ID_PARENT),
        NOM: element.NOM,
        PRENOM: element.PRENOM,
        CIN: element.CIN,
        NUM_TELEPHONE: element.NUM_TELEPHONE,
    }));
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
