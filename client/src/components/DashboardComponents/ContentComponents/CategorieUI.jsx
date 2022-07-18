import React from "react";
import { Box, Tab } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import AddCategorie from "./CategorieComponents/AddCategorie";
function CategorieUI() {
    const [value, setValue] = React.useState("1");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (  <Box
        sx={{
            marginLeft: { xs: "3%", sm: "3%", md: 0 },
            width: "95%",
            minHeight: 600,
            height: 300,
            backgroundColor: "white",
        }}
    >
        <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList onChange={handleChange} aria-label="lab API tabs example">
                    <Tab label="Ajouter" value="1" />
                    <Tab label="Modifier" value="2" />
                    <Tab label="Suprimer" value="3" />
                    <Tab label="Modifier entraineurs" value="4" />
                </TabList>
            </Box>
            <TabPanel value="1" style={{width:"100%"}}><AddCategorie /></TabPanel>
            <TabPanel value="2" style={{width:"100%"}}>Modification</TabPanel>
            <TabPanel value="3" style={{width:"100%"}}>Supression</TabPanel>
            <TabPanel value="4" style={{width:"100%"}}>Supression</TabPanel>
        </TabContext>
    </Box>);
}

export default CategorieUI;
