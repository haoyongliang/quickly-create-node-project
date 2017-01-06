'use strict';

var _user = require('./../../model/user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// User.sync()
//   .then(()=>{
//   return User.create({
//     name:"张三",
//     password:"123456"
//   })
// }).then(u=> {
//   console.log("插入数据成功，信息如下");
//   console.log(u.get('name'));
//   console.log(u.get('password'));
// }).catch(err=> {
//   console.log('插入数据失败');
// });


new _user2.default({
  name: 'jack',
  password: '123456'
}).save().then(function () {
  console.log("插入成功");
});