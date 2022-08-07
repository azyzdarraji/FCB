import React from "react";
import { Box } from "@mui/material";
import ConsulterPayements from "./PayementComponents/ConsulterPayements";
function PayementUI() {
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
            <ConsulterPayements />
        </Box>
    );
}

export default PayementUI;
