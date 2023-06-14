var express = require('express');
var router = express.Router();

const playersCtrl = require('../controllers/players')

/* GET users listing. */
router.get('/', playersCtrl.index)

module.exports = router;
