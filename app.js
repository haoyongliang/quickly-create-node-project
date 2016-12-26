var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var nunjucks = require('nunjucks');

var index = require('./routes/index');
var users = require('./routes/users');
var config = require('./config');

var app = express();

// 配置 NunJucks 模板引擎
const env = nunjucks.configure(config.viewPath, {
  noCache: true
})
env.express(app)

//配置网站favicon.ico图标,所在目录/public/images/favicon.ico
//app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

//配置日志
app.use(logger('dev'));

/*
配置post请求体解析器
客户端提交方式：一种是查询字符串普通get，一种是enctype="application/json"格式提交
将解析到的post请求体作为一个对象挂在给req.body
就可以通过req.body.表单属性名 获取值
 */
app.use(bodyParser.json());//以JSON格式提交表单是HTML5中一种很新的规范
app.use(bodyParser.urlencoded({ extended: false }));

//配置cookie解析器
app.use(cookieParser());

//配置静态资源目录
app.use(express.static('/public',path.join(__dirname, 'public')));
app.use(express.static('/node_module',path.join(__dirname, 'node_module')));
app.use(express.static('/static',path.join(__dirname, 'static')));

//配置路由
app.use('/', index);
app.use('/users', users);

//配置404页面
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

//配置错误处理页面
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error.html');
});



module.exports = app;
