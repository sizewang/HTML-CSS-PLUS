
const EventEmitter = require('events')
class CustomEmitter extends EventEmitter{

}
// ----------------------------------添加事件监听-----------------------------------------
//1.用 on
const emitter = new EventEmitter()
emitter.on('test',()=>{
	console.log('execute test fn...')
})
emitter.emit('test')

//2.用 addListener
emitter.on('addListener',()=>{
	console.log('execute test666 fn6...')
})
emitter.emit('test')


//3.用once
emitter.once('test',()=>{
	console.log('execute test fn3...')
})
emitter.emit('test')


/*
注意点:
	emitter.addListener和emitter.on(eventName, listener)是同一个方法
	一个EventEmitter对象默认最大可以有10个监听,
	可以通过emitter.setMaxListeners(n)来设置最大监听数
	和浏览器端的事件不同,监听函数的第一个参数就是触发时传入的参数而不是event对象
*/
















































































