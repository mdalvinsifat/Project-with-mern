const express = require('express')
const {AuthSignUp, AuthSign} = require('../Controller/AuthController')


const auth = express.Router()

auth.post("/sign", AuthSignUp)
auth.post("/signIn", AuthSign)


module.exports = auth