const express = require('express')
const router = express.Router()
const userRouter = require('./user')
const authRouter = require('./auth')
const authMiddleware = require('../middleware/authorization')
const registerRouter = require('./register')
// password
const passwordRouter = require('./password')
//products
const productsRouter = require('./products')
router.use('/products', productsRouter)

router.use('/auth', authRouter)
router.use('/register', registerRouter)

router.use('/change', passwordRouter)

router.use(authMiddleware)
router.use('/users', userRouter)


module.exports = router