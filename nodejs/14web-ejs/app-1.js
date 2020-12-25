var http = require("http");
var url = require("url");

// 引入 routes.js

const app = require("./module/routes");

http
  .createServer(function (req, res) {
    // 创建 静态web服务器
    app.static(req, res, "static");

    // 路由
    var pathname = url.parse(req.url).pathname.replace("/", "");

    //http://127.0.0.1:3001/doRegister pathname=/doRegister
    //http://127.0.0.1:3001/news    pathname=/news

    // 需要在上面加一个 .replace('/','')将斜杠去掉 使用''替换掉了/
    // pathname = doRegister  pathname=news

    try {
      app[pathname](req, res);
    } catch (error) {
      app["error"](req, res); // 加载routes.js里的error项
    }
  })
  .listen(3002);
