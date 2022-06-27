const express = require ("express")
const {signup}=require('../../controllers/User/aderant-controller')
const {register} =require ('../../controllers/User/User-controller')


const routerAderant=express.Router()

const routerUser=express.Router()

routerAderant.get('/fcb',(req,res,next)=>{
    res.send("FCB")
})



routerUser.post("/register",register)

routerAderant.post('/signup',signup)

module.exports=routerAderant
module.exports=routerUser