#快速构建node项目

分13步： 
# 1.全局安装express

npm install -g express

# 2.全局安装express-generator

npm install -g express-generator
(此时可以测试一下，输入express - -help) 
# 3.进入到·工程父目录

cd [工程父目录名]
# 4.快速创建工程结构

express -t [模板引擎名：ejs/jade] [工程名]   我一般是用express -e mypro

# 5.替换ejs,修改package.json,将里面的ejs删除

# 6.下载node_modules  ,执行命令 node install
# 7.安装nunjucks,执行命令 npm install --save nunjucks
# 8.修改app.js,替换其中的模板引擎

```javascript
var nunjucks = require('art-template');
// 配置使用 NunJucks 模板引擎
const env = nunjucks.configure(path.join(__dirname, 'views'), {
  noCache: true
})
env.express(app)
```

# 9.修改views/index.ejs, views/error.efs ==>index.html,error.html
    将里面的<%= xx %>替换成{{  xxx}}

# 10.修改app.js,routes/index.js
    将其中的render("xxx")加后缀修改成render("xxx.html")

# 11.在app.js同级目录添加config.js

```javascript
var path = require('path')
module.exports = {
}
```

# 12.在app.js 

同级目录添加controllers目录,并在目录下添加index.js,用于存放路由的具体业务逻辑
    
```javascript    
module.exports.homePage = (req, res, next) => { 
	res.render('index.html',{title:'Express'});
}
```

# 13.修改routes/indexs.js路由

```javascript
var express = require('express');
var router = express.Router();
var handler = require('../controllers/index')
/* GET home page. */
router.get('/', handler.homePage);
module.exports = router;
```

# 14.正式开发,在routes目录下有个user.js路由,我们每次访问该网址应该是 http://localhost:3000/user,所以route.use('/user',..)在该js中出现多次

修改app.js
```javascript
var user = require('./routes/user');
// 挂载用户路由
// 加上前缀，这样的话，user 中的路由就都必须是以 /user开头才行
app.use('/user',user);

修改routes/user.js
var express = require('express');
var router = express.Router();
/* GET users listing. */
router.get('/add', function(req, res, next) {
  res.send('add student');
});
module.exports = router;
```              
访问 http://localhost:3000/users/add

