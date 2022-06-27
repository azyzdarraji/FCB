const express = require ("express")

const {Register,Login,Test,Admin}=require("../../controllers/User/User-controller")
const {ROLES,inRole} =require("../../security/Rolemiddleware")
const passport=require("passport");
const routerUser=express.Router();


routerUser.post('/register',Register);
routerUser.post('/login',Login)


// Test router

routerUser.get('/test',Test)
routerUser.get('/admin',Admin)




module.exports=routerUser
