const Auth = require("../Model/Auth");
const bcrypt = require('bcrypt')
const JWT = require("jsonwebtoken")

const AuthSignUp = async(req,res) =>{
    try {
        const {email , password} = req.body 
        const extingUser = await Auth.findOne({email})
        if(extingUser){
            res.status(200).send({
                success:true ,
                message:"user Is defaind"
            })
        }
        
        const hashpassword = await bcrypt.hash(password , 10)

        const result = await Auth.create({
            email : email ,
            password:hashpassword
        })

        const token = JWT.sign({
            email : result.email ,
            id : result._id
        },process.env.JWT)

        res.status(200).send({
            success:true, 
            message:"user SignUp Successfully",
            token 
        })
    } catch (error) {
        res.status(200).json({
            success:false,
            message:"user Login Not successfully "
        })
    }
}



const AuthSign = async (req, res) =>{
    try {
        const {email , password} = req.body
        const extingUser = await Auth.findOne({email})
        if(!extingUser){
            return res.status(400).send({
                success:false,
                message:"user Login Successfully"
            })
        }


        const matchPassword  = await bcrypt.compare(
            password,
            extingUser.password
        )

        if(!matchPassword){
            return res.status(400).send({
                success:false,
                message:"user No Login "
            })
        }

        const token = JWT.sign({
            email : extingUser.email ,
            id: extingUser._id
        },process.env.JWT)
        
        res.status(200).send({
            success:true,
            message:"user Login Successfully",
            token,
            
        })
    } catch (error) {
     res.status(404).send({
        success:false,
        message:"404 Error"
     })
    }
}







module.exports = {AuthSignUp, AuthSign}
