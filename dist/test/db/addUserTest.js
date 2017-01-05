"use strict";

var _User = require("./../../mapper/User");

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_User2.default.sync().then(function () {
  return _User2.default.create({
    name: "张三",
    password: "123456"
  });
}).then(function (u) {
  console.log("插入数据成功，信息如下");
  console.log(u.get('name'));
  console.log(u.get('password'));
}).catch(function (err) {
  console.log('插入数据失败');
});