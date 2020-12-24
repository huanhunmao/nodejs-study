var http = require("http");
var url = require("url");
// 引入 routes.js
const routes = require("./module/routes");

http
  .createServer(function (req, res) {
    // 创建 静态web服务器
    routes.static(req, res, "static");

    // 路由
    var pathname = url.parse(req.url).pathname;

    if (pathname == "/login") {
      res.writeHead(200, { "Content-Type": ' text/html ;charset="utf-8"' });
      res.end("执行登陆");
    } else if (pathname == "/register") {
      res.writeHead(200, { "Content-Type": ' text/html ;charset="utf-8"' });
      res.end("执行注册");
    } else if (pathname == "/admin") {
      res.writeHead(200, { "Content-Type": ' text/html ;charset="utf-8"' });
      res.end("处理后的业务逻辑");
    } else {
      res.writeHead(404, { "Content-Type": ' text/html ;charset="utf-8"' });
      res.end("页面不存在");
    }
  })
  .listen(3001);
