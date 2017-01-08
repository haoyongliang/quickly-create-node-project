'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  appenders: [{ type: 'console' }, {
    type: 'file',
    filename: 'logs/access.log',
    maxLogSize: 1024,
    backups: 4,
    category: 'normal'
  }],
  replaceConsole: true
};