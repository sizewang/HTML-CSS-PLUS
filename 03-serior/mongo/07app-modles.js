
const mongoose = require('mongoose')

//1.连接数据库
mongoose.connect('mongodb://localhost/kuazhu', {useNewUrlParser: true})

//获取db对象
const db = mongoose.connection

//连接数据库失败
db.on('error',(err)=>{
    console.log('connection db error')
    throw err
})

db.once('open',()=>{
    //1.定义Schema
    const UserSchema = new mongoose.Schema({
        name: String,
        age:Number,
        major:String
    })



    //2.根据Schema定义数据模型
    //2.1 model方法第一个参数指定集合名称,mongoose会默认转换为复数
    //2.2 model方法第二个参数指定Schema
    const UserModel = mongoose.model('user', UserSchema);






 //3.4 删除      获取去重后的值
 UserModel.distinct("major",{age:{$gt:80}},(err,result)=>{
        if(err){
            console.log('deleteOne user error:',err)
        }else{
            console.log(result)
        }       
  })
  


})





