import log4js from 'log4js'

log4js.configure({

  appenders: [
    {
      type: 'console',
      category: "console"

    }, //控制台输出
    {
      // "type": "dateFile",                 // 日志文件类型，可以使用日期作为文件名的占位符
      // "filename": "logs/",     // 日志文件名，可以设置相对路径或绝对路径
      // "pattern": "debug/yyyyMMddhh.txt",  // 占位符，紧跟在filename后面
      // "absolute": true,                   // filename是否绝对路径
      // "alwaysIncludePattern": true,       // 文件名是否始终包含占位符
      // "category": "dateFileLog"               // 记录器名
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
  levels:{
    dateFileLog: 'debug',//等级可以设置ALL,AUTO,INFO,WARN,ERROR
    console: 'debug',
    app:'all'
  }
});


const dateFileLog = log4js.getLogger('dateFileLog');
const consoleLog = log4js.getLogger('console');
export default   dateFileLog;//生产环境
// export default consoleLog;//开发环境

