#构建node项目

## github地址
	https://github.com/haoyongliang/quickly-create-node-project.git
---
## 创建最基本的node项目

### 1.全局安装express

```bash
npm install -g express
```

### 2.全局安装express-generator

```bash
npm install -g express-generator
```
(输入express --help 测试是否安装成功)

### 3.进入到工程父目录

```bash
cd [工程父目录名]
```

### 4.快速创建工程结构

```javascript
express -t [模板引擎名：ejs/jade] [工程名]
```
我一般是用express -e mypro

### 5.修改package.json,将里面的ejs依赖删除

### 6.安装node_modules

	执行命令 node install
	或者执行 npm install--production,只安装dependencies,不安装devdependencies

### 7. 安装supervisor

项目代码修改或者down机需要重启服务器，我使用的是supervisor，还可以用nodemon
```bash
npm install --save supervisor
```
修改package.json
```bash
"start": "supervisor ./bin/www"
```
### 8. 模板引擎和模板的修改

1. 安装nunjucks模板引擎
```bash
npm install --save nunjucks
```

2. 在项目根目录添加config.js,内容如下
```bash
var path = require('path')

module.exports = {
  viewPath: path.join(__dirname, 'views')
}

```

3. 替换app.js中的模板引擎，将ejs修改为nunjucks

```javascript
var nunjucks = require('art-template');
// 配置使用 NunJucks 模板引擎
nunjucks.configure(config.viewPath, {
  autoescape: true,
  express: app,
  watch: true,
  noCache: false
})
```

4. 修改模板文件
	- 找到文件：views/index.ejs, views/error.ejs
	- 将文件后缀ejs修改为html
	- 将模板文件里面的<%= xx %>替换成{{  xxx}}

4. 修改涉及到模板渲染的js:app.js,router/index.js
	- 将其中的render("xxx")加后缀修改成render("xxx.html")


### 9. 修改路由
1. 在项目根目录(app.js所在目录)添加controllers目录，并在目录下添加index.js,用于存放路由的具体业务逻辑

```javascript
module.exports.homePage = (req, res, next) => {
	res.render('index.html',{title:'Express'});
}
```

2. 修改routes/indexs.js路由，引用controllers/index.js

```javascript
var express = require('express');
var router = express.Router();
var handler = require('../controllers/index')
/* GET home page. */
router.get('/', handler.homePage);
module.exports = router;
```


3. 去掉路由中的重复路径
在routes目录下有个user.js路由，该路由的配置信息可能是
```javascript
route.use('/user/add', xxxHandler);
route.use('/user/edit', xxxHandler);
```

通过观察发现，每行都有'/user' 比较麻烦，为了简化配置
我们需要修改路由
1. 在app.js中添加如下信息

```javascript
var user = require('./routes/user');
// 挂载用户路由
// 加上前缀，这样的话，user 中的路由就都必须是以 /user开头才行
app.use('/user',user);
```

2. 修改routes/user.js

```javascript
var express = require('express');
var router = express.Router();
route.use('/add', xxxHandler);
route.use('/edit', function(req, res, next) {
  res.send('add student');
});
module.exports = router;
```


### 10. 测试是否可以正常运行

访问 http://localhost:3000/users/add

---
## 升级node项目：代码规范，托管

### 1. 添加代码规范
项目根目录新建文件.editorconfig,内容如下

```bash
# http://editorconfig.org

root = true

# 对所有文件生效
[*]
charset = utf-8
# 缩进类型 可选值，space，tab
indent_style = space

# 缩进数量
indent_size = 2

# 换行符格式
end_of_line = lf

# 是否在最后一行添加换行
insert_final_newline = true
trim_trailing_whitespace = true

# 对后缀名为 md 的文件生效
[*.md]
trim_trailing_whitespace = false
```

### 使用github托管
- 新建.gitignore文件，将不需要托管的文件或文件夹添加进去，下面是我的配置信息
	+ node_modules
	+ .idea
	+ dist
- git init
- git add .
- git commit -m "第一次代码提交"
- git remote add origin gitUrl
- git push origin master

---
## 添加babel ES6转码器
### 1.安装ES6转码规则
```bash
npm install --save-dev babel-preset-es2015
```

