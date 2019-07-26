
//同步读写文件

const fs = require('fs');
const util = require('util'); 

//1.同步 

/*
//1.1 逐步操作

//1.1.1打开文件
const fd = fs.openSync('./01.txt','w')
// console.log(fd)

//1.1.2写入文件
fs.writeSync(fd,'hello,wkk')

//1.1.3关闭文件
fs.closeSync(fd)
*/




//1.2 合并操作
// fs.writeFileSync('./01.txt','hi,wkk',{flag:'a'})








/*

//2.异步
//2.1 逐步操作

	//2.1.1 打开文件
fs.open('./01.txt','w',(err,fd)=>{
	if (err) {
		console.log('open file error',err)
	} else {

		//2.1.2写入文件
		fs.write(fd,'hello',(err)=>{
			if (err) {
				console.log('write file error',err)
			} else {
				console.log('write file success')
			}

			//2.1.3关闭文件
			fs.close(fd,err=>{
			if (err) {
				console.log('write file error',err)
			} else {
				console.log('write file success')
			}
			})
		})
	}
})

*/










/*
//2.2合并操作
fs.writeFile('./01.txt','hi,wkk',{flag:'w'},err=>{
	if (err) {
		console.log('write file error',err)
	} else {
		console.log('write file success')
	}
})


console.log('do something after write file.....')

*/





//3.promisify处理异步
const writeFile = util.promisify(fs.writeFile)

writeFile('./01.txt','hi,wkk',{flag:'a'})
.then(data=>{
	console.log('write file success')
})
.catch(err=>{
	console.log('write file error',err)
})















































































