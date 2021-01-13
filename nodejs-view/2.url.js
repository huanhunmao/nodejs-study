//这部分展示 的 url url.parse的使用

const http = require("http");
const url = require("url");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-type": "text/html" });
    res.write("<head><meta charset='utf-8'></head>");
    res.end("hello url 真好");
    console.log(req.url); ///?name=zhangsan&age=20  /favicon.ico
    if (req.url != "/favicon.ico") {
      var userinfo = url.parse(req.url, true).query;
      console.log(userinfo); //[Object: null prototype] { name: 'zhangsan', age: '20' }
      console.log(url.parse(req.url)); // 打印出拆分的url 其中包含 query: 'name=zhangsan&age=20',
      console.log(`姓名:${userinfo.name}--年龄${userinfo.age}`);
    }
  })
  .listen(8081);

console.log("server is running");
