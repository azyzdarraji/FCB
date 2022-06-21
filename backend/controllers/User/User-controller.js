const UserModel = require("../../model/User/User");
const ValidateRegister=require("../../validation/Register")
const ValidateLogin=require("../../validation/Login")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcryptjs")



const Register=async(req,res)=> {
    const {errors,isValid}=ValidateRegister(req.body)
 try {
   if (!isValid){
       res.status(404).json(errors)
   }
   else 
   {

    UserModel.findOne({email:req.body.email}).then (async(exist)=>{
        if (exist) {
            errors.email="email deja existe "
            res.status(404).json(errors)
        } else {


     const hash = bcrypt.hashSync(req.body.password, 10)//hashed password
     req.body.password = hash;
       
    req.body.role="USER"
    await UserModel.create(req.body)
    res.status(200).json({message:" Register success"})
        }
    })
   }
 } catch (error) {
     res.status(500).json(error.message)
 }
}

const Login=async(req,res)=>{
    const {errors,isValid}=ValidateLogin(req.body)


    try {
      if (!isValid) {
        res.status(404).json(errors)
      }else{
        await UserModel.findOne({email:req.body.email})
        .then(user=>{
            if (!user) {
                errors.email= " User Not found with this Email"
                res.status(404).json(errors.email)
            }else {
                bcrypt.compare(req.body.password,user.password)
                .then(isMatch=>{

                    if(!isMatch){
                        errors.password="Incorrect Password"
                        res.status(404).json(errors)
                    }
                    else {
                        var token = jwt.sign({ 
                            id:user._id, 
                            name:user._id,
                            email:user.email,
                            role:user.role 
                          }, process.env.PRIVATE_KEY,{ expiresIn: '1h'});
                          
                          res.status(200).json({
                              message:'login success' ,
                              token:token
                            })
                                        }

                })
            }
        })
      }
    } catch (error) {
        res.status(500).json(error.message)

    }

}

const Test=(req,res)=>{
 
// verify a token symmetric
// jwt.verify(req.rawHeaders[1].split('Bearer ')[1],process.env.PRIVATE_KEY, function(err, decoded) {
//     res.send(decoded) // bar
//   });

res.send('welcome User ')
}


const Admin=(req,res)=>{
  res.send("welcome Admin")
}

module.exports={Register,Login,Test,Admin}