### 2.在项目根目录添加.babelrc配置文件，内容如下

```bash
  {
    "presets": [
      "es2015"
    ],
    "plugins": []
  }
```

### 3.在项目中添加babel-cli工具，用于命令行转码
注意：只能使用npm,别使用npm install 安装包依赖，会报丢失模块错误,如果要使用cnpm安装，请全局安装babel-cli工具(参见阮一峰ES6)

```bash
npm install --save-dev babel-cli
```

### 4.修改package.json

```bash
{
  "devDependencies": {
    "babel-cli": "^6.0.0"
  },
  "scripts": {
    "build": "babel ./src -d ./dist"
  },
}
```

### 5.在项目跟目录新建src和dist目录，将bin,controllers,routers文件夹和app.js,config.js文件放入src目录,修改bin/www 添加后缀bin/www.js

### 6.运行 命令进行转码,测试安装是否顺利

```bash
npm run build
```

### 7.安装babel-register
- 安装
```bash
npm install --save-dev babel-register
```


### 8.在项目根目录新建index.js,内容如下

```bash
require('babel-register')
require('./src/bin/www')
```

### 9.配置package.json 中的scripts(执行命令)
- "prebuild","prestart" 可以不配置，如果网非常差，前提node_module安装完美

```bash
    "prebuild": "npm install"
    "build": "babel ./src -d ./dist",

    "predev": "npm install",
    "dev": "supervisor ./index",

    "prestart": "npm run build",
    "start": "supervisor ./dist/bin/www"
```
- 开发环境
  + npm install 安装依赖包
  + npm run build 编译代码
  + npm run dev 通过babel-register改写require命令

- 生成环境
  + npm install -production 安装依赖包
  + npm run build 编译代码
  + npm start 直接执行app.js不需要改写babel-register命令

---
## 扩展(如果有需要请继续)
### 1.修改src/app.js src/config.js
- 修改config.js代码如下

```bash
viewPath: path.join(__dirname, './../views'),
publicPath:path.join(__dirname,'./../public'),
staticPath:path.join(__dirname,'./../static'),
node_modulesPath:path.join(__dirname,'./../node_modules'),
```
- 修改app.js中静态资源配置信息为

```bash
app.use('/public',express.static(config.publicPath));
app.use('/node_modules',express.static(config.node_modulesPath));
app.use('/static',express.static(config.staticPath));
```

### 2.使用ES6语法更新js代码
+ 常用的语法有
  - var http = require('http') --> import http from 'http';//全部导入
  - var path = require('path') --> import { join } from 'path';//导入指定方法
  - var myModel = require('./myModel') --> import * as myModel from './myModel';//导入自定义模块
  - export function methodName(){}//在自定义模块中创建一个方法
  - export default methodName/objName;//使用export default 命令
  - 通过 const 定义常量
  - 通过 let 定义变量
  - 使用模板字符串
  - 通过class 定义类
  - 直接函数名(){..}定义函数，无需通过function关键字


### 3.添加ORM框架--sequelize
 + 安装 npm install sequelize
 + 在config.js文件中添加数据库配置信息
 ```bash
  DB_HOST:"127.0.0.1",
  DB_USER:"root",
  DB_PASSWORD:"root",
  DB_DATABASE:"itcast",
  DB_PORT:"3306",
  DB_DIALECT : "mysql"
 ```
 + 在src目录添加数据库工具sequelize.js
 ```bash
import Sequelize from "sequelize"
import Config from './config'

const sequelize = new Sequelize(Config.DB_DATABASE, Config.DB_USER, Config.DB_PASSWORD,{
  host: Config.DB_HOST,
  dialect: Config.DB_DIALECT
});

export default sequelize

 ```
 + 在src目录下新建mapper文件夹，存放ORM映射文件,比如
 ```bash
import sequelize from '../sequelize'
import  Sequelize from 'sequelize'

const User = sequelize.define('t_user',{
  user_name: Sequelize.STRING,
  user_password: Sequelize.STRING
});
```

### 4.将代码修改成restful风格

