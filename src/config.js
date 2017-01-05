import { join } from 'path';

export default   {
  viewPath: join(__dirname, './../views'),
  publicPath:join(__dirname,'./../public'),
  staticPath:join(__dirname,'./../static'),
  node_modulesPath:join(__dirname,'./../node_modules'),
  routePath: join(__dirname, 'routes/**/*.js'),

  serverPort: "5000",

  proxyPrefix:'/api',
  proxyTarget:'http://127.0.0.1:3000',

  DB_HOST:"127.0.0.1",
  DB_USER:"root",
  DB_PASSWORD:"root",
  DB_DATABASE:"dbname",
  DB_PORT:"3306",
  DB_DIALECT : "mysql"
}
