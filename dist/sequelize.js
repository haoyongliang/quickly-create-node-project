"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sequelize = require("sequelize");

var _sequelize2 = _interopRequireDefault(_sequelize);

var _config = require("./config");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sequelize = new _sequelize2.default(_config2.default.DB_DATABASE, _config2.default.DB_USER, _config2.default.DB_PASSWORD, {
  host: _config2.default.DB_HOST,
  dialect: _config2.default.DB_DIALECT
});

exports.default = sequelize;