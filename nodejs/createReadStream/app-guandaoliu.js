// 引入 fs模块
const fs = require("fs");

// 创建 读取流
var readStream = fs.createReadStream("./app.js");
// 创建 写入流
var writeStream = fs.createWriteStream("./data/app-copy.js");
// 管道操作 读取流的内容 流进写入流里面
readStream.pipe(writeStream);
