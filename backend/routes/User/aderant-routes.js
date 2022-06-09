const express = require ("express")
const {signup}=require('../../controllers/User/aderant-controller')



const routerAderant=express.Router()

routerAderant.get('/fcb',(req,res,next)=>{
    res.send("FCB")
})


routerAderant.post('/signup',signup)

module.exports=routerAderant