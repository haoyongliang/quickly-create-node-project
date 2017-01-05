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
  routePath: (0, _path.join)(__dirname, 'routes/**/*.js'),

  serverPort: "5000",

  proxyPrefix: '/api',
  proxyTarget: 'http://127.0.0.1:3000',

  DB_HOST: "127.0.0.1",
  DB_USER: "root",
  DB_PASSWORD: "root",
  DB_DATABASE: "dbname",
  DB_PORT: "3306",
  DB_DIALECT: "mysql"
};