//定义模块

const str = 'hello'

const fn = ()=>{
	console.log('fn...')
} 	


const obj = {
	name:'Tom',
	age:18,
	sex:'male'
}

/*
console.log(exports)
console.log(module.exports)
console.log(module.exports==exports)
*/	







// exports.str = str
// exports.fn = fn
// exports.obj = obj


// exports = {
// 	str,
// 	fn,
// 	obj
// }











// module.exports.str = str
// module.exports.fn = fn
// module.exports.obj = obj



module.exports = {
	str,
	fn,
	obj
}