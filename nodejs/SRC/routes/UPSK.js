var express = require('express');
const router = express.Router();

const UPSKController = require('../app/controllers/UPSKController');
router.post('/upsk', UPSKController.upSK);
router.get('/', UPSKController.index);

module.exports = router;
