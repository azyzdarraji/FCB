import{Typography, Toolbar, ListItemText, ListItemIcon, ListItemButton, ListItem, List, IconButton, Drawer, Divider, CssBaseline, Box, AppBar} from '@mui/material'
import {IoMdFootball} from 'react-icons/io'
import {RiParentFill} from 'react-icons/ri'
import {GiWhistle} from 'react-icons/gi'
import {BiCategoryAlt,BiStats} from 'react-icons/bi'
import {AiOutlineCalendar, AiOutlinePoweroff} from 'react-icons/ai'
import {MdOutlinePayments} from 'react-icons/md'
const drawer = (
    <div>
        
      <Toolbar />
      
      <Divider />     
      <List>
      <ListItem key={0} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <IoMdFootball />
              </ListItemIcon>
              <ListItemText primary={"Gestion des adhérents"} />
            </ListItemButton>
          </ListItem>
          <ListItem key={1} disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <RiParentFill />
              </ListItemIcon>
              <ListItemText primary={"Gestion des parents"} />
            </ListItemButton>
          </ListItem>
          <ListItem key={2} disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <GiWhistle />
              </ListItemIcon>
              <ListItemText primary={"Gestion des entraineurs"} />
            </ListItemButton>
          </ListItem>
          <ListItem key={3} disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <BiCategoryAlt />
              </ListItemIcon>
              <ListItemText primary={"Gestion des catégories"} />
            </ListItemButton>
          </ListItem>  
          <ListItem key={4} disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <MdOutlinePayments />
              </ListItemIcon>
              <ListItemText primary={"Gestion des payements"} />
            </ListItemButton>
          </ListItem> 
          <ListItem key={5} disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <AiOutlineCalendar />
              </ListItemIcon>
              <ListItemText primary={"Gestion des calendriers"} />
            </ListItemButton>
          </ListItem> 
          <ListItem key={6} disablePadding>
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
  export default drawer;