// 单独写一个模块 导出这个模块 匹配常见后缀
exports.getMine = function (extname) {
  switch (
    extname // extname 表示后缀
  ) {
    case ".html":
      return "text/html";
    case ".css":
      return "text/css";
    case ".js":
      return "text/javascript";
    default:
      return "text/html";
  }
};

// const fs = require("fs");
// exports.getFileMine = function (extname) {
//   return new Promise((resolve, reject) => {
//     fs.readFile("./data/test.json", (err, data) => {
//       if (err) {
//         console.log(err);
//         reject(err); // 失败捕获
//         return;
//       }

//       let mimeObj = JSON.parse(data.toString());
//       // console.log(mimeObj[extname]);
//       resolve(mimeObj[extname]); // 成功时拿到后缀
//     });
//   });
// };

// 第二种方法
const fs = require("fs");
exports.getFileMine = function (extname) {
  var data = fs.readFileSync("./data/test.json"); // 同步方法
  var mimeObj = JSON.parse(data.toString());
  return mimeObj[extname];
};
