'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sequelize = require('./sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

var _sequelize3 = require('sequelize');

var _sequelize4 = _interopRequireDefault(_sequelize3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserMapper = _sequelize2.default.define('t_user', {
  id: { type: _sequelize4.default.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: _sequelize4.default.STRING, allowNull: false, field: "user_name" },
  password: { type: _sequelize4.default.STRING, allowNull: false, field: "user_password" },
  createdAt: { type: _sequelize4.default.DATE, allowNull: false, field: "createdAt", defaultValue: _sequelize4.default.NOW },
  updatedAt: { type: _sequelize4.default.DATE, allowNull: false, field: "updatedAt", defaultValue: _sequelize4.default.NOW }
});

exports.default = UserMapper;