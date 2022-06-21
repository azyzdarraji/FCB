const Aderant=require('../../model/User/Aderant')


const signup=async(req,res,next)=>{
      
    const {name,email,password,telParent,paiment}=req.body ;
    let existingAderant ;
    
    try {

        existingAderant=await Aderant.findOne({email:email});
 
        
    } catch (error) {
        console.log(error)
    }
     if (existingAderant) {
         return res.status (400).json ({message:"user already exists ! login Instead "}) 
     }

    const aderant= new Aderant ({

        name,
        email,
        // dateNaissance:req.body.dateNaissance,
        password,
        telParent,
        paiment,
    })
   
    try {
        await aderant.save() ;

    } catch(error) {
        console.log(`Error signup Aderant ${error}`)
    }
    return  res.status(201).json({message:aderant})



}

exports.signup=signup;