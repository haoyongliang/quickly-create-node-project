#构建node项目

## github地址 
	https://github.com/haoyongliang/quickly-create-node-project.git

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


### 添加babel ES6转码器
+ 1.安装ES6转码规则
```bash
npm install --save-dev babel-preset-es2015
```

+ 2.在项目根目录添加.babelrc配置文件，内容如下

```bash
  {
    "presets": [
      "es2015"
    ],
    "plugins": []
  }
```

+ 3.在项目中添加babel-cli工具，用于命令行转码
注意：只能使用npm,别使用npm install 安装包依赖，会报丢失模块错误,如果要使用cnpm安装，请全局安装babel-cli工具(参见阮一峰ES6)

```bash
npm install --save-dev babel-cli
```

+ 4.修改package.json

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

+ 5.在项目跟目录新建src和dist目录，将bin,controllers,routers文件夹和app.js,config.js文件放入src目录,修改bin/www 添加后缀bin/www.js

+ 6.运行 命令进行转码,测试安装是否顺利

```bash
npm run build 
```

+ 7.安装babel-register
- 安装
```bash
npm install --save-dev babel-register
```


+ 8.在项目根目录新建index.js,内容如下

```bash
require('babel-register')
require('./src/bin/www')
```

+ 9.配置package.json 中的scripts(执行命令)
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


+ 10.修改src/app.js src/config.js
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