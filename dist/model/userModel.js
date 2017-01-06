'use strict';

Object.defineProperty(exports, "__esModule", {
		value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _userMapper = require('./../mapper/userMapper');

var _userMapper2 = _interopRequireDefault(_userMapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UserModel = function () {
		function UserModel(user) {
				_classCallCheck(this, UserModel);

				this.id = user.id;
				this.name = user.name;
				this.password = user.password;
		}

		/*
  普通方法
   */


		_createClass(UserModel, [{
				key: 'save',
				value: function save() {
						var _this = this;

						return _userMapper2.default.sync().then(function () {
								return _userMapper2.default.create(_this);
						});
				}

				/*
     *静态方法
     */

		}], [{
				key: 'findAll',
				value: function findAll() {
						return _userMapper2.default.sync().then(function () {
								return _userMapper2.default.findAll();
						});
				}
		}]);

		return UserModel;
}();

exports.default = UserModel;