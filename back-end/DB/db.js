const mongoose = require("mongoose")




const ConnectDB = async(req, res)=>{

    try {
        const result =   await mongoose.connect('mongodb://127.0.0.1:27017/ITCreate')
        console.log("Mongoose Connected")

        
    } catch (error) {
        console.log(error)
    }

}

module.exports = ConnectDB