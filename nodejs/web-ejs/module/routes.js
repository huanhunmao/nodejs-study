const fs = require("fs");
const url = require("url");
const path = require("path");
const ejs = require("ejs");

// 私有方法   不暴露出来 只在这个里面使用
var getFileMine = function (extname) {
  var data = fs.readFileSync("./data/test.json"); // 同步方法
  var mimeObj = JSON.parse(data.toString());
  return mimeObj[extname];
};

var app = {
  // 静态 web服务
  static: (req, res, staticPath) => {
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
      try {
        var data = fs.readFileSync("./" + staticPath + pathname);
        if (data) {
          var mine = getFileMine(extname);
          res.writeHead(200, {
            "Content-Type": "" + mine + ';charset="utf-8"',
          });
          res.end(data);
        }
      } catch (error) {}
    }
  },
  // 下面是一些路由
  news: (req, res) => {
    // res.end("news");
    ejs.renderFile("./views/form.ejs", {}, (err, data) => {
      res.writeHead(200, { "Content-Type": 'text/html;charset="utf-8' });
      res.end(data);
    });
  },
  register: (req, res) => {
    res.end("register");
  },
  doRegister: (req, res) => {
    res.end("doRegister");
  },
  error: (req, res) => {
    res.end("error");
  },
};

// 常规调用方法有两种
// app.login('req...','res...')
// app["login"]('req...','res...')
// 将这个app暴露出去
module.exports = app;
