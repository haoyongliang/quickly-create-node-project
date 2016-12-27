var path = require('path')

module.exports = {
  viewPath: path.join(__dirname, './../views'),
  publicPath:path.join(__dirname,'./../public'),
  staticPath:path.join(__dirname,'./../static'),
  node_modulesPath:path.join(__dirname,'./../node_modules'),
  DB_HOST:"127.0.0.1",
  DB_USER:"root",
  DB_PASSWORD:"root",
  DB_DATABASE:"itcast",
  DB_PORT:"3306"
}
