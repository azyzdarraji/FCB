import React, { useState, useEffect } from "react";
import {
    Typography,
    Toolbar,
    ListItemText,
    ListItemIcon,
    ListItemButton,
    ListItem,
    List,
    IconButton,
    Drawer,
    Divider,
    CssBaseline,
    Box,
    AppBar,
} from "@mui/material";
import {
    AiOutlineMenu,
    AiOutlineCloseCircle,
    AiOutlineCalendar,
    AiOutlinePoweroff,
} from "react-icons/ai";
import { IoMdFootball } from "react-icons/io";
import { RiParentFill } from "react-icons/ri";
import { GiWhistle } from "react-icons/gi";
import { BiCategoryAlt, BiStats } from "react-icons/bi";

import { MdOutlinePayments } from "react-icons/md";
import AdherentUI from "./ContentComponents/AdherentUI";
import ParentUI from "./ContentComponents/ParentUI";
import EntraineurUI from "./ContentComponents/EntraineurUI";
import CategorieUI from "./ContentComponents/CategorieUI";
import PayementUI from "./ContentComponents/PayementUI";
import CalendrierUI from "./ContentComponents/CalendrierUI";
import StatisticUI from "./ContentComponents/StatisticUI";
import img from "../../assets/logo1.png";
const drawerWidth = 240;
function Content(props) {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [component, setComponent] = useState("parent");
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    useEffect(() => {
        setComponent(props.component);
    }, [props.component]);

    const drawer = (
        <div>
            <AiOutlineCloseCircle
                style={{ width: "2em", height: "2em", float: "right", marginTop: "1em" }}
                onClick={handleDrawerToggle}
            />
            <Toolbar style={{ justifyContent: "space-between" }}>
                <div></div>

                <img src={img} alt="" style={{ width: "3em", height: "3.2em" }}></img>

                <div></div>
            </Toolbar>

            <Divider />
            <List>
                <ListItem
                    key={0}
                    disablePadding
                    onClick={() => {
                        setComponent("adherent");
                        handleDrawerToggle();
                    }}
                >
                    <ListItemButton>
                        <ListItemIcon>
                            <IoMdFootball />
                        </ListItemIcon>
                        <ListItemText primary={"Gestion des adhérents"} />
                    </ListItemButton>
                </ListItem>
                <ListItem
                    key={1}
                    disablePadding
                    onClick={() => {
                        setComponent("parent");
                        handleDrawerToggle();
                    }}
                >
                    <ListItemButton>
                        <ListItemIcon>
                            <RiParentFill />
                        </ListItemIcon>
                        <ListItemText primary={"Gestion des parents"} />
                    </ListItemButton>
                </ListItem>
                <ListItem
                    key={2}
                    disablePadding
                    onClick={() => {
                        setComponent("entraineur");
                        handleDrawerToggle();
                    }}
                >
                    <ListItemButton>
                        <ListItemIcon>
                            <GiWhistle />
                        </ListItemIcon>
                        <ListItemText primary={"Gestion des entraineurs"} />
                    </ListItemButton>
                </ListItem>
                <ListItem
                    key={3}
                    disablePadding
                    onClick={() => {
                        setComponent("categorie");
                        handleDrawerToggle();
                    }}
                >
                    <ListItemButton>
                        <ListItemIcon>
                            <BiCategoryAlt />
                        </ListItemIcon>
                        <ListItemText primary={"Gestion des catégories"} />
                    </ListItemButton>
                </ListItem>
                <ListItem
                    key={4}
                    disablePadding
                    onClick={() => {
                        setComponent("payement");
                        handleDrawerToggle();
                    }}
                >
                    <ListItemButton>
                        <ListItemIcon>
                            <MdOutlinePayments />
                        </ListItemIcon>
                        <ListItemText primary={"Gestion des payements"} />
                    </ListItemButton>
                </ListItem>
                <ListItem
                    key={5}
                    disablePadding
                    onClick={() => {
                        setComponent("calendrier");
                        handleDrawerToggle();
                    }}
                >
                    <ListItemButton>
                        <ListItemIcon>
                            <AiOutlineCalendar />
                        </ListItemIcon>
                        <ListItemText primary={"Gestion des calendriers"} />
                    </ListItemButton>
                </ListItem>
                <ListItem
                    key={6}
                    disablePadding
                    onClick={() => {
                        setComponent("statistic");
                        handleDrawerToggle();
                    }}
                >
                    <ListItemButton>
                        <ListItemIcon>
                            <BiStats />
                        </ListItemIcon>
                        <ListItemText primary={"Statistiques"} />
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem key={7} disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <AiOutlinePoweroff />
                        </ListItemIcon>
                        <ListItemText primary={"Deconnexion"} />
                    </ListItemButton>
                </ListItem>
            </List>
        </div>
    );

    return (
        <div>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: false,
                    }}
                    sx={{
                        display: { xs: "block", sm: "block", md: "none" },
                        "& .MuiDrawer-paper": { boxSizing: "border-box", width: "100%" },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { md: "none" } }}
                >
                    <AiOutlineMenu />
                </IconButton>
                <IconButton
                    color="inherit"
                    aria-label=""
                    edge="end"
                    sx={{ mr: 2, display: { md: "none" } }}
                >
                    <AiOutlinePoweroff />
                </IconButton>
            </Toolbar>
            {component === "adherent" ? (
                <AdherentUI />
            ) : component === "parent" ? (
                <ParentUI />
            ) : component === "entraineur" ? (
                <EntraineurUI />
            ) : component === "categorie" ? (
                <CategorieUI />
            ) : component === "payement" ? (
                <PayementUI />
            ) : component === "calendrier" ? (
                <CalendrierUI />
            ) : component === "statistic" ? (
                <StatisticUI />
            ) : (
                "welecome to the dashboard"
            )}
        </div>
    );
}

export default Content;
