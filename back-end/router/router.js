const express = require('express')
const { GetIT, CreateIT, ReadIT, UpdateIT, DeleteIT } = require('../Controller/Controller')
const { SignUp } = require('../Controller/AuthController')


const router =express.Router()

router.get('/get', GetIT)
router.post('/create', CreateIT)
router.get('/read/:id', ReadIT)
router.put('/update/:id', UpdateIT)
router.delete('/delete/:id', DeleteIT)




module.exports = router