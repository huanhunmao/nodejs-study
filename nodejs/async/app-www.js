// 1、isDir判断是目录-true  文件-false
const fs = require("fs");
async function isDir(path) {
  return new Promise((resolve, reject) => {
    fs.stat(path, (error, stats) => {
      if (error) {
        console.log(err);
        reject(err);
        return;
      }
      if (stats.isDirectory()) {
        resolve(true);
      } else {
        resolve(false);
      }
    });
  });
}

// 2、获取 wwwroot 里面的所有资源 循环遍历
function main() {
  var path = "./wwwroot";
  var dirArr = [];
  fs.readdir(path, async (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    for (var i = 0; i < data.length; i++) {
      if (await isDir(path + "/" + data[i])) {
        dirArr.push(data[i]);
      }
    }
    console.log(dirArr);
  });
}

main();
