  
const express = require('express')
const router = express.Router()
const authentication = require('../middlewares/authentication')
const addressController = require('../controllers/addressController')

router.post('/address',authentication,addressController.createAdress)
router.get('/address',authentication,addressController.getAdress)
router.put('/address/update',authentication,addressController.updateAdress)
router.delete('/address',authentication,addressController.deleteAddress)

module.exports = router