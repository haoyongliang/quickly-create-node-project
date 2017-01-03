'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _path = require('path');

exports.default = {
  viewPath: (0, _path.join)(__dirname, './../views'),
  publicPath: (0, _path.join)(__dirname, './../public'),
  staticPath: (0, _path.join)(__dirname, './../static'),
  node_modulesPath: (0, _path.join)(__dirname, './../node_modules'),
  DB_HOST: "127.0.0.1",
  DB_USER: "root",
  DB_PASSWORD: "root",
  DB_DATABASE: "itcast",
  DB_PORT: "3306",
  DB_DIALECT: "mysql"
};