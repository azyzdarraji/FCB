import { Grid } from '@mui/material'
import React,{useState} from 'react'
import Content from '../DashboardComponents/Content'
import Sidebar from '../DashboardComponents/Sidebar'

function Dashboard() {
    const [component,setComponent]=useState("calendrier");
    const handleComponent=(c)=>{
        setComponent(c);
    }
  return (
    <>
    <Grid container >
        <Grid item  md={3}>
            <Sidebar handleComponent={handleComponent} />
        </Grid>
        <Grid item xs={12} sm={12} md={9}>
            <Content component={component} />
        </Grid>
    </Grid>

    </>
  )
}

export default Dashboard