import * as React from 'react';
import{Typography, Toolbar, ListItemText, ListItemIcon, ListItemButton, ListItem, List, IconButton, Drawer, Divider, CssBaseline, Box, AppBar} from '@mui/material'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {IoMdFootball} from 'react-icons/io'
import {RiParentFill} from 'react-icons/ri'
import {GiWhistle} from 'react-icons/gi'
import {BiCategoryAlt,BiStats} from 'react-icons/bi'
import {AiOutlineCalendar, AiOutlinePoweroff} from 'react-icons/ai'
import {MdOutlinePayments} from 'react-icons/md'
//import drawer from "./SidebarComponents/DrawerElements"
const drawerWidth = 240;
function Sidebar(props) {
    console.log(props.mobileOpen);
    const drawer = (
        <div>
            
          <Toolbar />
          
          <Divider />     
          <List>
          <ListItem key={0} disablePadding onClick={()=>props.handleComponent("adherent")}>
                <ListItemButton>
                  <ListItemIcon>
                    <IoMdFootball />
                  </ListItemIcon>
                  <ListItemText primary={"Gestion des adhérents"} />
                </ListItemButton>
              </ListItem>
              <ListItem key={1} disablePadding onClick={()=>props.handleComponent("parent")}>
                <ListItemButton>
                  <ListItemIcon>
                  <RiParentFill />
                  </ListItemIcon>
                  <ListItemText primary={"Gestion des parents"} />
                </ListItemButton>
              </ListItem>
              <ListItem key={2} disablePadding onClick={()=>props.handleComponent("entraineur")}>
                <ListItemButton>
                  <ListItemIcon>
                  <GiWhistle />
                  </ListItemIcon>
                  <ListItemText primary={"Gestion des entraineurs"} />
                </ListItemButton>
              </ListItem>
              <ListItem key={3} disablePadding onClick={()=>props.handleComponent("categorie")}>
                <ListItemButton>
                  <ListItemIcon>
                  <BiCategoryAlt />
                  </ListItemIcon>
                  <ListItemText primary={"Gestion des catégories"} />
                </ListItemButton>
              </ListItem>  
              <ListItem key={4} disablePadding onClick={()=>props.handleComponent("payement")}>
                <ListItemButton>
                  <ListItemIcon>
                  <MdOutlinePayments />
                  </ListItemIcon>
                  <ListItemText primary={"Gestion des payements"} />
                </ListItemButton>
              </ListItem> 
              <ListItem key={5} disablePadding onClick={()=>props.handleComponent("calendrier")}>
                <ListItemButton>
                  <ListItemIcon>
                  <AiOutlineCalendar />
                  </ListItemIcon>
                  <ListItemText primary={"Gestion des calendriers"} />
                </ListItemButton>
              </ListItem> 
              <ListItem key={6} disablePadding onClick={()=>props.handleComponent("statistic")}>
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
    <div><Box
    component="nav"
    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    aria-label="mailbox folders"
  >
    <Drawer
      elevation={5}
      variant="permanent"
      sx={{
        display: { xs: 'none', sm: 'none',md:'block' },
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '20%'},
      }}
      open
    >
      {drawer}
    </Drawer>
  </Box>
  </div>
  )
}

export default Sidebar