+ 修改routes目录下的 JS文件，我修改users.js为例代码如下
```javascript
import  express from 'express';

import  handler  from '../controllers/users';

const router = express.Router();

/* GET users listing. */
router.get('/users', handler.getAllUsers);
//router.post('/users/:id', handler.getAllUsers);
//router.put('/users/:id', handler.getAllUsers);
//router.delete('/user/:id', handler.getAllUsers);

export default router;

```


### 5.错误处理
+ 在app.js中已经添加了错误处理中间件，只需要再程序中修改代码即可
+ 以前错误直接throw err, 现在修改为return next(err)即可
+ 以controllers/users.js为例
```javascript
getAllUsers: function (req, res, next) {
  readFile('xx',(err)=>{
    if(err){
      return next(err)
    }
  })
}
```

### 6.让路由自动扫描摆脱手动配置的束缚
+ 1.安装glob
```bash
npm install --save glob
```
+ 2.在config.js中添加路由目录
```bash
routePath: path.join(__dirname, 'routes/**/*.js');
```

+ 3.在app.js钟引入glob,并且将之前写死的路由替换掉
**注意：因为glob是异步的所以实用ES6的Promise语法，必须在加载完路由后才能加载404页面和错误页面，顺序不能乱**
+ 之前的
```javascript
//手动载入路由
app.use('/', index);
app.use('/api/users', users);
```
+ 修改之后的
```javascript
function loadRoutes(){
  return new Promise((resolve,reject) => {
    glob(config.routePath, (err, files) => {
      if (err) {
        reject(err);
      }
      files.forEach( (filePath) => {
        const router = require(filePath).default;

        if (typeof router === 'function') {
          app.use(router.prefix, router);
          console.log('路由添加成功,路由信息:' + router.prefix);
        }
      });

      resolve();
    })
  });
}

loadRoutes()
  .then(() => {
    //配置404页面
    app.use((req, res, next) => {
      var err = new Error('Not Found');
      err.status = 404;
      next(err);
    });

    //配置错误处理中间件，以前错误直接throw err, 现在修改为next(err)即可
    app.use((err, req, res, next) => {
      // set locals, only providing error in development
      res.locals.message = err.message;
      res.locals.error = req.app.get('env') === 'development' ? err : {};

      // render the error page
      res.status(err.status || 500);
      res.render('error.html');
    });
  })
```
+ 4.修改routes目录下的所有路由: 给路由挂载访问前缀
+ 例如之前app.js中配置users路由是app.use('/api/users',users),前缀就是/api/users
+ 只需要在users.js钟创建完毕route对象后添加前缀就可以
```javascript
const router = express.Router();
router.prefix = '/api/users';
```


### 7.服务器端口配置
+ 之前端口是写死在src/bin/www.js文件中的，现在将端口配置到config中
+ 1.在config.js中添加配置信息
```javascript
serverPort: "5000",
```
+ 2.修改src/bin/www.js文件
引入config
```javascript
import config from './../config'
```
+ 修改代码var port = normalizePort(process.env.PORT || 3000);，修改为
```javascript
var port = normalizePort(process.env.PORT || config.serverPort);
```

### 8.添加express代理中间件
+ 1.安装http-proxy-middleware
```bash
npm install --save http-proxy-middleware
```
+ 2.在config.js中添加,注意必须指定协议，我这里是http
```bash
  proxyPrefix:'/api',
  proxyTarget:'http://127.0.0.1:3000',
```
+ 3.修改app.js
- 引入插件

```bash
import proxy from 'http-proxy-middleware';
```
- 添加中间件，越早引入越好，这样速度会比较快

```bash
if(config.proxyTarget &&config.proxyPrefix && config.proxyTarget!=""){
  app.use(config.proxyPrefix, proxy({target: config.proxyTarget, changeOrigin: true}));
  console.log('代理配置成功,代理uri:'+config.proxyPrefix+" 服务器: "+config.proxyTarget);
}
```



### 9.最后添加一些可能用到的npm包
1. formidable 图片上传
2. validator node后端表单校验
3. open node程序启动完毕，自动打开浏览器
4. express-session
5. http-proxy-middleware    express中间代理
6. glob 文件搜索用到，可递归搜索
7. moment.js 时间处理 moment().format();
8. art-template

