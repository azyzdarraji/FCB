// Create Server And Connecting Application With MongoDB Database

const express =require('express')
const mongoose=require('mongoose');
const app=express() ;
const cors = require('cors');
require("dotenv").config();

const routerAderant=require("./routes/User/aderant-routes");

const routerUser=require('./routes/User/User-routes')
const PORT=process.env.PORT
const passport=require("passport");


// Passport 
app.use(passport.initialize())
require('./security/passport')(passport)

//  connected to data base 
mongoose
.connect(process.env.MONGO_URI)
.then(()=> {
app.listen(5000) ;
console.log("Data Base FCB Is Connected Listening to Localhost 5000")})
.catch ((error)=>console.log(`Data Base FCB Not Connected`))


app.use(cors())
app.use(express.json())
app.use("/aderant",routerAderant)
app.use("/user",routerUser)

 