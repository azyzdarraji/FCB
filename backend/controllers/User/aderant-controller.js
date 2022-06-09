const Aderant=require('../../model/User/Aderant')


const signup=async(req,res,next)=>{

    const aderant= new Aderant ({

        name:req.body.name,
        email:req.body.email,
        // dateNaissance:req.body.dateNaissance,
        password:req.body.password,
        telParent:req.body.telParent,
        paiment:req.body.paiment
    })

    try {
        await aderant.save() ;
        console.log(aderant);
        return  res.status(201).json({message:aderant})

    } catch(error) {
        console.log(`Error sigup Aderant ${error}`)
    }


}

exports.signup=signup;