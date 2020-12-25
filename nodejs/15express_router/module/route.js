const url = require("url");
//定义 全局global G 一个空对象
var G = {};

var app = function (req, res) {
  // 执行判断
  // 下面的判断不能是固定的需要执行判断
  // 做对应替换
  // http://127.0.0.1:3000/news
  // http://127.0.0.1:3002/login 需要引入url
  var pathname = url.parse(req.url).pathname;
  if (G[pathname]) {
    //执行方法
    G[pathname](req, res);
  }
};

app.get = function (str, cb) {
  // 注册方法  str是下面传递的路径 cb表示callback回调函数
  G[str] = cb;
  //   相当于 执行了这一步
  /*
G['./login'] = function(req,res){
    res.send('hello world')
}
*/
};

// 暴露出去
module.exports = app;
