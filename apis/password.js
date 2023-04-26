const express = require('express')
const router = express.Router()
const passwordService = require('../services/password')
const userService = require('../services/users')
const userModel = require('../models/users')

const UserService = new userService(userModel)
const PasswordService = new passwordService(UserService)

router.post('/', async(req,res)=>{
    const {email} = req.body
    try {
        await PasswordService.confirm(email)
        res.send({
            message: 'Usuario encontrado'
        })
    } catch (error) {
        return res.status(403).send({
            message: 'Usuario no encontrado:('
        })
    }
})


router.put('/', async(req,res)=>{
    const {email,password, newPassword} = req.body

    try {
        
        await PasswordService.change(email,password,newPassword)
        res.send({
            message: 'Contraseña actualizada'
        })

    } catch (error) {
        if (error.message === "La contraseña actual no es correcta") {
            return res.status(401).send({
                message: 'La contraseña actual no es correcta'
            })
        } else {
            return res.status(500).send({
                message: 'Error al actualizar la contraseña'
            })
        }
    }
})

module.exports = router

