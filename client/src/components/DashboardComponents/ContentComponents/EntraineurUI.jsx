import React from "react";
import { Box, Tab } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import AddEntraineur from "./EntraineurComponents/AddEntraineur";
import UpdateEntraineur from "./EntraineurComponents/UpdateEntraineur";
import DeleteEntraineur from "./EntraineurComponents/DeleteEntraineur";
function EntraineurUI() {
    const [value, setValue] = React.useState("1");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <Box
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
                    </TabList>
                </Box>
                <TabPanel value="1">
                    <AddEntraineur />
                </TabPanel>
                <TabPanel value="2">
                    <UpdateEntraineur />
                </TabPanel>
                <TabPanel value="3">
                    <DeleteEntraineur />
                </TabPanel>
            </TabContext>
        </Box>
    );
}

export default EntraineurUI;
