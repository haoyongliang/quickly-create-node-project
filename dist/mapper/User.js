'use strict';

var _sequelize = require('../sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

var _sequelize3 = require('sequelize');

var _sequelize4 = _interopRequireDefault(_sequelize3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var User = _sequelize2.default.define('t_user', {
  user_name: _sequelize4.default.STRING,
  user_password: _sequelize4.default.STRING
});

User.findAll().then(function (result) {
  console.log("query all users");
  for (var i = 0, usr; usr = result[i++];) {
    console.log('nae=' + usr.user_name + ', password=' + usr.user_password);
  }
});