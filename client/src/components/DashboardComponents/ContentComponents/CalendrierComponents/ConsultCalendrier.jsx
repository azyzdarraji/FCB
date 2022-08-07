import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import { Grid, TextField, Autocomplete, Button } from "@mui/material";
import { BsFillArrowDownCircleFill } from "react-icons/bs";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
const localizer = momentLocalizer(moment);
function ConsultCalendrier() {
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <center>
                        <Autocomplete
                            disablePortal
                            options={Categories}
                            sx={{ width: 300 }}
                            renderInput={(params) => <TextField {...params} label="Categories" />}
                        />
                    </center>
                </Grid>
                <hr />
                <Grid item xs={12}>
                    <div style={{ height: 500 }}>
                        <Calendar
                            localizer={localizer}
                            events={[
                                {
                                    title: "Entrainement",
                                    allDay: false,
                                    start: new Date(2018, 0, 1, 10, 0), // 10.00 AM
                                    end: new Date(2018, 0, 1, 14, 0), // 2.00 PM
                                },
                                {
                                    title: "Match",
                                    allDay: false,
                                    start: new Date(2018, 0, 6, 9, 0), // 10.00 AM
                                    end: new Date(2018, 0, 6, 11, 0), // 2.00 PM
                                },
                            ]}
                            startAccessor="start"
                            endAccessor="end"
                            step={60}
                            view="week"
                            views={["week"]}
                            min={new Date(2008, 0, 1, 8, 0)} // 8.00 AM
                            max={new Date(2008, 0, 1, 17, 0)} // Max will be 6.00 PM!
                            date={new Date(2018, 0, 1)}
                        />
                    </div>
                </Grid>
            </Grid>
        </>
    );
}
const Categories = [{ label: "Minim" }, { label: "Ecole" }, { label: "Cadets" }];
export default ConsultCalendrier;
