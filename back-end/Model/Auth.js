const mongoose = require('mongoose')


const AuthSchema = new mongoose.Schema({
    email:{
        type:String
    },
    password:{
        type:String
    }
    
})

const Auth = new mongoose.model("Auth",AuthSchema)

module.exports = Auth 





