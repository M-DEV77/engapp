// 0001 => register


const router = require('express').Router()
const UserController = require('../controllers/UserController')
router.post('/0001',UserController.register);
router.post('/0002',UserController.login);

module.exports = router;