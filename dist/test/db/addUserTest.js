'use strict';

var _userModel = require('./../../model/userModel');

var _userModel2 = _interopRequireDefault(_userModel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _userModel2.default({
  name: 'angularbaby',
  password: '123456'
}).save().then(function () {
  console.log("插入成功");
});