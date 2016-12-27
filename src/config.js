import { join } from 'path';

module.exports = {
  viewPath: join(__dirname, './../views'),
  publicPath:join(__dirname,'./../public'),
  staticPath:join(__dirname,'./../static'),
  node_modulesPath:join(__dirname,'./../node_modules'),
  DB_HOST:"127.0.0.1",
  DB_USER:"root",
  DB_PASSWORD:"root",
  DB_DATABASE:"itcast",
  DB_PORT:"3306"
}
