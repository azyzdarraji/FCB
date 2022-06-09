// Create Aderant Schema 


const mongoose =require ("mongoose");
const Schema=mongoose.Schema ;
const aderantSchema= new Schema ({
    name:{ 
        type:String,
        default:'aziz'
    },
    dateNaissance:{
        type:Date,
        default:Date.now()
    },
    email:{
        type:String,
        required:true
    },
    telParent:{
        type:String,
        required:true,
    },
    paiment:{ 
       type:Boolean,
       default:true
    },
    password: {
        type:String,
        required:true,
        minlength:6
    }

})
module.exports=mongoose.model('Aderant',aderantSchema)