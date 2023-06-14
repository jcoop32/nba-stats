var express = require('express');
var router = express.Router();

const playersPlayoffCtrl = require('../controllers/players')

/* GET users listing. */
router.get('/', playersPlayoffCtrl.index)

router.get('/:id', playersPlayoffCtrl.show)

module.exports = router;
