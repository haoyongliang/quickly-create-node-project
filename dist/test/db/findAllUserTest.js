'use strict';

var _userModel = require('./../../model/userModel');

var _userModel2 = _interopRequireDefault(_userModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_userModel2.default.findAll().then(function (data) {
  data.forEach(function (element, index) {
    var user = element.dataValues;
    console.log(user.id + '\t' + user.name + '\t' + user.createdAt + '\t' + user.updatedAt);
  });
});