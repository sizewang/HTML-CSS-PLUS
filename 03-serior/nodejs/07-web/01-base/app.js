
const http = require('http')

//每一次请求都会执行createServer方法中的函数
const server = http.createServer((req,res)=>{
	// req 它实现了 可读流 接口
	// res 它实现了 可写流 接口

	res.write('hello')
	res.end('good')


})


//一在端口监听  就会执行回调函数
server.listen(3000,'127.0.0.1',()=>{
	console.log('server is running on http://127.0.0.1:3000')
})



























































