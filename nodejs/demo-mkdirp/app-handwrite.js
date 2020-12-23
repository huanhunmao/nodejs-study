const fs = require("fs");

var path = "./upload";

// 判断是目录还是文件
fs.stat(path, (err, data) => {
  if (err) {
    //创建目录
    mkdir(path);
    return;
  }
  if (!data.isDirectory()) {
    fs.unlink(path, (err) => {
      if (!err) {
        mkdir(path);
      } else {
        console.log("请检查输入");
      }
    });
  }
});

// 创建目录
function mkdir(dir) {
  fs.mkdir(dir, (err) => {
    if (err) {
      console.log(err);
      return;
    }
  });
}
