'use strict';

var mysql = require('mysql');

var config = require('./config');

var pool = mysql.createPool({
    host: config.DB_HOST,
    user: config.DB_USER,
    password: config.DB_PASSWORD,
    database: config.DB_DATABASE,
    port: config.DB_PORT
});

//查询相关配置
var query = function query(sql, callback) {
    pool.getConnection(function (err, conn) {
        if (err) {
            callback(err, null, null);
        } else {
            conn.query(sql, function (qerr, vals, fields) {
                //释放连接    
                conn.release();
                //事件驱动回调    
                callback(qerr, vals, fields);
            });
        }
    });
};

module.exports.query = query;
module.exports.rows2data = function (rowDatas) {
    for (var i = 0; i < rowsDatas.length; i++) {}
};