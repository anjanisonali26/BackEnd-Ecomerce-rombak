const express = require('express')
const router = express.Router()
const authentication = require('../middlewares/authentication')
const customerController = require('../controllers/customerController')


router.post('/signup', customerController.register);
router.post('/signin', customerController.login);
router.get('/',authentication,customerController.getCustomer);
router.put('/update',authentication,customerController.updateCustomer);


module.exports = router;