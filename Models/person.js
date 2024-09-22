const mongoose = require('mongoose');


// define  the person  schema


const personSchema =new mongoose.Schema({

    //name is a field

    name:{
//visit mongoose for more parameters or permited schemaTypes
//It helps to handle erros because mongoose handle all errors by thie rspective side
        type:String,
        required:true,

    },

    age:{
        type:Number
    },

    work:{

        type:String,
        enum:['chef','waiter','manager'],
        required:true,
    },

    mobile:{
        type:String,
        required:true,
    },

    email:{
        type:String,
        require:true,
        unique:true
    },

address:{
    type:String,
},

salary:{

    type:Number,
    required:true,
}
});

//create person model

const person = mongoose.model('person',personSchema);
module.exports=person;
