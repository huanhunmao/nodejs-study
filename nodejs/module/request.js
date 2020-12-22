

var obj = {
    get:function(){
        console.log('向服务器请求数据')
    },
    post:function(){
        console.log('提交数据')
    }
}

exports.OB = obj;
module.exports = obj