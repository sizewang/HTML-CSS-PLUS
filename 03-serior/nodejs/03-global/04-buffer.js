
//buffer 是一个存放二进制数据的容器(类似于数组)
const buf1 = Buffer.from('z')
console.log(buf1)

//一个英文字母 = 2 个 16 进制数

/*
	一个二进制的0 或者 1 代表了 1bit(位)
	8bit(位) = 1B(字节) = 2个16进制数
	1个英文字符 = 1B
	1个汉字 = 3B


	1kb = 1024B
	1MB = 1024kb
	1GB = 1024MB
	1TB = 1024GB
*/


const buf2 = Buffer.from('酷')
console.log(buf2)
//1个汉字 = 3B





// Buffer.alloc(size[, fill[, encoding]])
// size {Number}
// fill {Value} 默认：undefined
// encoding {String} 默认：utf8
// 如果 size 不是一个数字则抛出一个 TypeError 错误。
const buf3 = Buffer.alloc(10)
// console.log(buf3)


buf3[0] = 14
console.log(buf3)


buf3[1] = 0xab
console.log(buf3)


buf3[9] = 0xab
console.log(buf3)




// 如果 size 不是一个数字则抛出一个 TypeError 错误。
const buf4 = Buffer.alloc(6, 'a');
console.log(buf4);



const buf5 = Buffer.alloc(11, 'wkk', 'base64');
console.log(buf5);















