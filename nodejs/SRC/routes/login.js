var express = require('express');
const router = express.Router();

const loginController = require('../app/controllers/loginController');
router.post('/upload', loginController.upload);
router.get('/', loginController.index);

module.exports = router;
