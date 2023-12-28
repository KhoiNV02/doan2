var express = require('express');
const router = express.Router();

const CapNhatController = require('../app/controllers/CapNhatController');

router.get('/nho', CapNhatController.show);
router.get('/', CapNhatController.index);

module.exports = router;
