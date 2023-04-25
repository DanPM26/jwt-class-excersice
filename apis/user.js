const express = require('express')
const router = express.Router()
const userModel = require('../models/users')
const userService = require('../services/users')

const UserService = new userService(userModel)

//Parte del Login para poder acceder 
router.get('/me', async(req,res)=>{
const sessionUser = req.user

if(!sessionUser){
    return res.status(403).send({
        message: 'Tu no deberías estar aquí'
    })
}

res.send({
    username: sessionUser.username,
    email: sessionUser.email
})
})

router.post('/', async(req,res)=>{
 const body = req.body
 const user = await UserService.create(body)
 res.status(201).send(user)
})


module.exports = router