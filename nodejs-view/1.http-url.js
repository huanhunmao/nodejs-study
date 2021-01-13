// 使用 http模块 输入内容网页不乱码
var http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-type": "text/html;" });
    res.write("<head><meta charset='utf-8'></head>");
    res.end("Hello world 你好");
    console.log(req.url);
  })
  .listen(8081);

console.log("Server is running");
