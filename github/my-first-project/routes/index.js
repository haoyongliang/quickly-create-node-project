var express = require('express');
var router = express.Router();
var handler = require('../controllers/index')

/* GET home page. */
router.get('/', handler.homePage);

module.exports = router;
