//定义模块
// console.log('in m5...')
const str = 'hello'
const fn = ()=>{
    console.log('fn...')
}
const obj = {
    name:'Tom',
    age:18
}




/*
console.log(exports)
console.log(module.exports)
console.log(module.exports == exports)
*/



//调用以上定义的常量的方法之一
// exports.str = str
// exports.fn = fn
// exports.obj = obj



////调用以上定义的常量的方法之一
/*
module.exports.str = str
module.exports.fn = fn
module.exports.obj = obj
*/




//如果要添加属性来导出值,可以使用module.exports对象或者exports对象
//如果要导出一个对象,只能使用module.exports对象,此时exports对象的值就不会被导出

//调用以上定义的常量的方法之一
// exports = {
//     str,
//     fn,
//     obj
// }





//如果要添加属性来导出值,可以使用module.exports对象或者exports对象
//如果要导出一个对象,只能使用module.exports对象,此时exports对象的值就不会被导出

//推荐使用module.exports调用以上定义的常量
module.exports = {
    str,
    fn,
    obj
}





//调用以上定义的常量的方法之一
/*
exports.str = str
module.exports = {
    fn,
    obj
}
*/