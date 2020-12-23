var http = require("http");
var fs = require("fs");
var path = require("path");
var url = require("url");
// 引入 common.js
const common = require("./module/common");

common.getFileMine(".gif");
http
  .createServer(function (req, res) {
    // 1、读取地址
    // var pathname = req.url;
    var pathname = url.parse(req.url).pathname;
    // console.log(url.parse(req.url));
    // 需要加一点判断
    pathname = pathname == "/" ? "/test.html" : pathname;

    // 这个方法  可以获取后缀名 path.extname
    var extname = path.extname(pathname);
    // 2、通过fs 模块读取文件
    if (pathname != "/favicon.ico") {
      fs.readFile("./static" + pathname, async (err, data) => {
        if (err) {
          res.writeHead(404, { "Content-Type": 'text/html;charset="utf-8"' });
          res.end("404 这个界面不存在");
        }
        var mine = await common.getFileMine(extname);
        res.writeHead(200, { "Content-Type": "" + mine + ';charset="utf-8"' });
        res.end(data);
      });
    }
  })
  .listen(3001);
