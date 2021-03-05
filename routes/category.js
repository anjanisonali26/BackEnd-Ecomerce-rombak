const express = require('express')
const categoryData = express.Router()
const adminAuth = require('../middlewares/authorization')
const categoryController = require('../controllers/categoryController')

categoryData.post('/category/create',adminAuth,categoryController.createCategory)
categoryData.get('/category/:categoryID',categoryController.getCategory)
categoryData.get('/category/',categoryController.listCategory)
categoryData.put('/category/update/:categoryID',adminAuth,categoryController.updateCategory)
categoryData.delete('/category/:categoryID',adminAuth,categoryController.deleteCategory)

module.exports = categoryData