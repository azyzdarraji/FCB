import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Chart as ChartJS, registerables } from "chart.js";

import { Bar, Pie } from "react-chartjs-2";
const labels = ["Ecole", "Minim", "Cadet", "Junior", "Senior"];
const data = {
    labels: labels,
    datasets: [
        {
            label: "",
            data: [2, 0, 1, 2, 0],
            backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                "rgba(255, 205, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(201, 203, 207, 0.2)",
            ],
            borderColor: [
                "rgb(255, 99, 132)",
                "rgb(255, 159, 64)",
                "rgb(255, 205, 86)",
                "rgb(75, 192, 192)",
                "rgb(54, 162, 235)",
                "rgb(153, 102, 255)",
                "rgb(201, 203, 207)",
            ],
            borderWidth: 1,
        },
    ],
};
const data1 = {
    labels: ["Inactive", "Active"],
    datasets: [
        {
            data: [2, 5],
            backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
            hoverOffset: 4,
        },
    ],
};
const options = {
    responsive: true,
    plugins: {
        legend: {
            position: "top",
        },
        title: {
            display: true,
            text: "Nombre des adhérent par rapport aux categories",
        },
    },
};
const options1 = {
    responsive: true,
    plugins: {
        legend: {
            position: "top",
        },
        title: {
            display: true,
            text: "Representation des inscriptions actives par rapport aux inscriptions inactives",
        },
    },
};
ChartJS.register(...registerables);
function StatisticUI() {
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={5}>
                    <Box
                        sx={{
                            marginLeft: { xs: "3%", sm: "3%", md: 0 },
                            width: "95%",
                            minHeight: 100,
                            backgroundColor: "white",
                        }}
                    >
                        <div style={{ marginLeft: "2em", paddingTop: "2em", fontWeight: "bold" }}>
                            <center>
                                Estimation du profit annuel: <br />{" "}
                                <p style={{ color: "#00796b" }}>35,550 TND</p>
                            </center>
                        </div>
                    </Box>
                </Grid>
                <Grid item xs={7}>
                    <Box
                        sx={{
                            marginLeft: { xs: "3%", sm: "3%", md: 0 },
                            width: "90%",
                            minHeight: 100,
                            backgroundColor: "white",
                        }}
                    >
                        <div
                            style={{
                                marginLeft: "2em",
                                paddingTop: "2em",
                                fontWeight: "bold",
                                color: "#004c40",
                            }}
                        >
                            <center>5 Adhérent | 4 Parents | 2 Entraineurs</center>
                        </div>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box
                        sx={{
                            marginLeft: { xs: "3%", sm: "3%", md: 0 },
                            width: "95%",
                            minHeight: 500,
                            backgroundColor: "white",
                        }}
                    >
                        <center>
                            <div style={{ width: "500px", height: "500px" }}>
                                <Pie options={options1} data={data1} />
                            </div>
                        </center>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box
                        sx={{
                            marginLeft: { xs: "3%", sm: "3%", md: 0 },
                            width: "95%",
                            minHeight: 500,
                            backgroundColor: "white",
                        }}
                    >
                        <Bar options={options} data={data} />
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
}

export default StatisticUI;
