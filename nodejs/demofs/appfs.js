

// 1、fs.stat  检测是文件还是目录

// const fs = require("fs")
// fs.stat('./html',(err,data)=>{
//     if(err){
//         console.log(err);
//         return;
//     }

//     console.log(`是文件：${data.isFile()}`);
//     console.log(`是目录：${data.isDirectory()}`)
// })

// 2、fs.mkdir 创建 目录 
// const fs = require("fs")
// fs.mkdir('./css',(err)=>{
//     if(err){console.log(err);return ;}
//     console.log('创建成功')
// })

// 3、fs.writeFile() 写入文件
// const fs = require("fs")

// fs.writeFile('./html/index.html' ,"你好nodejs",(err)=>{
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log('写入成功')  
// })

// 4、appendFile() 追加 文件 

// const fs = require("fs")
// fs.appendFile("./css/base.css",'body{color:red}',(err)=>{
//     if(err){
//                console.log(err);
//                 return;
//            }
//           console.log('appendFile 成功')  
// })

// 5、fs.readFile() 读取文件 
// const fs = require("fs")
// fs.readFile("./html/index.html",(err,data)=>{
//     if(err){
//                         console.log(err);
//                         return;
//                     }
//                   console.log(data)  
//                   console.log(data.toString()) //把 Buffer转化为 string类型
// })

// 6、fs.readdir()  读取目录
// const fs = require("fs")
// fs.readdir("./html",(err,data)=>{
//       if(err){
//                 console.log(err);
                    // return;
//                 }
//               console.log(data)  
//  })

// 7、fs.rename 重命名/移动文件 
// const fs = require("fs")

// 重命名
// fs.rename("./css/index.css","./css/base.css",(err)=>{
//       if(err){
//                  console.log(err);
//                  return;
//                  }
//                console.log('成功')  
// })

//移动文件
// fs.rename("./css/base.css","./html/base.css",(err)=>{
//       if(err){
//                  console.log(err);
//                  return;
//                  }
//                console.log('移动成功')  
// })

// 8、fs.unlink 删除文件
// const fs = require("fs")

// fs.unlink('./aaa/index.js',(err)=>{
//           if(err){
//                  console.log(err);
//                  return;
//                  }
//                console.log('删除文件成功')  
// })

// 9、fs.rmdir 删除目录
const fs = require("fs")

fs.rmdir('./aaa',(err)=>{
          if(err){
                 console.log(err);
                 return;
                 }
               console.log('删除目录成功')  
})