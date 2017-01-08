'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _userMapper = require('../mapper/userMapper');

var _userMapper2 = _interopRequireDefault(_userMapper);

var _logger = require('../logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var logger = (0, _logger2.default)('users');

exports.default = {

  getAllUsers: function getAllUsers(req, res, next) {
    logger.debug('This is getAllUsers');
    console.log('This is getAllUsers');
    var data = [1, 2, 3];

    res.json({
      success: true,
      result: {
        list: data
      }
    });
  }
};