const mongoose = require('mongoose')

const customSchema = new mongoose.Schema({
    name:{
        type :String,
        required:[true,"Please Provide a name"],

    },
    email :{
        type:String,
        required :true,
        unique:true,
    },
    password :{
        type:String,
        required:true,
        minlength:6,
    },
});

module.exports = mongoose.model("custom",customSchema);