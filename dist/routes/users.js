'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _users = require('../controllers/users');

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
router.prefix = '/api/users';

/* GET users listing. */
router.get('/users', _users2.default.getAllUsers);
router.get('/data', function (req, res, next) {});
//router.post('/users/:id', handler.getAllUsers);
//router.put('/users/:id', handler.getAllUsers);
//router.delete('/user/:id', handler.getAllUsers);

exports.default = router;