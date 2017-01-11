import log4js from 'log4js'

log4js.configure({

  appenders: [
    {
      type: 'console',
      category: "console"

    }, //控制台输出
    {
      type: "file",
      filename: 'logs/access.log',
      pattern: "_yyyy-MM-dd",
      maxLogSize: 20480,
      backups: 3,
      "alwaysIncludePattern": true,
      category: 'dateFileLog'

    }//日期文件格式
  ],
  replaceConsole: true,   //替换console.log
  levels: {
    dateFileLog: 'debug',//等级可以设置ALL,AUTO,INFO,WARN,ERROR
    console: 'debug',
    app: 'all'
  }
});


const dateFileLog = log4js.getLogger('dateFileLog');
const consoleLog = log4js.getLogger('console');
// export default   dateFileLog;//生产环境
export default consoleLog;//开发环境
// export  default {
//   trace: function (message) {
//     dateFileLog.trace(message);
//     consoleLog.trace(message);
//   },
//   debug: function (message) {
//     dateFileLog.debug(message);
//     consoleLog.debug(message);
//   },
//   info: function (message) {
//     dateFileLog.info(message);
//     consoleLog.info(message);
//   },
//   warn: function (message) {
//     dateFileLog.warn(message);
//     consoleLog.warn(message);
//   },
//   error: function (message) {
//     dateFileLog.error(message);
//     consoleLog.error(message);
//   },
//   fatal: function (message) {
//     dateFileLog.fatal(message);
//     consoleLog.file(message);
//   }
// }

