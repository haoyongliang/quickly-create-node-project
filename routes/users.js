var express = require('express');
var router = express.Router();
var handler = require('../controllers/users');

/* GET users listing. */
router.get('/add', handler.add);

module.exports = router;
              