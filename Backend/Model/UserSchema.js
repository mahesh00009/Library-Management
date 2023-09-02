

const {Schema, model } = require("mongoose")


let UserSchema = new Schema({
    name : {
        type  : String, 
        required : true
    }, 
    phone : {
        type : Number, 
        required : true
    }, 
    email: {
        type : String,
        required : true
    },

    password : {
        type : String, 
        required : true
    },
    address : {
        type : String,
        required : true
    }, 
    college : {
        type : String, 
        required : true
    }


})

let UserModal = new model("LibraryUsers", UserSchema)

module.exports = UserModal;