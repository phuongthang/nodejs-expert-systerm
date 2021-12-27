const express = require('express');
const router = express.Router();
const userController = require('../app/controllers/UserController');

router.get('/', userController.index);
router.post('/', userController.store);

module.exports = router;