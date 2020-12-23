const fs = require("fs");
const path = "./wwwroot";

var dirArr = [];
fs.readdir(path, (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  (function getDir(i) {
    if (i == data.length) {
      console.log(dirArr);
      return;
    }
    fs.stat(path + "/" + data[i], (error, datas) => {
      if (datas.isDirectory()) {
        dirArr.push(data[i]);
      }
      getDir(i + 1);
    });
  })(0);
});
