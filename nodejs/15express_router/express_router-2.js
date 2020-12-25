//定义 全局global G 一个空对象
var G = {};

var app = function (req, res) {
  // 执行判断
  if (G["/news"]) {
    //执行方法
    G["/news"](req, res);
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

app.post = function () {
  console.log("post方法");
};

//执行方法
app.get("/news", function (req, res) {
  //   res.send("hello world");
  console.log("执行news方法");
});

setTimeout(() => {
  app("req", "res");
}, 1000);
