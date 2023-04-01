const express = require('express')
const router = express.Router()
const userRouter = require('./user')
const authRouter = require('./auth')
const authMiddleware = require('../middleware/authorization')

router.use('/auth', authRouter)

router.use(authMiddleware)
router.use('/users', userRouter)

module.exports = router