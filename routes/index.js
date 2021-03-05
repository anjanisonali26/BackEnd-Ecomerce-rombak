const express = require('express');
const approute = express.Router()
const userRoutes = require('./customer')
const productRoutes = require('./product')
const categoryRoutes = require('./category')
const orderRoutes = require('./order')
const addressRoutes = require('./address')
const checkoutRoutes = require('./checkout')

const errorHandlers = require('../middlewares/errorHandlers')

approute.use('/user', userRoutes)
approute.use('/admin',productRoutes)
approute.use('/admin',categoryRoutes)
approute.use('/user',orderRoutes)
approute.use('/user',addressRoutes)
approute.use('/user',checkoutRoutes)
approute.use(errorHandlers)

module.exports = approute