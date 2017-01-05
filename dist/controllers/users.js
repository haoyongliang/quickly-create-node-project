'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _user = require('../mapper/user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {

  getAllUsers: function getAllUsers(req, res, next) {
    var data = [];
    console.log(111);
    _user2.default.findAll().then(function (result) {
      for (var i = 0, usr; usr = result[i++];) {
        data.push(usr);
        console.log('nae=' + usr.user_name + ', password=' + usr.user_password);
      }

      res.json({
        success: true,
        result: {
          list: data
        }
      });
    }).then(function (err) {
      throw err;
    });
  }
};