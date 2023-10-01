const ITcourse = require ("../Model/model")

  
 const  GetIT = async(req,res) =>{
    try {

        const data = await ITcourse.find()
        res.status(200).send({
            success:true,
            message:"successfully", 
            data
        })
        
    } catch (error) {

res.status(404).send({
    success:false,
    message:"404 error"
})
    }
}



 const  CreateIT = async(req,res) =>{
    try {

        const data = await ITcourse.create(req.body)
        res.status(200).send({
            success:true,
            message:"successfully",
            data
        })
        
    } catch (error) {

res.status(404).send({
    success:false,
    message:"404 error"
})
    }
}






 const  ReadIT = async(req,res) =>{
    try {
        const id = req.params.id
        const data = await ITcourse.findById(id)
        res.status(200).send({
            success:true,
            message:"successfully",
            data
        })
        
    } catch (error) {

res.status(404).send({
    success:false,
    message:"404 error"
})
    }
}






 const  UpdateIT = async(req,res) =>{
    try {
const id = req.params.id 
const courses = req.body 
        const data = await ITcourse.findByIdAndUpdate( id, courses , {new:true})
        res.status(200).send({
            success:true,
            message:"successfully",
            data
        })
        
    } catch (error) {

res.status(404).send({
    success:false,
    message:"404 error"
})
    }
}






 const  DeleteIT = async(req,res) =>{
    try {
const id = req.params.id
        const data = await ITcourse.findByIdAndDelete(id)
        res.status(200).send({
            success:true,
            message:"successfully",
            data
        })
        
    } catch (error) {

res.status(404).send({
    success:false,
    message:"404 error"
})
    }
}


module.exports = {GetIT, CreateIT, ReadIT, UpdateIT,DeleteIT}





