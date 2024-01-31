
const mongoose = require('../db/conn');
const {Schema} = mongoose;
const User = mongoose.model(
    'User',
    new Schema({
         /* para uso posterior endereço detalhado
        addressStreet:{  
            type:String,
            required:true
        },   
        addressNumber:{   
            type:String,
            required:true
        },
        addressCity:{    
            type:String,
            required:true
        },
        addressState:{    
            type:String,
            required:true
        },
        addressCountry:{    
            type:String,
            required:true
        },
        zipCod:{          
            type:String,
            required:true
        },*/
        name:{
            type:String,
            required:true
        },
        lastName:{
            type:String,
            required:true
        },
        professionType:{ 
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        phoneWhatsApp:{    
            type:String,
            required:true
        },
        image:{
            type:String,
        },
        password:{
            type:String,
            required:true
        },
    },
    
    {timestamps:true},
    
    ),
);
module.exports = User;