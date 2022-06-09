// Create Server And Connecting Application With MongoDB Database

const express =require('express')
const mongoose=require('mongoose');
const app=express() ;
const cors = require('cors');

const routerAderant=require("./routes/User/aderant-routes");

const db = 'mongodb+srv://fcb:fcb123@cluster0.k1qp3.mongodb.net/?retryWrites=true&w=majority'

mongoose
.connect(db)
.then(()=> {
app.listen(5000) ;
console.log("Data Base FCB Is Connected Listening to Localhost 5000")})
.catch ((error)=>console.log(`Data Base FCB Not Connected`))


app.use(cors())
app.use(express.json())
app.use("/aderant",routerAderant)


