const express = require('express');
const router = express.Router();

const customerController = require('../controllers/customerController');

router.get('/', customerController.list);
router.post('/addCompra',customerController.saveCompra );
router.post('/add',customerController.save );

module.exports = router;