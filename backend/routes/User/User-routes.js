const express = require ("express")

const {Register,Login,Test,Admin}=require("../../controllers/User/User-controller")
const {ROLES,inRole} =require("../../security/Rolemiddleware")
const passport=require("passport");
const routerUser=express.Router();


routerUser.post('/register',Register);
routerUser.post('/login',Login)


// Test router

routerUser.get('/test', passport.authenticate("jwt",{session:true}),
inRole(ROLES.ADMIN),Test)
routerUser.get('/admin',Admin)




module.exports=routerUser
