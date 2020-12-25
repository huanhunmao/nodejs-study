var http = require("http"); //引入http
const app = require("./module/route"); //引入路由

// 新建 http服务
var http = require("http");
http.createServer(app).listen(3005);

// 配置路由
app.get("/", function (req, res) {
  //   res.send("hello world");
  res.writeHead(200, { "Content-Type": 'text/html;charset="utf-8"' });
  res.end("首页");
});

app.get("/news", function (req, res) {
  //   res.send("hello world");
  res.writeHead(200, { "Content-Type": 'text/html;charset="utf-8"' });
  res.end("新闻页面");
});
