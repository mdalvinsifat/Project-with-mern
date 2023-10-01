const mongoose = require('mongoose')


const CreateCourse = new mongoose.Schema({
    name:{
        type:String
    },
    img:{
        type:String
    },

    title:{
        type:String
    },


    skile:{
        type:String
    },

    skile4:{
        type:String
    },

    skile3:{
        type:String
    },
    skile2:{
        type:String
    },
    skile1:{
        type:String
    },
})


const ITcourse = mongoose.model("course",CreateCourse )

module.exports = ITcourse